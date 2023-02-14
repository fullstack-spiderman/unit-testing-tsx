import {render, screen} from '@testing-library/react'
import Greet from 'components/Greet'


describe("Greet Component", (): void => {

    test('render value of the name prop if given', (): void => {
        const name = 'Arjun'
        render(<Greet name={name} />)
        const textContent: HTMLElement = screen.getByText(`Hello, ${name}`)
        expect(textContent).toBeInTheDocument()
    })

    test('render the default value if the name prop is not given', (): void => {
        render(<Greet />)
        const textContent: HTMLElement = screen.getByText('Hello, world')
        expect(textContent).toBeInTheDocument()
    })
})
