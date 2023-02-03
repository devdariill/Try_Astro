import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: import.meta.env.DEV
    ? 'http://localhost:3000'
    : 'http://dev-ronaaldll.online',
})
