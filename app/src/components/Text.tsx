import { Text as TextBox } from 'react-native';
import sv from 'style-variants';
import { Fonts, Theme } from '../consts/theme';

export enum TextVariant {
    header = 'header',
    subheader = 'subheader',
    text = 'text',
}

export enum TextColor {
    normal = 'normal',
    muted = 'muted',
}

interface IProps {
    children: string,
    variant?: TextVariant,
    color?: TextColor,
}

const Text = ({ children, variant, color }: IProps) => {
  return (
    <TextBox style={textStyleVariants({variant, color})}>
      {children}
    </TextBox>
  );
};
export default Text;

const textStyleVariants = sv({
  base: {
    color: Theme.black,
    fontFamily: Fonts.primary,
  },
  variants: {
    variant: {
      header: {
        fontSize: 50,
      },
      subheader: {
        fontSize: 20,
      },
      text: {
        fontSize: 15,
      }
    },
    color: {
      normal: {
        color: Theme.black,
      },
      muted: {
        color: Theme.defaultBread,
      }
    }
  },
  defaultVariants: {
    variant: 'text',
    color: 'normal',
  },
});
