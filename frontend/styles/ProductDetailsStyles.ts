import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'space-between',
  },
  ID: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  infoTitle: {
    fontSize: 15,
    marginVertical: 10,
    color: '#333',
    textAlign: 'left',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginRight: 5,
    padding: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    padding: 5,
    flex: 1,
  },
  logo: {
    width: 100,
    height: 70,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ccc',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#007bff',
  },
});

export default styles;
