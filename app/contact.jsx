import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedView from '../components/themed-view';
import ThemedText from '../components/themed-text';

export default function Contact() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title>
        Contact Us
      </ThemedText>
      <Link href='/' style={styles.link}>
        <ThemedText>Home</ThemedText>
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
