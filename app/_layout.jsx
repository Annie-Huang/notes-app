import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

const RootLayout = () => {
  /*  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#ff8c00' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      {/!* if you don't use headerTitle, the title will take name of the folder app/notes -> 'notes' *!/}
      <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
    </Stack>
  );*/

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ff8c00' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        {/* if you don't use headerTitle, the title will take name of the folder app/notes -> 'notes' */}
        <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
