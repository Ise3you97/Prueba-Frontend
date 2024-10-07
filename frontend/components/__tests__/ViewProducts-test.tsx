import React from 'react'; // Importa React
import { render, fireEvent, waitFor } from '@testing-library/react-native'; // Importa funciones de prueba
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para almacenamiento local
import { ViewProducts } from '../ViewProducts'; // Importa el componente a probar

// Mocks para axios y AsyncStorage
jest.mock('axios'); // Mockea axios para evitar solicitudes reales
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(), // Mockea la función setItem de AsyncStorage
}));

describe('ViewProducts Component', () => {
  // Mock para la navegación
  const navigationMock = { navigate: jest.fn() };

  // Datos de productos simulados
  const mockProducts = [
    {
      id: 1, // Cambié el id a número
      name: 'nuevo producto',
      description: 'Descripción producto',
      date_release: '2025-01-01',
      date_revision: '2025-01-01',
      logo: 'assets-1.png',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  // Prueba para verificar el manejo de errores al obtener productos
  it('renders an error message if the product fetching fails', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Error fetching products')); // Simula un error

    const { getByText } = render(<ViewProducts navigation={navigationMock} />); // Renderiza el componente

    // Verifica que el mensaje de error se muestre
    await waitFor(() => expect(getByText('Error fetching products')).toBeTruthy());
  });

  // Prueba para verificar el filtrado de productos según la consulta de búsqueda
  it('filters products based on the search query', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockProducts }); // Simula una respuesta exitosa

    const { getByPlaceholderText, getByText } = render(<ViewProducts navigation={navigationMock} />); // Renderiza el componente

    // Espera que el producto simulado se muestre
    await waitFor(() => expect(getByText('nuevo producto')).toBeTruthy());

    const searchInput = getByPlaceholderText('Search Products...'); // Obtiene el campo de búsqueda

    // Cambia el valor de búsqueda
    fireEvent.changeText(searchInput, 'nuevo'); // Simula la entrada del texto
    await waitFor(() => expect(getByText('nuevo producto')).toBeTruthy()); // Verifica que el producto se muestre

    // Verifica que al buscar un término incorrecto, el producto no aparezca
    fireEvent.changeText(searchInput, 'incorrecto'); // Simula la entrada de un término incorrecto
    await waitFor(() => expect(getByText('nuevo producto')).not.toBeTruthy()); // Verifica que no se muestre el producto
  });

  // Prueba para verificar el almacenamiento del producto seleccionado en AsyncStorage y navegación
  it('stores the selected product in AsyncStorage and navigates', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockProducts }); // Simula una respuesta exitosa

    const { getByText } = render(<ViewProducts navigation={navigationMock} />); // Renderiza el componente

    // Espera que el producto simulado se muestre
    await waitFor(() => expect(getByText('nuevo producto')).toBeTruthy());

    // Simula presionar en el producto
    fireEvent.press(getByText('>')); // Suponiendo que '>' es el texto del producto

    // Verifica que AsyncStorage.setItem haya sido llamado con los datos correctos
    await waitFor(() =>
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        'selectedProduct',
        JSON.stringify(mockProducts[0]) // Comprueba que se almacenen los detalles del producto
      )
    );

    // Verifica que se navegue a 'ProductDetails'
    expect(navigationMock.navigate).toHaveBeenCalledWith('ProductDetails'); // Comprueba la navegación
  });
});
