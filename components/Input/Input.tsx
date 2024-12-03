import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { s } from "./Input.style";
import { tempUnitEnum } from "../../utils/types";

export function Input({
  onInputChange,
  currentTempValue,
  currentUnit,
}: {
  onInputChange: (text: string) => void;
  currentTempValue: number;
  currentUnit: tempUnitEnum;
}) {
  return (
    <View style={s.root}>
      <TextInput
        onChangeText={onInputChange}
        style={s.textInput}
        defaultValue={currentTempValue.toString()}
        maxLength={4}
        keyboardType="numeric"
      />
      <Text style={s.text}>{currentUnit}</Text>
    </View>
  );
}
