/** lighthouserc.js */
export default {
  ci: {
    collect: {
      staticDistDir: './dist',          // явно указали папку сборки
      url: [
        'http://localhost:49651/index.html',
        'http://localhost:49651/js.html',
        'http://localhost:49651/anime.html',
        'http://localhost:49651/gsap.html'
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'mobile',                // эмулируем мобильный
        formFactor: 'mobile',
        throttlingMethod: 'devtools',
        screenEmulation: {               // ручные параметры телефона
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2,
          disabled: false
        }
      }
    },

    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        /* Core Web Vitals */
        'largest-contentful-paint': ['warn', { minScore: 0.7 }],
        'cumulative-layout-shift':  ['warn', { minScore: 0.7 }],
        'interaction-to-next-paint': ['warn', { minScore: 0.7 }],
        'server-response-time':     ['warn', { maxNumericValue: 600 }], // TTFB
        'speed-index':              ['warn', { minScore: 0.7 }],
        'total-blocking-time':      ['warn', { minScore: 0.7 }]
      }
    },

    /** Загружаем HTML-отчёт + сохраняем JSON */
    upload: [
      { target: 'temporary-public-storage' },            // временная ссылка на 7 дней
      { target: 'filesystem', outputDir: './lhci-reports' } // полный JSON отчёт
    ]
  }
}
// /** lighthouserc.js */
// module.exports = {
//   ci: {
//     collect: {
//       staticDistDir: './dist',          // указали явным текстом
//       url: [
//         'http://localhost:49651/index.html',
//         'http://localhost:49651/js.html',
//         'http://localhost:49651/anime.html',
//         'http://localhost:49651/gsap.html'
//       ],
//       numberOfRuns: 5,
//       // settings: {
//       //   preset: 'desktop',
//       //   formFactor: 'desktop',
//       //   throttlingMethod: 'devtools'
//       // }
//       settings: {
//         preset: 'mobile',          // те же, что DevTools > Lighthouse > Mobile
//         formFactor: 'mobile',
//         throttlingMethod: 'devtools',  // real-throttle (4× CPU, Slow 4G)
//         screenEmulation: {          // если хотите свой “телефон”
//           mobile: true,
//           width: 360,
//           height: 640,
//           deviceScaleFactor: 2,
//           disabled: false
//         }
//       }
//     },

//     assert: {
//       preset: 'lighthouse:recommended',
//       assertions: {
//         /* Core Web Vitals */
//         'largest-contentful-paint': ['warn', {minScore: 0.7}],
//         'cumulative-layout-shift':  ['warn', {minScore: 0.7}],
//         'interaction-to-next-paint': ['warn', { minScore: 0.7 }],
//         //
//         'server-response-time':     ['warn', {maxNumericValue: 600}], // TTFB
//         'speed-index':              ['warn', {minScore: 0.7}],
//         'total-blocking-time':      ['warn', {minScore: 0.7}]
//       }
//     },

//     /** Загружаем HTML-отчёт + кладём JSON локально */
//     upload: [
//       { target: 'temporary-public-storage' },            // ссылка 7 дней
//       { target: 'filesystem', outputDir: './lhci-reports'}// полный JSON
//     ]
//   }
// };