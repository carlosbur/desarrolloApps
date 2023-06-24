import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingTop: StatusBar.currentHeight
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    input: {
        flex: 0.95,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#212121',
        borderColor: '#212121',
        fontSize: 14,

    }
});
