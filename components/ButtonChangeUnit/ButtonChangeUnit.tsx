import { Text, TouchableOpacity } from "react-native";
import { tempUnitEnum } from "../../utils/types";
import { s } from "./ButtonChangeUnit.style";

export function ButtonSwitchUnit({
  oppositeUnit,
  onPressSwitchUnit,
}: {
  oppositeUnit: tempUnitEnum;
  onPressSwitchUnit: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPressSwitchUnit} style={s.changeUnitBtn}>
      <Text style={s.text}>Switch unit to {oppositeUnit}</Text>
    </TouchableOpacity>
  );
}
