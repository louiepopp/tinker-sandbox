import { View, StyleSheet } from "react-native";
import Tink from "../../components/Tink";

const testTinks = [
    {
        key: 1,
        title: 'Motivate me',
        description: "I'm looking for someone to come motivate me and help me achieve my goals & dreams...",
        authorName: 'Louie',
        available: true,
    },
    {
        key: 2,
        title: 'Understand me',
        description: "I'm looking for someone to come motivate me and help me achieve my goals & dreams...",
        authorName: 'Louie',
        available: undefined,
    },
    {
        key: 3,
        title: 'Seduce me',
        description: "I'm looking for someone to come motivate me and help me achieve my goals & dreams...",
        authorName: 'Louie',
        available: false,
    }
];

const TinkList = () => {
    return (
        <View style={style.container}>
            {testTinks.map((tink) => (
                <Tink
                    key={tink.key}
                    title={tink.title}
                    description={tink.description}
                    authorName={tink.authorName}
                    available={tink.available}
                /> 
            ))}
        </View>
    )
};
export default TinkList;

const style = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 20,
        paddingTop: 50
    }
})