import databaseService from './databaseService';
import { ID, Query } from 'react-native-appwrite';

// Appwrite database and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Get Notes
  async getNotes() {
    const response = await databaseService.listDocuments(dbId, colId);
    if (response.error) {
      return { error: response.error };
    }
    return { data: response };
  },
  // Add New Note
  async addNote(text) {
    if (!text) {
      return { error: 'Note text cannot be empty' };
    }
  },
};

export default noteService;
