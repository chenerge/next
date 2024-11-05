const { withGluestackUI } = require("@gluestack/ui-next-adapter");
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop"],
};

module.exports = withGluestackUI(nextConfig);
