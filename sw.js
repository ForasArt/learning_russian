self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/learning_russian/', // основная страница
  
          // Стили и скрипты
          '/learning_russian/style.css',
          '/learning_russian/script.js',
  
          // Иконки (favicons)
          '/learning_russian/img/favicon-16x16.png',
          '/learning_russian/img/favicon-32x32.png',
          '/learning_russian/img/favicon-192x192.png',
          '/learning_russian/img/favicon-512x512.png',
  
          // Графические элементы
          '/learning_russian/img/header.png',
          '/learning_russian/img/footer.png',
          '/learning_russian/img/left.png',
          '/learning_russian/img/right.png',
          '/learning_russian/img/preview.png',
  
          // Другие ресурсы
          '/learning_russian/img/Telegram_logo.svg',
          '/learning_russian/img/texture.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(response) {
          // Если запрос успешный — сохраняем в кэш
          if (response.status === 200) {
            caches.open('v1').then(function(cache) {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        }).catch(function() {
          // Если нет интернета — возвращаем ошибку
          return caches.match('/learning_russian/offline.html'); // страница офлайн
        });
      })
    );
  });
  