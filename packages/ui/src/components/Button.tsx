import { styled } from 'tamagui';

export const Button = styled('button', {
  backgroundColor: '$blue10',
  borderRadius: 8,
  padding: 12,
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$blue11',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue10',
        '&:hover': {
          backgroundColor: '$blue11',
        },
      },
      secondary: {
        backgroundColor: '$gray10',
        '&:hover': {
          backgroundColor: '$gray11',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
