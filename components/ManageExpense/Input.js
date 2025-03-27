import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, textInputConfig, style, invalid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontFamily: "playfair",
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.lavenderMist,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    height: 40,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.red,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.red,
  },
});
