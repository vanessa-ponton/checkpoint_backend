# Utilise une image officielle Node.js
FROM node:lts-alpine

# Crée le dossier de l'app
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le code source
COPY . .

# Compile le TypeScript via le script build du package.json
RUN npm run build

RUN ls -l /app/dist

# Expose le port utilisé par l'app
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "start"]
