FROM node:18.17.1-slim

RUN apt update && apt install -y --no-install-recommends \
    git \
    openssh-client

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]
