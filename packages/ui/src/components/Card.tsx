import { styled } from 'tamagui';

export const Card = styled('div', {
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 16,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  border: '1px solid $gray5',

  variants: {
    variant: {
      elevated: {
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      },
      bordered: {
        border: '2px solid $gray8',
      },
    },
  },

  defaultVariants: {
    variant: 'elevated',
  },
});
