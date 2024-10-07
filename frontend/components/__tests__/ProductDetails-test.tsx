import React from 'react'; // Importa React
import { render, waitFor } from '@testing-library/react-native'; // Importa funciones de prueba
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para almacenamiento local
import ProductDetails from '../ProductDetails'; // Asegúrate de que la ruta sea correcta

// Mock para AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),  // Simula la función getItem
  setItem: jest.fn(),  // Simula la función setItem
}));

describe('ProductDetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  // Prueba para verificar que se muestra el texto de carga inicialmente
  it('displays loading text initially', () => {
    const { getByText } = render(<ProductDetails />); // Renderiza el componente
    expect(getByText('Loading...')).toBeTruthy(); // Verifica que el texto de carga se muestre
  });

  // Prueba para verificar que se muestra un mensaje de error si no se encuentran detalles del producto
  it('displays error message when no product details found', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null); // Simula que no hay detalles del producto

    const { getByText } = render(<ProductDetails />); // Renderiza el componente

    // Espera que se muestre el mensaje de error
    await waitFor(() => expect(getByText('No product information available')).toBeTruthy());
  });

  // Prueba para verificar que se muestra un mensaje de error si hay un error al obtener detalles del producto
  it('displays error message when there is an error fetching product details', async () => {
    (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(new Error('Error fetching product details')); // Simula un error

    const { getByText } = render(<ProductDetails />); // Renderiza el componente

    // Espera que se muestre el mensaje de error
    await waitFor(() => expect(getByText('Error fetching product details')).toBeTruthy());
  });

  // Prueba para verificar que se muestran los detalles del producto si están disponibles
  it('displays product details when product information is available', async () => {
    const mockProduct = {
      id: 1,
      name: 'nuevo producto',
      description: 'Descripción producto',
      date_release: '2025-01-01',
      date_revision: '2025-01-01',
      logo: 'assets-1.png',
    };

    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockProduct)); // Simula detalles del producto

    const { getByText } = render(<ProductDetails />); // Renderiza el componente

    await waitFor(() => {
      // Verifica que se muestren los detalles del producto
      expect(getByText('nuevo producto')).toBeTruthy(); // Verifica el nombre del producto
      expect(getByText('Date Release: 2025-01-01')).toBeTruthy(); // Verifica la fecha de lanzamiento
      expect(getByText('Date Revision: 2025-01-01')).toBeTruthy(); // Verifica la fecha de revisión
      expect(getByText('Description: Descripción producto')).toBeTruthy(); // Verifica la descripción
      expect(getByText('ID: 1')).toBeTruthy(); // Verifica el ID del producto
    });
  });
});
