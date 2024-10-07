import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchBar: {
    display: 'flex',
    alignContent: 'center',
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productList: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  productInfo: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productID: {
    fontSize: 16,
    color: '#666',
  },

  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },  
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  arrow: {
    fontSize: 20,
    color: '#00000',
  },
  listItemIcon: {
    fontSize: 18,
    color: '#ccc',
  },
});
