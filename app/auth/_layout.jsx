import { Stack } from 'expo-router';

// The same as app/notes/_layout.jsx
const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // otherwise the secondary title will be show -> 'index' is the default title
      }}
    />
  );
};

export default AuthLayout;
