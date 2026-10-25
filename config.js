/**
 * Конфигурация приложения
 * 
 * Для изменения значений БЕЗ пересборки проекта:
 * 1. Зайдите в Netlify UI → Site settings → Environment variables
 * 2. Добавьте переменную GDESLON_PARTNER_ID с вашим ID
 * 3. Пересоберите деплой (Trigger deploy → Clear cache and deploy site)
 * 
 * ИЛИ отредактируйте этот файл напрямую через Netlify UI:
 * Site → Deploys → последняя сборка → Browse files → config.js → Edit
 */
window.APP_CONFIG = {
  // Партнёрский ID сети «Где Слон?» (Яндекс Афиша)
  // Оставьте пустым или 'YOUR_GDESLON_ID' до получения реального ID
  GDESLON_PARTNER_ID: '',
  
  // Название сайта
  SITE_NAME: 'Афиша Москвы и Подмосковья',
  
  // Базовый URL сайта
  SITE_URL: 'https://afisha-podmoskovye.netlify.app'
};
