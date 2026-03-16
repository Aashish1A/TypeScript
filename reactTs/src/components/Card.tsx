import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string,
    footer?: ReactNode
}

const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  )
}

export default Card