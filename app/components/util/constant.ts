export enum EnumStyle {
  Desktop = "desktop:flex tablet:hidden mobile:hidden",
  Tablet = "tablet:flex desktop:hidden desktopLarge:hidden mobile:hidden",
  Mobile = "mobile:flex desktop:hidden desktopLarge:hidden tablet:hidden",
  Hidden = "mobile:hidden desktop:hidden desktopLarge:hidden tablet:hidden",
}
