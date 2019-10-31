import React from 'react';
import { render } from '@testing-library/react'
import Dashboard from './components/Dashboard';

test('Strike button is present', () => {
  const { getByText } = render(<Dashboard />)
  const strike = getByText("Strike")
  expect(strike).toBeDefined()
})

test('Ball button is present', () => {
  const { getByText } = render(<Dashboard />)
  const ball = getByText("Ball")
  expect(ball).toBeDefined()
})

test('Foul button is present', () => {
  const { getByText } = render(<Dashboard />)
  const foul = getByText("Foul")
  expect(foul).toBeDefined()
})

test('Hit button is present', () => {
  const { getByText } = render(<Dashboard />)
  const hit = getByText("Hit")
  expect(hit).toBeDefined()
})