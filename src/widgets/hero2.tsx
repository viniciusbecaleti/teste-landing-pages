import { Button } from '@/components/button'
import Image from 'next/image'

export function Hero2({
  tagline,
  title,
  description,
  actions,
}: {
  tagline?: string
  title: string
  description: string
  actions?: {
    label: string
    url: string
    outlined?: boolean
  }[]
}) {
  return (
    <section className="hero py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            {tagline && <span>{tagline}</span>}
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            {actions && (
              <div className="flex gap-2 mt-4">
                {actions.map((action) => (
                  <Button key={action.label} outlined={action.outlined}>
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1080"
              alt=""
              width={1080}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
