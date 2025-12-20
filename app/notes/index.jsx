import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Note One' },
    { id: '2', text: 'Note Two' },
    { id: '3', text: 'Note Three' },
  ]);

  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default NoteScreen;
