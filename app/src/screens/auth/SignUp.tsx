import { View, StyleSheet } from 'react-native';
import TextField from '../../components/TextField';
import { Theme } from '../../consts/theme';
import Text, { TextVariant } from '../../components/Text';
import Button, { ButtonVariant } from '../../components/Button';
import { useEffect, useState } from 'react';
import { useSignupMutation } from '../../api/auth.api';
import { setAuthenticatedPerson } from '../../redux/slices/auth/auth.slice';
import { useDispatch } from 'react-redux';

interface Props {
    onCancel?: () => void
}

const SignUp = ({ onCancel = () => {} }: Props) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [signup, { data, error }] = useSignupMutation();
  const dispatch = useDispatch();


  useEffect(() => {
    if (error) return;
    if (data) {
      dispatch(setAuthenticatedPerson(data));
    }
  }, [data, error, dispatch]);

  const handleSubmit = () => {
    if (!email || !password || !name) return;
    signup({ name, email, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant={TextVariant.header}>
          Sign up
        </Text>
        <TextField
          placeholder="Name"
          value={name}
          autoComplete="name"
          onChangeText={(val: string) => setName(val)}
        />
        <TextField
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChangeText={(val: string) => setEmail(val)}
        />
        <TextField
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChangeText={(val: string) => setPassword(val)}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleSubmit}>
            Get started
          </Button>
          <Button
            variant={ButtonVariant.outlined}
            onPress={onCancel}
          >
            Go back
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  innerContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: Theme.white,
    borderRadius: 20,
    padding: 30,
    gap: 30,
    shadowColor: Theme.black,
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  buttonContainer: {
    paddingTop: 25,
    gap: 20
  }
});

export default SignUp;