import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import { categories } from '../data/clothingCategory';

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

describe('Interacciones', () => {
  it('al seleccionar un outfit, se renderiza en el conejo', () => {
    render(<App />);
    const outfitButton = screen.getByAltText(`selector-${categories[0].options[0].id}`); // ✅ outfit
    fireEvent.click(outfitButton);
    expect(screen.getByAltText(categories[0].options[0].id)).toBeInTheDocument(); // ✅ outfit
  });

  it('al seleccionar un gorro, se renderiza en el conejo', () => {
    render(<App />);
    const hatCategoryButton = screen.getByRole('button', { name: /hats/i });
    fireEvent.click(hatCategoryButton);
    const hatButton = screen.getByAltText(`selector-${categories[1].options[0].id}`); // ✅ hat
    fireEvent.click(hatButton);
    expect(screen.getByAltText(categories[1].options[0].id)).toBeInTheDocument(); // ✅ hat
  });

  it('al seleccionar un accesorio, se renderiza en el conejo', () => {
    render(<App />);
    const accessoryCategoryButton = screen.getByRole('button', { name: /accessories/i });
    fireEvent.click(accessoryCategoryButton);
    const accButton = screen.getByAltText(`selector-${categories[2].options[0].id}`); // ✅ accessory
    fireEvent.click(accButton);
    expect(screen.getByAltText(categories[2].options[0].id)).toBeInTheDocument(); // ✅ accessory
  });
});
