import { Stack } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from '../context/user-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;


  return (
    <UserProvider>
      <StatusBar style='auto' />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ title: 'Home' }} />
      </Stack>
    </UserProvider>
  );
}
const styles = StyleSheet.create({});
