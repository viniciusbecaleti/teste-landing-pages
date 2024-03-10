import { Button } from '@/components/button'

export function Hero({
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
    <section className="hero py-16 text-center">
      <div className="container mx-auto">
        {tagline && <span>{tagline}</span>}
        <h1 className="title">{title}</h1>
        <p className="max-w-[768px] mx-auto">{description}</p>
        {actions && (
          <div className="flex gap-2 justify-center mt-4">
            {actions.map((action) => (
              <Button key={action.label} outlined={action.outlined}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
