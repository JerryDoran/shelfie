import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import Spacer from '../../components/spacer';
import ThemedButton from '../../components/themed-button';

export default function RegisterPage() {
  function handleSubmit() {
    console.log('Register form submitted');
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Create Your Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>Login</ThemedText>
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
