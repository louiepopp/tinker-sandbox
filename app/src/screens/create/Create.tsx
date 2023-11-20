import { View, StyleSheet } from 'react-native';
import Layout from '../../layout/Layout';
import Text, { TextVariant } from '../../components/Text';
import TinksSvg from './../../../assets/svg/tinks.svg';

const Create = () => {
  return (
    <Layout>
      <View style={style.container}>
        <Text variant={TextVariant.header}>
            Create
        </Text>
        <Text variant={TextVariant.subheader}>
            Let's do some creating for some tinks!
        </Text>
        <View style={style.imageContainer}>
          <TinksSvg />
        </View>
      </View>
    </Layout>
  );
};
export default Create;

const style = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    gap: 40,
  },
  imageContainer: {
    paddingTop: 200,
    alignItems: 'center'
  }
});
