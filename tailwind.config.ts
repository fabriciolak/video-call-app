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

        purple: '#AEA7D9',
        yellow: 'EFB15F',
        red: '#FD9485',
        danger: '#DE3B46',
        green: '#8AE261',

        dark: '#121212',
        'dark-500': '#292B2C',
        'dark-600': '#2F3133',
        'dark-700': '#1C1E20',

        'title-color': '#DCDAE7',
        background: '#101214',
        blue: '#1C71D1',
      },
      width: {
        container: 'min(1310px, 100%)',
        'container-full': 'min(1630px, 100%)',
      },
      gridTemplateRows: {
        video: '98px 1fr 7rem',
      },
      gridTemplateColumns: {
        video: 'minmax(1fr, 1310px)',
        'video-chat': '1fr 320px',
      },
    },
  },
  plugins: [],
}
export default config
