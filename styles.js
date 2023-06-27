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
        fontSize: 14,

    },
    listContainer:{
        marginTop: 25,
        gap: 15,
    },

    containerItem:{
        flexDirection: "row",  
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#D4D7ED",
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "#212121",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginBottom: 15,
        elevation: 3,
    }
});
