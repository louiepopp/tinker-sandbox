import { View, StyleSheet } from 'react-native';
import { Theme } from '../consts/theme';

const Divider = () => {
  return (
    <View style={style.divider} />
  );
};
export default Divider;

const style = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.default,
  }
});