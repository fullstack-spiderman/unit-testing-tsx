import {render, screen} from '@testing-library/react'
import Greet from './Greet'


describe("Greet Component", () => {
    test('render value of the name prop if given', () => {
        const name = 'Arjun'
        render(<Greet name={name} />)
        const textContent = screen.getByText(`Hello, ${name}`)
        expect(textContent).toBeInTheDocument()
    })

    test('render the default value if the name prop is not given', () => {
        render(<Greet />)
        const textContent = screen.getByText('Hello, world')
        expect(textContent).toBeInTheDocument()
    })
})