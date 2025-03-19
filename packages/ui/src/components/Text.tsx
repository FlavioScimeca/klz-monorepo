import { Paragraph, styled } from 'tamagui';

export const Text = styled(Paragraph, {
  color: '$gray12',
  fontSize: 16,
  lineHeight: 1.5,
  margin: 0,

  variants: {
    size: {
      small: {
        fontSize: 14,
      },
      large: {
        fontSize: 18,
      },
    },
    weight: {
      normal: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
    },
    color: {
      primary: {
        color: '$blue10',
      },
      secondary: {
        color: '$gray10',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    weight: 'normal',
  },
});
