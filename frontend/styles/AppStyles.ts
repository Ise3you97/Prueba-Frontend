// Ruta: ./styles/AppStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10, // Espacio entre el logo y el texto
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
