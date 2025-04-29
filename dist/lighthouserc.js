// /** lighthouserc.js  (ESM) */
// export default {
//   ci: {
//     collect: {
//       // staticDistDir: './dist',
//       url: [
//         // 'http://localhost:8080/index.html',
//         // 'http://localhost:8080/js.html',
//         // 'http://localhost:8080/anime.html',
//         // 'http://localhost:8080/gsap.html',
//         'https://mery182.github.io/animation_test_js/index.html',
//         'https://mery182.github.io/animation_test_js/js.html',
//         'https://mery182.github.io/animation_test_js/anime.html',
//         'https://mery182.github.io/animation_test_js/gsap.html'
//       ],
//       numberOfRuns: 1,

//       /* ↓↓↓  ЧИСТЫЙ lighthouse-config кладём сюда  ↓↓↓ */
//       settings: {
//         preset: 'mobile',
//         formFactor: 'mobile',
//         throttlingMethod: 'devtools',

//         /* Важное: поле config → это именно lighthouse-config */
//         config: {
//           extends: 'lighthouse:default',

//           /* Переопределяем аудит errors-in-console */
//           audits: [
//             {
//               /* путь или имя встроенного аудита */
//               path: 'errors-in-console',

//               /* опции самого аудита */
//               options: {
//                 /** 
//                  * Сообщения, которые НЕ будут считаться ошибкой.
//                  * Можно строку или массив RegExp/строк.
//                  */
//                 ignoredPatterns: [
//                   // пример: предупреждение от Vimeo
//                   'Blocked script execution in “about:blank”',
//                   // пример: кастомная dev-логика
//                   'my-non-critical-warning',
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     },

//     /*  assert → решаем, падает CI или нет  */
//     assert: {
//       preset: 'lighthouse:recommended',
//       assertions: {
//         // errors-in-console теперь будет WARN,
//         // а не «падать» при любом найденном сообщении
//         'errors-in-console': 'off',

//         // блокирующие ресурсы — тоже лишь предупреждение
//         'render-blocking-resources': 'off',

//         /* Core Web Vitals в режиме warn */
//         'largest-contentful-paint':   ['warn', {minScore: 0.7}],
//         'cumulative-layout-shift':    ['warn', {minScore: 0.7}],
//         'interaction-to-next-paint':  ['warn', {minScore: 0.7}],
//         'speed-index':                ['warn', {minScore: 0.7}],
//         'total-blocking-time':        ['warn', {minScore: 0.7}],
//         'server-response-time':       ['warn', {maxNumericValue: 600}],
//       },
//     },

//     /* сохраняем отчёты */
//     upload: [
//       { target: 'temporary-public-storage' },
//       { target: 'filesystem', outputDir: './lhci-reports' },
//     ],
//   },
// };
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