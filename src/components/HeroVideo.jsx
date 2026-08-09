import { useEffect, useRef } from 'react'

const FALLBACK_VIDEO = '/media/reina-hero.mp4'
const STREAM_ROOT = '/media/reina-hero-stream'
const STREAM_CODEC = 'video/mp4; codecs="avc1.64001f"'
const SEGMENT_COUNT = 79

export default function HeroVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const controller = new AbortController()
    let mediaSource
    let objectUrl
    let cancelled = false

    const play = () => {
      if (!reducedMotion) video.play().catch(() => {})
    }

    const loadFallback = () => {
      if (cancelled) return
      video.src = FALLBACK_VIDEO
      video.load()
      play()
    }

    if (reducedMotion) return () => controller.abort()

    if (!window.MediaSource || !MediaSource.isTypeSupported(STREAM_CODEC)) {
      loadFallback()
      return () => controller.abort()
    }

    const appendFile = async (sourceBuffer, path) => {
      const response = await fetch(path, { signal: controller.signal })
      if (!response.ok) throw new Error(`Unable to load ${path}`)
      const bytes = await response.arrayBuffer()

      await new Promise((resolve, reject) => {
        const onUpdate = () => {
          sourceBuffer.removeEventListener('error', onError)
          resolve()
        }
        const onError = () => {
          sourceBuffer.removeEventListener('updateend', onUpdate)
          reject(new Error(`Unable to append ${path}`))
        }

        sourceBuffer.addEventListener('updateend', onUpdate, { once: true })
        sourceBuffer.addEventListener('error', onError, { once: true })
        sourceBuffer.appendBuffer(bytes)
      })
    }

    const startStream = async () => {
      try {
        const sourceBuffer = mediaSource.addSourceBuffer(STREAM_CODEC)
        sourceBuffer.mode = 'segments'
        await appendFile(sourceBuffer, `${STREAM_ROOT}/init.mp4`)

        for (let index = 1; index <= SEGMENT_COUNT; index += 1) {
          const number = String(index).padStart(3, '0')
          await appendFile(sourceBuffer, `${STREAM_ROOT}/segment-${number}.m4s`)
          if (index === 4) play()
        }

        if (!cancelled && mediaSource.readyState === 'open') mediaSource.endOfStream()
      } catch (error) {
        if (error.name !== 'AbortError') loadFallback()
      }
    }

    mediaSource = new MediaSource()
    objectUrl = URL.createObjectURL(mediaSource)
    video.src = objectUrl
    mediaSource.addEventListener('sourceopen', startStream, { once: true })

    return () => {
      cancelled = true
      controller.abort()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      className="home-hero__video"
      disablePictureInPicture
      loop
      muted
      playsInline
      poster="/media/reina-hero-poster-hd.webp"
      preload="metadata"
      tabIndex="-1"
    />
  )
}
