import { Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

export default function ThemedText({ style, title = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;
  return (
    // The children will automatically get rendered when we use the self closing tag of the view component
    <Text style={[{ color: textColor }, style]} {...props} />
  );
}
