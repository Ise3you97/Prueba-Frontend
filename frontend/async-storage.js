// __mocks__/@react-native-async-storage/async-storage.js
const mockAsyncStorage = {
    setItem: jest.fn((key, value) => Promise.resolve()),
    getItem: jest.fn((key) => Promise.resolve(null)),
    removeItem: jest.fn((key) => Promise.resolve()),
    clear: jest.fn(() => Promise.resolve()),
  };
  
  export default mockAsyncStorage;
  