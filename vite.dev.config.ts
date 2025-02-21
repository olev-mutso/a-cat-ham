import { ConfigEnv, UserConfig } from 'vite';

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { intlTsVite } from './intl-vite-plugin';


// https://vitejs.dev/config/
export default function defineConfig(props: ConfigEnv): UserConfig {
  return {
    base: process.env.PUBLIC_URL || '',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      checker({ typescript: true }),
      svgr({
        svgrOptions: {
          // svgr options
        },
      }),
      intlTsVite({})
    ],
    build: {
      chunkSizeWarningLimit: 5000,
      outDir: './dist',
      assetsDir: 'static'
    },
    optimizeDeps: {
      //https://github.com/vitejs/vite/issues/12423
      //https://github.com/mui/material-ui/issues/32727
      include: [
        '@mui/material/CssBaseline', 
        '@mui/material/Box', 

      ],
      force: true
    },
    define: {

    },
  }
}