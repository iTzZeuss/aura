const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Ensure Metro supports .cjs files (Required for NativeWind)
config.resolver.assetExts.push("cjs");

// Apply NativeWind transformation
module.exports = withNativeWind(config, { input: "./global.css" });
