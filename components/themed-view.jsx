import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

export default function ThemedView({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    // The children will automatically get rendered when we use the self closing tag of the view component
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
}
