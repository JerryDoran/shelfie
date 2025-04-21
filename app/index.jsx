import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/themed-view';
import ThemedText from '../components/themed-text';
import ThemedLogo from '../components/themed-logo';
import Spacer from '../components/spacer';

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />
      <Spacer height={10} />

      <ThemedText style={styles.title} title>
        The number One
      </ThemedText>
      <Spacer height={5} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href='/login' style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href='/register' style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href='/profile' style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
