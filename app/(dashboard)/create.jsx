import { StyleSheet } from 'react-native';
import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import Spacer from '../../components/spacer';

export default function CreatePage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
