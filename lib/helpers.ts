import { PixelRatio, StatusBar } from "react-native";

export const getAndroidStatusBarHeight = () => {
  const statusBarHeight = StatusBar.currentHeight;
  if (statusBarHeight) {
    return statusBarHeight;
  } else {
    const density = PixelRatio.get();
    if (density <= 1) {
      // mdpi
      return 25;
    } else if (density <= 1.5) {
      // hdpi
      return 38;
    } else if (density <= 2) {
      // xhdpi
      return 50;
    } else if (density <= 3) {
      // xxhdpi
      return 76;
    } else {
      // other densities, e.g., xxxhdpi
      return 76; // Default to xxhdpi height
    }
  }
};
