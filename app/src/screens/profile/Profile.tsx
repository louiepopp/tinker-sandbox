import { View, StyleSheet } from "react-native"
import Text, { TextVariant } from "../../components/Text"
import { useDispatch, useSelector } from "react-redux"
import { getAuthName } from "../../redux/slices/auth/auth.getter"
import Layout from "../../layout/Layout"
import Button, { ButtonVariant } from "../../components/Button"
import { resetState } from "../../redux/slices/auth/auth.slice"
import { useNavigate } from "../../hooks/useNavigate"

const Profile = () => {
    const name = useSelector(getAuthName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(resetState());
    };

    return (
        <Layout>
            <View style={style.container}>
                <Text variant={TextVariant.header}>
                    You
                </Text>
                <Text variant={TextVariant.subheader}>
                    {`Welcome back, ${name}!`}
                </Text>
                <Button
                    variant={ButtonVariant.warning}
                    onPress={handleLogOut}
                >
                    Sign out
                </Button>
            </View>
        </Layout>
    )
}
export default Profile;

const style = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingLeft: 30,
        paddingRight: 30,
        display: 'flex',
        gap: 40,
    }
})
