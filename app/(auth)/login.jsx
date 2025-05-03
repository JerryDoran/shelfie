import { useState } from 'react';
import { useUser } from '../../hooks/use-user';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import Spacer from '../../components/spacer';
import ThemedButton from '../../components/themed-button';
import ThemedInput from '../../components/themed-input';
import { Colors } from '../../constants/colors';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useUser();

  async function handleSubmit() {
    setError(null);
    try {
      await login(email, password);
    } catch (error) {
      if (
        error.message ===
        'Creation of a session is prohibited when a session is active.'
      ) {
        setError('You are already logged in!');
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Login to Your Account
        </ThemedText>

        <ThemedInput
          style={{
            width: '70%',
            marginBottom: 20,
          }}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />
        <ThemedInput
          style={{
            width: '70%',
            marginBottom: 20,
          }}
          placeholder='Password'
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Login</Text>
        </ThemedButton>

        {/* Error check */}
        <Spacer />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={50} />
        <Link href='/register'>
          <ThemedText style={{ textAlign: 'center' }}>Register</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: Colors.warning,
  },
});
