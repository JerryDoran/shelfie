import { StyleSheet, FlatList, Pressable } from 'react-native';
import { useBooks } from '../../hooks/use-books';
import { Colors } from '../../constants/colors';

import ThemedText from '../../components/themed-text';
import ThemedView from '../../components/themed-view';
import ThemedCard from '../../components/themed-card';
import Spacer from '../../components/spacer';

export default function BooksPage() {
  const { books } = useBooks();
  return (
    <ThemedView style={styles.container} safe>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Reading List
      </ThemedText>

      {/* List of books */}
      <Spacer />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText style={styles.author}>
                Written by {item.author}
              </ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 10,
  },
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    color: Colors.secondary,
  },
  author: {
    color: Colors.secondary,
    fontSize: 13,
  },
});
