import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HelloWorld from 'components/HelloWorld'

describe('Demo Test Should Run', () => {
  it('should test ', () => {
    const { queryByText } = render(<HelloWorld />)
    expect(queryByText('Hello World Next.js Starter Kit')).toBeInTheDocument()
  })
})
