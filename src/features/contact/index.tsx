import React, { Fragment } from 'react'
import './style.scss'

export interface ContactProps {
  children?: React.ReactNode
}

export function Contact({ children }: ContactProps) {
  return <Fragment>Contact Page</Fragment>
}
