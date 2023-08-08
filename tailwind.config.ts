import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#DBDBDB',
        'secondary-gray': '#6F7072',
        'tertiary-gray': '#888889',
        stroke: '#3F4346',
      },
    },
  },
  plugins: [],
}
export default config
