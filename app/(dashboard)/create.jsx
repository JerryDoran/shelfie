import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useBooks } from '../../hooks/use-books';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import ThemedInput from '../../components/themed-input';
import ThemedButton from '../../components/themed-button';
import Spacer from '../../components/spacer';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return;
    setLoading(true);
    await createBook({ title, author, description });

    // reset the form
    setTitle('');
    setAuthor('');
    setDescription('');

    router.replace('/books');
    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView style={styles.container}>
        <ThemedText title style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />

        <ThemedInput
          placeholder='Title'
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <ThemedInput
          placeholder='Author'
          value={author}
          onChangeText={setAuthor}
          style={styles.input}
        />
        <ThemedInput
          placeholder='Description'
          value={description}
          onChangeText={setDescription}
          style={styles.multiline}
          multiline
        />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#f2f2f2' }}>
            {loading ? 'Adding...' : 'Add Book'}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 40,
    alignSelf: 'stretch',
  },
  multiline: {
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 40,
    alignSelf: 'stretch',
    minHeight: 100,
  },
});
