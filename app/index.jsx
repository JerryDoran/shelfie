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

      <Link href='/about' style={styles.link}>
        <ThemedText>About</ThemedText>
      </Link>

      <Link href='/contact' style={styles.link}>
        <ThemedText>Contact</ThemedText>
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
