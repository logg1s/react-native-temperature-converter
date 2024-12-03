import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemp } from "./components/DisplayTemp/DisplayTemp";
import { tempUnitEnum } from "./utils/types";
import {
  getConvertedTempValue,
  getOppositeUnit,
  isColdWeather,
} from "./utils/tempConverter";
import { ButtonSwitchUnit } from "./components/ButtonChangeUnit/ButtonChangeUnit";

export default function App() {
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<tempUnitEnum>(tempUnitEnum.C);
  const oppositeUnit = getOppositeUnit(currentUnit);
  const convertedTempValue = getConvertedTempValue(oppositeUnit, currentTemp);
  const onInputChange = (textInput: string) => {
    const currentTempNumber: number = Number(textInput);
    if (!isNaN(currentTempNumber)) {
      setCurrentTemp(currentTempNumber);
    }
  };
  const onPressSwitchUnit = () => {
    setCurrentUnit(oppositeUnit);
  };
  const isCold = isColdWeather(currentUnit, currentTemp);
  return (
    <ImageBackground
      source={
        isCold ? require("./assets/cold.png") : require("./assets/hot.png")
      }
      style={s.imgBackground}
    >
      <SafeAreaProvider>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={s.root}>
            <View style={s.container}>
              <DisplayTemp
                convertedTemp={convertedTempValue}
                oppositeUnit={oppositeUnit}
              />
              <Input
                onInputChange={onInputChange}
                currentTempValue={currentTemp}
                currentUnit={currentUnit}
              />
              <ButtonSwitchUnit
                oppositeUnit={oppositeUnit}
                onPressSwitchUnit={onPressSwitchUnit}
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
