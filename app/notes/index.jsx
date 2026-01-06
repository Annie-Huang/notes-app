import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import NoteList from '@/components/NoteList';
import AddNoteModal from '@/components/AddNoteModal';
// import notesService from '../../services/noteService';
import noteService from '@/services/noteService';
import { useRouter } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';

const NoteScreen = () => {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  // const [notes, setNotes] = useState([
  //   { id: '1', text: 'Note One' },
  //   { id: '2', text: 'Note Two' },
  //   { id: '3', text: 'Note Three' },
  // ]);
  const [notes, setNotes] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/auth');
    }
  }, [user, authLoading]);

  /*  useEffect(() => {
    fetchNotes();
  }, []);*/
  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]);

  const fetchNotes = async () => {
    setLoading(true);
    // const response = await noteService.getNotes();
    const response = await noteService.getNotes(user.$id);
    console.log('response=', response);

    if (response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    } else {
      setNotes(response.data.data);
      setError(null);
    }

    setLoading(false);
  };

  // Add New Note
  const addNote = async () => {
    if (newNote.trim() === '') return;

    // setNotes((prevState) => [
    //   ...prevState,
    //   { id: Date.now.toString(), text: newNote },
    // ]);

    const response = await noteService.addNote(user.$id, newNote);

    if (response.error) {
      Alert.alert('Error', response.error);
    } else {
      setNotes([...notes, response.data]);
    }

    setNewNote('');
    setModalVisible(false);
  };

  // Delete Note
  const deleteNote = async (id) => {
    // The Alert component will only show in mobile, it will not show in web site version.
    Alert.alert('Delete Note', 'Are you sure you want to delete this note', [
      {
        text: 'Cancel',
        style: 'cancel', // it will know to do nothing when user click this button.
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const response = await noteService.deleteNote(id);
          if (response.error) {
            Alert.alert('Error', response.error);
          } else {
            setNotes(notes.filter((note) => note.$id !== id));
          }
        },
      },
    ]);
  };

  // Edit Note
  const editNote = async (id, newText) => {
    if (!newText.trim()) {
      // In theory, we will never get into this because of the logic currently in NoteItem.jsx
      Alert.alert('Error', 'Note text cannot be empty');
      return;
    }

    const response = await noteService.updateNote(id, newText);
    if (response.error) {
      Alert.alert('Error', response.error);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.$id === id ? { ...note, text: response.data.text } : note,
        ),
      );
    }
  };

  return (
    <View style={styles.container}>
      {/*<NoteList notes={notes} />*/}
      {loading ? (
        <ActivityIndicator size='large' color='#007bff' />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}{' '}
          <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
        </>
      )}

      {/* Even without the styling inserting, the <FlatList> in <NoteList> above will style to flex-grow: 1, which will force the button at the bottom.*/}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default NoteScreen;
