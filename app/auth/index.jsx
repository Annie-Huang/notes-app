import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isRegistering ? 'Sign Up' : 'Login'}</Text>

      {error && <Text style={styles.error}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#aaa'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        keyboardType={'email-address'}
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#aaa'
        value={password}
        onChangeText={setPassword}
        secureTextEntry // mask the character user enters
      />

      {isRegistering && (
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          placeholderTextColor='#aaa'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry // mask the character user enters
        />
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {isRegistering ? 'Sign Up' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
        <Text style={styles.switch}>
          {isRegistering
            ? 'Already have an account? Login'
            : "Don't have an account? Sign up"}
        </Text>
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
});

export default AuthScreen;
