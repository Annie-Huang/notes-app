import { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NoteItem = ({ note, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={editedText}
          onChange={setEditedText}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType='done' // https://reactnative.dev/docs/textinput#returnkeytype
        />
      ) : (
        <Text style={styles.noteText}>{note.text}</Text>
      )}

      <TouchableOpacity onPress={() => onDelete(note.$id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  delete: {
    fontSize: 18,
    color: 'red',
  },
});

export default NoteItem;
