import { View, StyleSheet } from 'react-native';
import { Theme } from '../consts/theme';
import Text, { TextColor, TextVariant } from './Text';
import sv from 'style-variants';

interface ITinkProps {
    title: string;
    description: string;
    authorName: string;
    available: boolean | undefined;
}

const Tink = ({ title, description, authorName, available}: ITinkProps) => {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text variant={TextVariant.subheader}>
          {title}
        </Text>
        <View style={style.headerSubContainer}>
          <View style={statusStyleVariants({ available })}/>
        </View>
        <Text variant={TextVariant.text} color={TextColor.muted}>
          {authorName}
        </Text>
      </View>
      <Text variant={TextVariant.text} color={TextColor.muted}>
        {description}
      </Text>
    </View>
  );
};
export default Tink;

const style = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    width: '100%',
    height: 'auto',
    borderColor: Theme.default,
    borderWidth: 1,
    borderRadius: 10,
    gap: 5
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  headerSubContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const statusStyleVariants = sv({
  base: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  variants: {
    available: {
      true: {
        backgroundColor: Theme.primary
      },
      false: {
        backgroundColor: Theme.secondary
      },
      undefined: {
        backgroundColor: Theme.default
      },
    },
  },
  defaultVariants: {
    available: undefined,
  },
});