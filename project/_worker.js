export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve triage120-review.html as the main page
    if (url.pathname === '/' || url.pathname === '') {
      return env.ASSETS.fetch(new Request(new URL('/triage120-review.html', url), request));
    }

    // Serve all other files normally
    return env.ASSETS.fetch(request);
  },
};
