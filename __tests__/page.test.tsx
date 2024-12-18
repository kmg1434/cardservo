import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import Home from '../app/page'
 
test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('main')).toBeDefined()
  expect(screen.getByText('Cardservo')).toBeDefined()
})