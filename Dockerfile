FROM navikt/pus-decorator

ENV APPLICATION_NAME=hurtigveileder
ENV GZIP_ENABLED=true
COPY /out /app

ADD decorator.yaml /decorator.yaml
