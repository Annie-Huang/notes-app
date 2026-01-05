import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Text, TouchableOpacity } from 'react-native';

const HeaderLogout = () => {
  const { user, logout } = useAuth();

  return user ? (
    <TouchableOpacity style={styles.logout} onPress={logout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

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
        <Stack.Screen name='auth' options={{ headerTitle: 'Login' }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
