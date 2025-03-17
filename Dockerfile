# Используем официальный Node.js образ как базовый
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock (или package-lock.json) в контейнер
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы в контейнер
COPY . .

# Создаем сборку проекта
RUN npm run build

# Устанавливаем переменную окружения для запуска
ENV NODE_ENV production

# Экспонируем порт
EXPOSE 8000

# Запускаем Next.js приложение
CMD ["npm", "run", "start"]