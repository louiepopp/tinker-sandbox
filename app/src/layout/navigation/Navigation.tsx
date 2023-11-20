import { View, StyleSheet } from 'react-native';
import NavigationItem from './NavigationItem';
import CreateSvg from './../../../assets/svg/create.svg';
import TinksSvg from './../../../assets/svg/tinks.svg';
import YouSvg from './../../../assets/svg/profile.svg';
import { Theme } from '../../consts/theme';


const Navigation = () => {
  return (
    <View style={style.container}>
      <NavigationItem
        title="Create"
        icon={CreateSvg}
        route='create'
      />
      <NavigationItem
        title="Tinks"
        icon={TinksSvg}
        route='tinks'
      />
      <NavigationItem
        title="You"
        icon={YouSvg}
        route='profile'
      />
    </View>
  );
};
export default Navigation;

const style = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Theme.black,
    shadowRadius: 10,
    shadowOpacity: 0.2
  }
});