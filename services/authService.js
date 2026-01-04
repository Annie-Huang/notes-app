import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

const authService = {
  // Register a user
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || 'Registration failed. Please try again',
      };
    }
  },
};

export default authService;
