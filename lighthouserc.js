export default {
    ci: {
      collect: {
        url: ['http://localhost:8080/'],
        numberOfRuns: 3,
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };