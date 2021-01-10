import { Theme } from '../../../models/theme.model';

export const darkTheme: Theme = {
  name: 'dark',
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  primaryColor: '#1C9956',
  primaryHoverColor: '#197a47',
  dangerColor: '#BF1D08',
  textColorOnPrimary: '#FFF',
  textColor: '#FFF',
  textColorInverted: '#333',
  primaryFontRegular: 'Rubik-Regular',
  primaryFontMedium: 'Rubik-Medium',
  primaryFontBold: 'Rubik-Bold',
  backgroundColor: '#333',
  disabledColor: '#D8D8D8',
  textColorOnDisabled: '#333333',
  borderRadius: '3px',
};
