import { StyleSheet } from 'react-native';
import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import Spacer from '../../components/spacer';

export default function ProfilePage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
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
