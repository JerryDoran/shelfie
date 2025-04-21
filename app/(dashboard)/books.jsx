import { StyleSheet } from 'react-native';
import ThemedText from '../../components/themed-text';
import ThemedView from '../../components/themed-view';
import Spacer from '../../components/spacer';

export default function BooksPage() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
