import { Theme } from '../../../models/theme.model';

export const lightTheme: Theme = {
  name: 'light',
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  primaryColor: '#1C9956',
  primaryHoverColor: '#197a47',
  secondaryColor: '#212B36',
  dangerColor: '#BF1D08',
  textColorOnPrimary: '#FFF',
  textColor: '#333333',
  textColorInverted: '#FFF',
  primaryFontRegular: 'Rubik-Regular',
  primaryFontMedium: 'Rubik-Medium',
  primaryFontBold: 'Rubik-Bold',
  backgroundColor: '#FFF',
  disabledColor: '#D8D8D8',
  textColorOnDisabled: '#333333',
  borderRadius: '3px',
  lightGray: '#DFE4E8',
  gray: '#637381',
};
