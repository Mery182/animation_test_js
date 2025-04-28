export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost:49651/index.html',
        'http://localhost:49651/js.html',
        'http://localhost:49651/anime.html',
        'http://localhost:49651/gsap.html'
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'mobile',
        formFactor: 'mobile',
        throttlingMethod: 'devtools',
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2,
          disabled: false
        }
      }
    },

    assert: {
      assertions: {
        /* Ошибки и предупреждения */
        'errors-in-console': 'off',
        'meta-description': 'off',
        'render-blocking-resources': 'off',

        /* Core Web Vitals */
        'largest-contentful-paint': ['warn', { minScore: 0.7 }],
        'cumulative-layout-shift':  ['warn', { minScore: 0.7 }],
        'interaction-to-next-paint': ['warn', { minScore: 0.7 }],
        'server-response-time':     ['warn', { maxNumericValue: 600 }],
        'speed-index':              ['warn', { minScore: 0.7 }],
        'total-blocking-time':      ['warn', { minScore: 0.7 }]
      }
    },

    upload: [
      { target: 'temporary-public-storage' },
      { target: 'filesystem', outputDir: './lhci-reports' }
    ]
  }
};