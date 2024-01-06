import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

const TestComponent = () => <div>TestComponent</div>

describe('Demo Test Should Run', () => {
  it('should test ', () => {
    const { queryByText } = render(<TestComponent />)
    expect(queryByText('TestComponent')).toBeInTheDocument()
  })
})
