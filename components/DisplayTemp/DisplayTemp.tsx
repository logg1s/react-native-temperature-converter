import { Text } from "react-native";
import { s } from "./DisplayTemp.style";
import { tempUnitEnum } from "../../utils/types";

export function DisplayTemp({
  convertedTemp,
  oppositeUnit,
}: {
  convertedTemp: number;
  oppositeUnit: tempUnitEnum;
}) {
  return (
    <Text style={s.text}>
      {convertedTemp} {oppositeUnit}
    </Text>
  );
}
