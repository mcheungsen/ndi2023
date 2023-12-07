# Utilisation d'une image Node.js officielle
FROM node:21

# Création du répertoire de travail et copie des fichiers nécessaires
WORKDIR /app

COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Exposer le port nécessaire par Vite (par exemple, le port 3000)
EXPOSE 3000

# Commande pour démarrer le serveur de développement
CMD ["npm", "run", "dev"]
