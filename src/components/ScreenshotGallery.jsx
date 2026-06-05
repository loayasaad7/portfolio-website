import { Image, LayoutDashboard, MonitorSmartphone } from 'lucide-react'
import { useState } from 'react'

function ScreenshotCard({ screenshot, index }) {
  const [failed, setFailed] = useState(false)
  const Icon = screenshot.type.toLowerCase().includes('admin') ? LayoutDashboard : MonitorSmartphone

  return (
    <figure className="screenshot-card">
      {!failed ? (
        <img src={screenshot.src} alt={screenshot.alt} onError={() => setFailed(true)} />
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
  return (
    <div className="screenshot-gallery">
      {images.map((screenshot, index) => (
        <ScreenshotCard key={screenshot.src} screenshot={screenshot} index={index} />
      ))}
      {images.length === 0 && (
        <div className="empty-gallery">
          <Image size={28} aria-hidden="true" />
          <p>Project visuals will be added soon.</p>
        </div>
      )}
    </div>
  )
}
