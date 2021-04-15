import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      {
        // https://github.com/aws-amplify/amplify-js/issues/7499#issuecomment-804386820
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
})
