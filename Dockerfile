FROM navikt/node-express:12.2.0-alpine
RUN mkdir app
COPY out /app
EXPOSE 8000
#FROM navikt/pus-decorator

#ENV APPLICATION_NAME=hurtigveileder
#ENV GZIP_ENABLED=true
#COPY /out /app

#ADD decorator.yaml /decorator.yaml
