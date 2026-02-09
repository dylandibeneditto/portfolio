import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

export default {
  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist",
      fallback: null,
    }),
    paths: {
      base: dev ? "" : "/portfolio",
    },
  },
};
