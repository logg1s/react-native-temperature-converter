import { tempUnitEnum } from "./types";

export function getOppositeUnit(unit: tempUnitEnum): tempUnitEnum {
    return unit === tempUnitEnum.C ? tempUnitEnum.F : tempUnitEnum.C;
}

export function getConvertedTempValue(oppositeUnit: tempUnitEnum, tempValue: number): number {
    let tempConverted: number;
    const tempValueNumber: number = Number(tempValue);
    if (!tempValueNumber) {
        return 0;
    }
    switch (oppositeUnit) {
        case tempUnitEnum.C:
            tempConverted = (tempValueNumber - 32) / 1.8;
            break;
        case tempUnitEnum.F:
            tempConverted = (tempValueNumber * 1.8) + 32;
            break;
        default:
            tempConverted = 0;
    }
    return parseFloat(tempConverted.toFixed(2));
}

export function isColdWeather(currentUnit: tempUnitEnum, currentTempValue: number): boolean {
    const currentTempValueNumber: number = Number(currentTempValue);
    if (isNaN(currentTempValueNumber)) throw new Error("Temp value is not valid");

    if (currentUnit === tempUnitEnum.C) {
        return currentTempValueNumber <= 15;
    } else {
        return currentTempValueNumber <= 59;
    }
}