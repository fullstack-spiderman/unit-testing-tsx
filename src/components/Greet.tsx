type GreetProps = {
    name?: string
}

export default function Greet({name}: GreetProps): JSX.Element {
  return (
    <p>
        Hello, {name ? name : 'world'}
    </p>
  )
}
