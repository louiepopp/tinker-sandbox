import { Pressable, Text, View } from 'react-native';
import sv from 'style-variants';
import { Theme } from '../consts/theme';


export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    outlined = 'outlined',
    warning = 'warning'
}

interface IProps {
    children: string,
    variant?: ButtonVariant,
    onPress?: () => void 
}

const Button = ({
  children,
  onPress = () => {},
  variant = ButtonVariant.primary
}: IProps) => {
  const textStyle = textStyleVariants({variant});

  return (
    <View>
      <Pressable
        style={({pressed}) => buttonStyleVariants({variant, pressed})}
        onPress={onPress}
      >
        <Text style={textStyle}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
};
export default Button;

const textStyleVariants = sv({
  base: {
    fontSize: 20,
  },
  variants: {
    variant: {
      primary: {
        color: Theme.white
      },
      secondary: {
        color: Theme.white
      },
      outlined: {
        color: Theme.black
      }
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const buttonStyleVariants = sv({
  base: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: Theme.primary
      },
      secondary: {
        backgroundColor: Theme.secondary,
      },
      outlined: {
        backgroundColor: Theme.white,
        borderColor: Theme.default,
        borderWidth: 1,
      },
      warning: {
        backgroundColor: Theme.warning
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
    pressed: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    disabled: false,
    pressed: false,
  },
});