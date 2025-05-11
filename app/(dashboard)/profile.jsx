import { useUser } from '../../hooks/use-user';
import { StyleSheet, Text } from 'react-native';

import ThemedView from '../../components/themed-view';
import ThemedText from '../../components/themed-text';
import ThemedButton from '../../components/themed-button';
import Spacer from '../../components/spacer';

export default function ProfilePage() {
  const { logout, user } = useUser();
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        {user?.email}
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedButton
        title='Logout'
        onPress={logout}
        variant='primary'
        size='large'
      >
        <Text style={{ color: '#f2f2f2' }}>Logout</Text>
      </ThemedButton>
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
