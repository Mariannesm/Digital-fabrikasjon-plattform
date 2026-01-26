import type { VideoBlockProps } from './types'

function getVideoEmbedUrl(url: string): string | null {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  // Direct video URL (mp4, webm, etc.)
  if (url.match(/\.(mp4|webm|ogg)$/i)) {
    return url
  }

  return null
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)$/i.test(url)
}

export function VideoEmbed({ title, videoUrl, caption }: VideoBlockProps) {
  const embedUrl = getVideoEmbedUrl(videoUrl)

  if (!embedUrl) {
    return (
      <section className="w-full max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
          Invalid video URL
        </div>
      </section>
    )
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      {title && (
        <h3 className="text-2xl font-bold text-[#214C50] mb-4 text-center">
          {title}
        </h3>
      )}
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
        {isDirectVideo(embedUrl) ? (
          <video
            src={embedUrl}
            controls
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={embedUrl}
            title={title || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      {caption && (
        <p className="mt-3 text-center text-sm text-gray-600">
          {caption}
        </p>
      )}
    </section>
  )
}
