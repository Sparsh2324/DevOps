FROM nginx:latest
WORKDIR /download
COPY . /download
EXPOSE 5000
RUN apt update
CMD ["run", "my-nginx-image"]
