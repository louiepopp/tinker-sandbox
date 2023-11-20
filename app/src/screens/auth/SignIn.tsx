import { View, StyleSheet } from "react-native"
import TextField from "../../components/TextField";
import { Theme } from "../../consts/theme";
import Text, { TextVariant } from "../../components/Text";
import Button, { ButtonVariant } from "../../components/Button";
import { useSigninMutation } from "../../api/auth.api";
import { useEffect, useState } from "react";
import { setAuthenticatedPerson } from "../../redux/slices/auth/auth.slice";
import { useDispatch } from "react-redux";

interface Props {
    onCancel?: () => void
}

const SignIn = ({ onCancel = () => {} }: Props) => {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const [signin, { data, error, isLoading }] = useSigninMutation();
    const dispatch = useDispatch();

    const handleSignIn = () => {
        if (!email || !password) return;
        signin({ email, password });
    };

    useEffect(() => {
        if (error) return;
        if (data) {
            dispatch(setAuthenticatedPerson(data));
        }
    }, [data, error, isLoading]);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text variant={TextVariant.header}>
                    Sign in
                </Text>
                <TextField
                    placeholder="Email"
                    value={email}
                    onChangeText={(val: string) => setEmail(val)}
                    autoComplete="email"
                />
                <TextField
                    placeholder="Password"
                    value={password}
                    onChangeText={(val: string) => setPassword(val)}
                    autoComplete="current-password"
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={handleSignIn}>
                        Sign in
                    </Button>
                    <Button
                        variant={ButtonVariant.outlined}
                        onPress={onCancel}
                    >
                        Go back
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    innerContainer: {
        height: '70%',
        width: '100%',
        backgroundColor: Theme.white,
        borderRadius: 20,
        padding: 30,
        gap: 30,
        shadowColor: Theme.black,
        shadowRadius: 10,
        shadowOpacity: 0.2
    },
    buttonContainer: {
        paddingTop: 25,
        gap: 20
    }
})

export default SignIn;