export const commonStyles = {
  media: {
    mobileS: `@media (min-width: 320px)`,
    mobileM: `@media (min-width: 375px)`,
    mobileL: `@media (min-width: 425px)`,
    tablet: `@media (min-width: 768px)`,
    laptop: `@media (min-width: 1024px)`,
    laptopL: `@media (min-width: 1440px)`,
    laptopXL: `@media (min-width: 1644px)`,
    desktop: `@media (min-width: 2560px)`
  },
  fontFamily: {
    primary: `'Poppins', sans-serif`
  },
  fontWeight: {
    light: `300`,
    regular: `400`,
    semiBold: `600`,
    bold: `700`
  }
};

export const lightTheme = {
  ...commonStyles,
  name: "light",
  colors: {
    primaryColor: `#000437`,
    secondaryColor: `#F2A900`,
    primaryBgColor: `#ffffff`,
    secondaryBgColor: `#F8F8F8`,
    grayColor: `#B8B8B8`,
    errorColor: `#ff4a4a`,
    successColor: `#4ec76e`,
    infoColor: `#19a7ff`
  }
};

export const darkTheme = {
  ...commonStyles,
  name: "dark",
  colors: {
    primaryColor: `#D4D4D4`,
    secondaryColor: `#F2A900`,
    primaryBgColor: `#4D4D4D`,
    secondaryBgColor: `#373737`,
    grayColor: `#B8B8B8`,
    errorColor: `#ff4a4a`,
    successColor: `#4ec76e`,
    infoColor: `#19a7ff`
  }
};

export type Theme = typeof lightTheme;
