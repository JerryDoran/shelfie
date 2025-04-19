import { Stack } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
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
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='about' options={{ title: 'About' }} />
        <Stack.Screen name='contact' options={{ title: 'Contact' }} />
      </Stack>
    </>
  );
}
const styles = StyleSheet.create({});
