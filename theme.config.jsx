export default {
  titleSuffix: " – Let's Play Gatka",
  logo: <img src="/logo.jpg" style={{ height: 40, width: 40 }} />,
  darkMode: true,
  footer: {
    text: `${new Date().getFullYear()} © World Gatka Federation.`,
  },
  navigation: false,
  editLink: {
    component: null,
  },
  search: {
    component: null,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="World Gatka Federation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="World Gatka Federation" />
      <meta property="og:description" content="World Gatka Federation" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
};
