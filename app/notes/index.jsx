import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Note One' },
    { id: '2', text: 'Note Two' },
    { id: '3', text: 'Note Three' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Even without the styling inserting, the <FlatList> above will style to flex-grow: 1, which will force the button at the bottom.*/}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NoteScreen;
