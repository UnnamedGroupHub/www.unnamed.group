const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/gitlab",
        destination: "https://gitlab.com/unnamed.group",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/invite/JnDGdHp9JV",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/UnnamedGroupX",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/UnnamedGroupX",
        permanent: true,
      },
    ];
  },
};

// build as standalone if docker is building
if (process.env.DOCKER_BUILD) nextConfig.output = "standalone";

module.exports = withMDX(nextConfig);
