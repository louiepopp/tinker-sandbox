import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Button, { ButtonVariant } from '../../components/Button';
import Divider from '../../components/Divider';
import Text, { TextVariant } from '../../components/Text';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import { Theme } from '../../consts/theme';
import TinksLogo from '../../../assets/svg/tinks.svg';

const LandingPage = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TinksLogo />
        <Text variant={TextVariant.header}>
          Tinker
        </Text>
        <Divider />
      </View>
      <Button
        onPress={() => setSignUpOpen(true)}
      >
        Sign up
      </Button>
      <Button
        variant={ButtonVariant.outlined}
        onPress={() => setSignInOpen(true)}
      >
        Sign in
      </Button>
      <View style={styles.footer}>
        <Text variant={TextVariant.text}>
          Powered by Shouter
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={signUpOpen}
        onRequestClose={() => {
          setSignUpOpen(false);
        }}
      >
        <SignUp onCancel={() => setSignUpOpen(false)}/>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={signInOpen}
        onRequestClose={() => {
          setSignInOpen(false);
        }}
      >
        <SignIn onCancel={() => setSignInOpen(false)}/>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 80,
    paddingLeft: 50,
    paddingRight: 50,
    display: 'flex',
    gap: 20,
    backgroundColor: Theme.white,
  },
  header: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 30
  },
  footer: {
    paddingTop: 250,
    alignItems: 'center'
  }
});

export default LandingPage;