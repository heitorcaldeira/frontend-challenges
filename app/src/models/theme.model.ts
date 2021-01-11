import { Breakpoint } from './breakpoint.model';

export interface Theme {
  name: string;
  breakpoints: Breakpoint;
  primaryColor: string;
  primaryHoverColor: string;
  secondaryColor: string;
  dangerColor: string;
  textColorOnPrimary: string;
  textColor: string;
  textColorInverted: string;
  primaryFontRegular: string;
  primaryFontMedium: string;
  primaryFontBold: string;
  disabledColor: string;
  backgroundColor: string;
  textColorOnDisabled: string;
  borderRadius: string;
  lightGray: string;
  gray: string;
}
