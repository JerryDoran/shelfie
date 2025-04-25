import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ThemedView({ style, safe = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe) {
    return (
      // The children will automatically get rendered when we use the self closing tag of the view component
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...props}
    />
  );
}
