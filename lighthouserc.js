/** lighthouserc.js */
export default {
  ci: {
    collect: {
      url: [
        'https://mery182.github.io/animation_test_js/index.html',
        'https://mery182.github.io/animation_test_js/js.html',
        'https://mery182.github.io/animation_test_js/anime.html',
        'https://mery182.github.io/animation_test_js/gsap.html',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'mobile',
        formFactor: 'mobile',
        throttlingMethod: 'devtools',
      }
    },

    assert: {
      preset: 'off',
    },

    upload: [
      { target: 'temporary-public-storage' },
      { target: 'filesystem', outputDir: './lhci-reports' },
    ],
  }
}