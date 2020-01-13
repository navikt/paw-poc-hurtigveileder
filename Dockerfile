FROM navikt/pus-decorator

ENV APPLICATION_NAME=hurtigveileder
ENV CONTEXT_PATH = /arbeid/hurtigveileder
ENV GZIP_ENABLED=true
COPY /out /app

ADD decorator.yaml /decorator.yaml
