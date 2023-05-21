/** @type {import('tailwindcss').Config} */

const labelsClasses = [
  'indigo',
  'gray',
  'green',
  'blue',
  'red',
  'purple',
]

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans']
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

