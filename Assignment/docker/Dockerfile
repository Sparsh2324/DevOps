FROM Debian:latest

WORKDIR /App

RUN apt update

RUN apt install Apache2

EXPOSE 5000

ENTRYPOINT ["Start"]

CMD ["apache2"]
