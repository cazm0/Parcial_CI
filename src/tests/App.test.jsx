import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renderiza correctamente', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
  it('muestra el título e icon en header', () => {
    render(<App />);
    expect(screen.getAllByText(/Build and Dress/i)[0]).toBeInTheDocument();
    expect(screen.getByAltText(/Bunny Icon/i)).toBeInTheDocument();
  });

  it('renderiza las imagenes del juego', () => {
    render(<App />);
    expect(screen.getByAltText(/Bunny Body/i)).toBeInTheDocument();
  });

  it('texto en el footer presente', () => {
    render(<App />);
    expect(screen.getByText(/UTN FRRe/i)).toBeInTheDocument();
  });
})
