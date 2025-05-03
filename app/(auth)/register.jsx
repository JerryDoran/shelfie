import { useState } from 'react';
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
import { useUser } from '../../hooks/use-user';
import { Colors } from '../../constants/colors';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { register } = useUser();

  async function handleSubmit() {
    setError(null);
    try {
      await register(email, password);
    } catch (error) {
      if (
        error.message ===
        'Invalid `email` param: Value must be a valid email address'
      ) {
        setError('Please enter a valid email address');
      } else {
        setError(error.message);
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Create Your Account
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
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>

        {/* Error check */}
        <Spacer />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={100} />
        <Link href='/login'>
          <ThemedText style={{ textAlign: 'center' }}>Login</ThemedText>
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
