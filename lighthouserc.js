module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:8080/'], // твой локальный адрес сервера
        numberOfRuns: 3,
      },
      upload: {
        target: 'temporary-public-storage', // временное хранилище Lighthouse
      },
    },
  };