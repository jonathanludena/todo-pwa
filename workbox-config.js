module.exports = {
  "globDirectory": "./backend/public",
  "globPatterns": [
    "**/*.{css,ico,png,jpg,html,js,json}"
  ],
  "swDest": "backend\\public\\sw.js", 

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};