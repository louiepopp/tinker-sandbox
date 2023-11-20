import React, { FC }  from 'react';
import { View, StyleSheet, Pressable } from "react-native"
import sv from 'style-variants';
import Text, { TextColor } from "../../components/Text";
import { SvgProps } from 'react-native-svg';
import { Theme } from '../../consts/theme';
import { useNavigate } from '../../hooks/useNavigate';
import { useRoute } from '@react-navigation/native';


interface INavigationItem {
    title: string;
    icon: FC<SvgProps>;
    route: string;
}

const NavigationItem = ({ title, icon: Icon, route }: INavigationItem) => {
    const navigate = useNavigate();
    const router = useRoute();

    const isActive = router.name == route;

    const handlePress = () => {
        navigate(route);
    }

    return (
        <Pressable onPress={handlePress}>
            <View style={style.container}>
                <Icon
                    height={40}
                    width={40}
                    opacity={isActive ? 1 : 0.3}
                />
                <Text color={isActive ? TextColor.normal : TextColor.muted}>
                    {title}
                </Text>
            </View>
        </Pressable>
    )
};
export default NavigationItem;

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        marginLeft: 45,
        marginRight: 45,
    },
});
