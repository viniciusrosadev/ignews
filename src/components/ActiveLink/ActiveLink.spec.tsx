import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

// Simula o retorno da chamada de uma importação, podendo usar variaveis
jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe('Active link component', () => {
    test('active link renders correctly', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )

        expect(screen.getByText('Home')).toBeInTheDocument()
    })

    // 2 exemplos para métodos diferentes
    it('adds active class if the link is currently active', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )

        expect(screen.getByText('Home')).toHaveClass('active')
    })
})

