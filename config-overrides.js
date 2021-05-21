const path = require('path');
const { override, babelInclude, addBabelPreset, addExternalBabelPlugin, addBabelPlugins } = require('customize-cra');

module.exports = override(
    babelInclude([
        path.resolve('src'),
        path.resolve('node_modules/react-native-gesture-handler'),
        path.resolve('node_modules/rn-sliding-up-panel'),
        path.resolve('node_modules/react-router-dom'),
        path.resolve('node_modules/react-native-card-stack-swiper'),
        path.resolve('node_modules/react-native-progress-steps'),
        path.resolve('node_modules/react-native-elements'),
        path.resolve('node_modules/react-native-ratings'),
        path.resolve('node_modules/react-native-vector-icons'),
        path.resolve('node_modules/react-native-safe-area-context'),
        path.resolve('node_modules/react-native-autocomplete-search'),
    ]),
    addBabelPreset('@babel/preset-react'),
    addBabelPreset('@babel/preset-env'),
    addExternalBabelPlugin('@babel/plugin-proposal-class-properties'),
    addBabelPlugins("@babel/plugin-transform-modules-commonjs")
);
