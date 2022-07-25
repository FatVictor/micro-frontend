const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const glob = require("glob");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);


module.exports = {
  output: {
    uniqueName: "a01",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "a01",
      filename: "remoteEntry.js",
      exposes: {
        './M1': './src/app/modules/a01-m1/a01-m1.module.ts',
        './M2': './src/app/modules/a01-m2/a01-m2.module.ts',
        './LoginComponent': './src/app/components/login/login.component.ts',
        './ElementComponent': './src/app/components/element/element.component.ts'
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`./src/**/*`,  { nodir: true }),
    })
  ],
};
