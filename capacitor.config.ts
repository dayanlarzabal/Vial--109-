import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cu.vial109.app',
  appName: 'Vial 109',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#f3efe6',
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#9f1d1d',
    },
  },
};

export default config;
