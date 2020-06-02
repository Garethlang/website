const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
          plugins: [
            new PrerenderSPAPlugin(
              // Absolute path to compiled SPA
              path.resolve(__dirname, 'dist'),
              // List of routes to prerender
              [ '/'],
              {
                // options
              }
            ),
          ]
        }
    },
    css: {
      loaderOptions: {
        sass: {
            prependData: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_mixins.scss";
            @import "@/scss/_reset.scss";
          `
        }
      }
    }
  };