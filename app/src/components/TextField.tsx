import { TextInput, StyleSheet, View, TextInputProps } from "react-native";
import { Theme } from "../consts/theme";


const TextField = ({
    ...props
}: TextInputProps) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputField}
                {...props}
                placeholderTextColor={styles.inputFieldPlaceholer.color}
            />
        </View>
    )
};
export default TextField;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Theme.default,
    },
    inputField: {
        color: Theme.black,
        width: '100%',
        height: 50,
        fontSize: 20
    },
    inputFieldPlaceholer: {
        color: Theme.default,
    }
})