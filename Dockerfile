FROM node:20

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends libaio1 unzip curl \
    && rm -rf /var/lib/apt/lists/*

# Oracle Instant Client
RUN curl -O https://download.oracle.com/otn_software/linux/instantclient/2326000/instantclient-basiclite-linux.x64-23.26.0.0.0.zip \
    && unzip instantclient-basiclite-linux.x64-23.26.0.0.0.zip -d /opt/oracle \
    && rm instantclient-basiclite-linux.x64-23.26.0.0.0.zip

ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_26
ENV OCI_LIB_DIR=/opt/oracle/instantclient_23_26
ENV OCI_INC_DIR=/opt/oracle/instantclient_23_26/sdk/include

# 1) Dependencias primeiro (cache do npm ci nao quebra a cada mudanca no codigo)
COPY package.json package-lock.json ./
RUN npm ci

# 2) Codigo
COPY . .

# 3) Prisma client + build TS
RUN npx prisma generate \
    && npm run build

EXPOSE 3333

CMD ["node", "dist/server.js"]