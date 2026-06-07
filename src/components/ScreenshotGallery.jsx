import { Image, LayoutDashboard, Maximize2, MonitorSmartphone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function ScreenshotCard({ screenshot, index, onPreview }) {
  const [failed, setFailed] = useState(false)
  const [orientation, setOrientation] = useState('landscape')
  const Icon = screenshot.type.toLowerCase().includes('admin') ? LayoutDashboard : MonitorSmartphone

  return (
    <figure className={`screenshot-card ${orientation}`}>
      {!failed ? (
        <button className="screenshot-image-button" type="button" onClick={() => onPreview(screenshot)}>
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            onError={() => setFailed(true)}
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget
              setOrientation(naturalHeight > naturalWidth ? 'portrait' : 'landscape')
            }}
          />
          <span className="screenshot-expand" aria-hidden="true">
            <Maximize2 size={18} />
          </span>
          <span className="sr-only">Open {screenshot.title} preview</span>
        </button>
      ) : (
        <div className="screenshot-placeholder" role="img" aria-label={screenshot.alt}>
          <div className="placeholder-toolbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="placeholder-content">
            <div className="placeholder-icon">
              <Icon size={28} aria-hidden="true" />
            </div>
            <div>
              <p className="placeholder-kicker">{screenshot.type}</p>
              <h3>{screenshot.title}</h3>
            </div>
          </div>
          <div className="placeholder-grid">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="placeholder-number">0{index + 1}</span>
        </div>
      )}
      <figcaption>
        <span>{screenshot.type}</span>
        {screenshot.title}
      </figcaption>
    </figure>
  )
}

export function ScreenshotGallery({ images }) {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!preview) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setPreview(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [preview])

  return (
    <>
      <div className="screenshot-gallery">
        {images.map((screenshot, index) => (
          <ScreenshotCard key={screenshot.src} screenshot={screenshot} index={index} onPreview={setPreview} />
        ))}
        {images.length === 0 && (
          <div className="empty-gallery">
            <Image size={28} aria-hidden="true" />
            <p>Project visuals will be added soon.</p>
          </div>
        )}
      </div>

      {preview && (
        <div className="screenshot-modal" role="dialog" aria-modal="true" aria-label={`${preview.title} screenshot`}>
          <button className="screenshot-modal-backdrop" type="button" onClick={() => setPreview(null)} aria-label="Close preview" />
          <div className="screenshot-modal-content">
            <button className="screenshot-modal-close" type="button" onClick={() => setPreview(null)} aria-label="Close preview">
              <X size={22} />
            </button>
            <img src={preview.src} alt={preview.alt} />
            <div className="screenshot-modal-caption">
              <span>{preview.type}</span>
              <strong>{preview.title}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
