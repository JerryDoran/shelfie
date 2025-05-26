import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useBooks } from '../../../hooks/use-books';
import { StyleSheet, Text } from 'react-native';

import ThemedText from '../../../components/themed-text';
import ThemedView from '../../../components/themed-view';
import ThemedCard from '../../../components/themed-card';
import ThemedLoader from '../../../components/themed-loader';
import ThemedButton from '../../../components/themed-button';
import Spacer from '../../../components/spacer';
import { Colors } from '../../../constants/colors';

export default function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useLocalSearchParams();
  const { fetchBookById, deleteBook } = useBooks();
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteBook(id);
      setBook(null); // Clear the book state after deletion
      router.replace('/books');
      // Optionally, navigate back or show a success message
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }

  useEffect(() => {
    async function loadBook() {
      const book = await fetchBookById(id);
      setBook(book);
    }
    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText style={styles.author}>Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title>Book Description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Delete</Text>
      </ThemedButton>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  author: {
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center',
  },
});
