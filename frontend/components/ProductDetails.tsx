import React, { useEffect, useState } from 'react'; // Importa React y hooks necesarios
import { View, Text, Image, TouchableOpacity } from 'react-native'; // Importa componentes de React Native
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para almacenamiento local
import styles from '../styles/ProductDetailsStyles'; // Importa estilos específicos para este componente

// Componente funcional ProductDetails
const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<any>(null); // Estado para almacenar los detalles del producto
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // useEffect para cargar los detalles del producto al montar el componente
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Obtiene los detalles del producto desde AsyncStorage
        const productDetails = await AsyncStorage.getItem('selectedProduct');
        if (productDetails) {
          setProduct(JSON.parse(productDetails)); // Parsea y establece el producto en el estado
        } else {
          setError('No product information available'); // Mensaje de error si no hay información
        }
      } catch (err) {
        setError('Error fetching product details'); // Mensaje de error si falla la obtención
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    };

    fetchProductDetails(); // Llama a la función para obtener los detalles
  }, []); // Dependencias vacías indican que solo se ejecuta al montar el componente

  // Si el componente está cargando, muestra un mensaje de carga
  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  // Si hay un error, muestra el mensaje de error
  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  // Si no hay producto, muestra un mensaje de error
  if (!product) {
    return <Text style={styles.error}>No product information available</Text>;
  }

  // Función para manejar la edición del producto (se puede implementar más adelante)
  const handleEdit = () => {
    // Lógica de edición
  };

  // Función para manejar la eliminación del producto (se puede implementar más adelante)
  const handleDelete = () => {
    // Lógica de eliminación
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ID}>ID: {product.id}</Text> {/* Muestra el ID del producto */}
      <Text style={styles.infoTitle}>Información extra</Text> {/* Título para la información extra */}

      {/* Sección para mostrar el nombre del producto */}
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.title}>{product.name}</Text>
      </View>
      {/* Sección para mostrar la descripción del producto */}
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Descripcion:</Text>
        <Text style={styles.title}>{product.description}</Text>
      </View>
      {/* Sección para mostrar el logo del producto */}
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Logo:</Text>
        <Text style={styles.title}> </Text>
      </View>
      {product.logo && (
        <Image
          source={{ uri: product.logo }} // Asegúrate de que la URL sea válida
          style={styles.logo} // Aplica estilos a la imagen
        />
      )}
      {/* Sección para mostrar la fecha de liberación del producto */}
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Fecha Liberacion:</Text>
        <Text style={styles.title}>{product.date_release}</Text>
      </View>

      {/* Sección para mostrar la fecha de revisión del producto */}
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Fecha Revision:</Text>
        <Text style={styles.title}>{product.date_revision}</Text>
      </View>

      {/* Botones personalizados para editar y eliminar el producto */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text> {/* Botón para editar */}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDelete}>
          <Text style={styles.buttonText}>Eliminar</Text> {/* Botón para eliminar */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails; // Exporta el componente
