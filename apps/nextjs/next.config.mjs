import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: false },
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})
