import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación
import { createStackNavigator } from '@react-navigation/stack'; // Importa el stack navigator
import { Image, View, Text } from 'react-native'; // Importa componentes básicos de React Native
import { ViewProducts } from './components/ViewProducts'; // Asegúrate de ajustar la ruta según sea necesario
import ProductDetails from './components/ProductDetails'; // Importa el nuevo componente para mostrar detalles del producto
import { styles } from './styles/AppStyles'; // Importa los estilos desde la nueva ruta

// Crea una instancia del stack navigator
const Stack = createStackNavigator();

// Componente principal de la aplicación
export default function App() {
  return (
    // El NavigationContainer gestiona el estado de navegación de la aplicación
    <NavigationContainer>
      {/* Configura el stack de navegación */}
      <Stack.Navigator>
        {/* Pantalla para mostrar la lista de productos */}
        <Stack.Screen 
          name="Products" 
          component={ViewProducts} 
          options={{
            // Personaliza el encabezado de la pantalla
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Image 
                  source={require('./images/tarjetas-de-debito.png')} // Ruta de la imagen del logo
                  style={styles.logo} // Estilo de la imagen
                />
                <Text style={styles.headerTitleText}>BANCO</Text> 
              </View>
            ),
            headerTitleAlign: 'center', // Alinea el título en el centro del encabezado
          }}
        />
        {/* Pantalla para mostrar los detalles de un producto */}
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} // Componente que muestra los detalles del producto
          options={{ 
            // Personaliza el encabezado de la pantalla de detalles
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Image 
                  source={require('./images/tarjetas-de-debito.png')} // Ruta de la imagen del logo
                  style={styles.logo} // Estilo de la imagen
                />
                <Text style={styles.headerTitleText}>BANCO</Text> 
              </View>
            ),
            headerTitleAlign: 'center', // Alinea el título en el centro del encabezado
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
