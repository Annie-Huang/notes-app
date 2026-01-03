import { View, FlatList } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  return (
    <View>
      <FlatList
        data={notes}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => item.$id} // $id is the one store in the Appwrite DB rather than hard code array value.
        renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} />}
      />
    </View>
  );
};

export default NoteList;
