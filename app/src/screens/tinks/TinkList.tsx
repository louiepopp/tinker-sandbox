import { View, StyleSheet } from 'react-native';
import Tink from '../../components/Tink';

const testTinks = [
  {
    key: 1,
    title: 'Solve Nuclear Power',
    description: "I'm looking for someone who has extensive knowledge in the field of Quantum Computing!",
    authorName: 'Louie',
    available: true,
  },
  {
    key: 2,
    title: 'Establish Moon Colony',
    description: "We're looking for candidates to go colonize the moon!",
    authorName: 'Louie',
    available: undefined,
  },
  {
    key: 3,
    title: 'Solve the brain',
    description: 'Assembling a team to uncover every and all truths about the human brain.',
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
  );
};
export default TinkList;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    paddingTop: 50
  }
});