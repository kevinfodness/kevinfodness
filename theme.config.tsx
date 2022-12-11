export default {
  darkMode: true,
  footer: <p>© 2022 Kevin Fodness</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  navs: [
    {
      url: '/pdf/disability-and-cyberspace.pdf',
      name: 'Dissertation'
    }
  ],
  postFooter: null,
  readMore: 'Read More →'
}
