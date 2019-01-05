module.exports = {
  plugins: [
    require(`precss`),
    require(`tailwindcss`)(`./styles/tailwind.js`),
    require(`autoprefixer`)()
  ]
}
