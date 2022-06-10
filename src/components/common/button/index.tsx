import './style.scss'

export interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <div className="btn-wrap">
      <a href="#" className="btn-main">
        {text}
      </a>
    </div>
  )
}
