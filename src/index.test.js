import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CustomToggler } from '.'

const data = [
  { label: 'Hello', value: 'world' },
  { label: 'What', value: 'now' },
  { label: 'Good', value: 'morning' }
]

describe('CustomToggler', () => {
  it('is truthy', () => {
    expect(CustomToggler).toBeTruthy()
  })

  it('throws error without data', async () => {
    expect(() => {
      render(<CustomToggler />)
    }).toThrowError()
  })

  it('returns a div with class ctConainer', async () => {
    render(<CustomToggler data={data} />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container')).toHaveClass('ctContainer', { exact: false })
  })

  it('returns a div with class name passed as prop', async () => {
    render(<CustomToggler data={data} containerClass="toggle-container" />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container')).toHaveClass('toggle-container', { exact: false })
  })

  it('displays proper number of child spans', async () => {
    render(<CustomToggler data={data} />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelectorAll('span').length).toBe(3)
  })

  it('should have disabled class if passed as prop', async () => {
    render(<CustomToggler data={data} disabled={true} />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container')).toHaveClass('disabled')
  })
})

describe('CustomToggler Item', () => {
  it('should have class ctItem by default', async () => {
    render(<CustomToggler data={data} />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelector('span')).toHaveClass('ctItem')
  })

  it('should have custom class name if passed as prop', async () => {
    render(<CustomToggler data={data} itemClass="toggle-item" />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelector('span')).toHaveClass('toggle-item')
  })

  it('should have class active when clicked', async () => {
    render(<CustomToggler data={data} />)
    fireEvent.click(screen.getByTestId('ct-container').querySelector('span'))
    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelector('span')).toHaveClass('active')
  })

  it('should be selected if defaultSelected prop is passed', async () => {
    render(<CustomToggler data={data} defaultSelected="world" />)

    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelector('span')).toHaveClass('active')
  })

  it('should not become active if disabled', async () => {
    render(<CustomToggler data={data} disabled />)
    fireEvent.click(screen.getByTestId('ct-container').querySelector('span'))
    await waitFor(() => screen.getByTestId('ct-container'))

    expect(screen.getByTestId('ct-container').querySelector('span')).not.toHaveClass('active')
  })
})
