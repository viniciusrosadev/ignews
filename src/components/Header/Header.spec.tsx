import { render, screen } from '@testing-library/react'
import { Header } from '.'

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

jest.mock('next-auth/client', () => {
    return {
        useSession() {
            return [null, false]
        }
    }

})

describe('Active link component', () => {
    test('active link renders correctly', () => {
        render(
            <Header />
        )

        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Posts')).toBeInTheDocument()
    })
})

