import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/FlowCoffee/',
  plugins: [tailwindcss(), react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
