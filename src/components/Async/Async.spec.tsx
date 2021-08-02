import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('its renders correctly', async () => {
    render(<Async />)

    expect(screen.getByText('Hello world')).toBeInTheDocument()

    await waitFor(() => {
        return expect(screen.getByText('Button')).toBeInTheDocument()
    })

    await waitForElementToBeRemoved(screen.queryByText('Button'))
})