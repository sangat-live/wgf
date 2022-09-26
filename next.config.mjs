import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  unstable_staticImage: true,
});

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
  swcMinify: true,
});
