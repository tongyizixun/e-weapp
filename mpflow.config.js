/*
 * @Author: 刘利军
 * @Date: 2021-12-19 16:23:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2022-01-06 11:03:34
 * @Description:
 * @PageName:
 */
module.exports = {
  appId: "wxfede437c2f313f9f",
  app: (mode) => (mode === "production" ? undefined : "src/app"),
  pages: (mode) =>
    mode === "production" ? ["src/components/index"] : undefined,
  outputDir: "miniprogram_dist",
  compileType: "miniprogram",
  plugins: [
    "@mpflow/plugin-babel",
    "@mpflow/plugin-typescript",
    "@mpflow/plugin-css",
    "@mpflow/plugin-unit-test",
    "@mpflow/plugin-e2e-test",
  ],
  settings: {
    urlCheck: true,
    es6: false,
    enhance: false,
    postcss: false,
    preloadBackgroundData: false,
    minified: false,
    newFeature: false,
    coverView: true,
    nodeModules: false,
    autoAudits: false,
    showShadowRootInWxmlPanel: true,
    scopeDataCheck: false,
    uglifyFileName: false,
    checkInvalidKey: true,
    checkSiteMap: true,
    uploadWithSourceMap: true,
    compileHotReLoad: false,
    babelSetting: {
      ignore: [],
      disablePlugins: [],
      outputPath: "",
    },
    useIsolateContext: true,
    useCompilerModule: false,
    userConfirmedUseCompilerModuleSwitch: false,
  },
  sourceMap: false,
};
