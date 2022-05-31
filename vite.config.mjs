import { VitePluginFonts } from 'vite-plugin-fonts';

export default {
  plugins: [
    VitePluginFonts({
      custom: {
        families: [{
          name: 'OpenDyslexic',
          local: 'OpenDyslexic',
          src: './assets/fonts/*.ttf',
        }],
        display: 'auto',
        preload: true,
        prefetch: false,
      },
    })
  ],
}