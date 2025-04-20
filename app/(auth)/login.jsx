import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import Spacer from '../../components/spacer';
import ThemedButton from '../../components/themed-button';

export default function LoginPage() {
  function handleSubmit() {
    console.log('Login form submitted');
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Login to Your Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>Register</ThemedText>
      </Link>
    </ThemedView>
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
});
