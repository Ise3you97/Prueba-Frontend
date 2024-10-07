import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/ViewProductsStyles';

// Define una interfaz para el producto
interface Product {
  id: number;
  name: string;
}

// Componente funcional ViewProducts
export const ViewProducts: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // useEffect para cargar productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3002/bp/products');
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);
  
   // Si hay un error, muestra el mensaje de error
   if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }
  // Filtra los productos según la consulta de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para guardar los detalles del producto seleccionado en AsyncStorage
  const saveProductDetails = async (product: Product) => {
    try {
      await AsyncStorage.setItem('selectedProduct', JSON.stringify(product));
      console.log('Product details saved:', product);
      navigation.navigate('ProductDetails');
    } catch (error) {
      console.error('Failed to save product details', error);
    }
  };

  return (
    <View style={styles.container}>  
      {/* Barra de búsqueda para filtrar productos */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.productList}>
        {/* Mapea los productos filtrados y los muestra */}
        {filteredProducts.map((item, index) => (
          <View key={item.id}>
            <View style={styles.productContainer}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productID}> ID: {item.id}</Text>
              </View>
              <TouchableOpacity 
                style={styles.arrowContainer} 
                onPress={() => saveProductDetails(item)}
              >
                <Text style={styles.arrow}>&gt;</Text>
              </TouchableOpacity>
            </View>
            {/* Separador entre productos */}
            {index < filteredProducts.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </View>
    </View>
  );
};
