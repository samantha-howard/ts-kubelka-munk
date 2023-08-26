import { Config } from '@stencil/core';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [commonjs(), nodePolyfills()],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      empty: false,
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      baseUrl: 'https://samantha-howard.github.io/ts-kubelka-munk/',
    },
  ],
};
