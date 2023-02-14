import React from 'react'

type GreetProps = {
    name?: string
}

export default function Greet({name}: GreetProps) {
  return (
    <p>
        Hello, {name ? name : 'world'}
    </p>
  )
}
