import { getDefaultConfig } from "metro-config";

export default (async () => {
  const defaultConfig = await getDefaultConfig();

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      sourceExts: [...defaultConfig.resolver.sourceExts, "env"],
    },
  };
})();
