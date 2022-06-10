import React, { Fragment } from 'react'
import './style.scss'

export interface HomeProps {
  children?: React.ReactNode
}

export function Home({ children }: HomeProps) {
  return <Fragment>Home Page</Fragment>
}
