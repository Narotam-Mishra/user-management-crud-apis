FROM node:20-alpine 

#Create working directory
WORKDIR /user-management-app

#Install all dependencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .

# Set default environment variables


# Expose port
EXPOSE 6973

CMD [ "node", "index.js" ]
