import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    root: {
        justifyContent: "center",
        paddingHorizontal: 30,
        alignSelf: "stretch"
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 50,
        paddingLeft: 15,
        fontSize: 16,
        height: 50
    },
    text: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 40,
        fontSize: 16
    }
})