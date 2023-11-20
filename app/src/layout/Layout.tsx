import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';
import { Theme } from '../consts/theme';

interface ILayout {
    children: ReactNode,
}

const Layout = ({ children }: ILayout) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        {children}
      </View>
      <Navigation />
    </View>
  );
};
export default Layout;

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.white,
  },
  content: {
    flex: 1,
  },
});