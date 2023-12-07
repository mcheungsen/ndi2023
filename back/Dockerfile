# Utilisation d'une image Node.js officielle
FROM node:21

# Création du répertoire de travail et copie des fichiers nécessaires
WORKDIR /app
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Exposer le port nécessaire par votre serveur Express (par exemple, le port 3001)
EXPOSE 3030

# Commande pour démarrer le serveur back-end
CMD ["npm","run", "dev"]
