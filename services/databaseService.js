import { database } from './appwrite';

const databaseService = {
  // List Documents
  async listDocuments(dbId, colId, queries = []) {
    try {
      const response = await database.listDocuments(dbId, colId, queries);
      return { data: response.documents || [], error: null };
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
