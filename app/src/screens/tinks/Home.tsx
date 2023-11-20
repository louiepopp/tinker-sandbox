import { View, StyleSheet } from 'react-native';
import Text, { TextVariant } from '../../components/Text';
import TinkList from './TinkList';
import Layout from '../../layout/Layout';


const Tinks = () => {
  return (
    <Layout>
      <View style={style.container}>
        <Text variant={TextVariant.header}>
                    Tinks
        </Text>
        <TinkList />
      </View>
    </Layout>
  );
};
export default Tinks;

const style = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  }
});
