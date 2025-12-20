import { Stack } from 'expo-router';

const NoteLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // otherwise the secondary title will be show -> 'index' is the default title
      }}
    />
  );
};

export default NoteLayout;
