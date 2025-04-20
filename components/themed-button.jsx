import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function ThemedButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      {...props}
    ></Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginVerticle: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
