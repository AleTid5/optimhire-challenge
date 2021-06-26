# 1. Install and build the dependencies
FROM node:14 as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install --no-optional && npm cache clean --force
COPY . .
RUN npm run build

# 2. Run the app
FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]