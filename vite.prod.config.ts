import { ConfigEnv, UserConfig } from 'vite';
import dts from 'vite-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default function defineConfig(props: ConfigEnv): UserConfig {
  console.log(`Building ${__dirname}`);

  return {
    mode: 'production',
    base: '/a-cat-ham/',
    plugins: [
      react({ 
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      dts({ rollupTypes: true }),
      checker({ typescript: true }),
      svgr({ svgrOptions: {} }),
    ],
    build: {
      outDir: 'dist',
      rollupOptions: {
        plugins: [peerDepsExternal()],
      }
    },
  }
}