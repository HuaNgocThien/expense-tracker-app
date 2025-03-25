import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary400 }}
        onPress={onPress}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: GlobalStyles.colors.whiteApp,
    textAlign: "center",
    fontFamily: "playfair",
  },
  flatText: {
    color: GlobalStyles.colors.primary400,
    fontFamily: "playfair",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
  },
});
