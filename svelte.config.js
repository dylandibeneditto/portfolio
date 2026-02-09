import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: null
    }),
    paths: {
      base: '/portfolio' // MUST match repo name
    }
  }
};
