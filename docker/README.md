# IT635 Docker Setup

This folder contains a simple Docker Compose setup to get any machine that can run Docker up to Exercise 2.

## Getting Started

To create a new database in a Docker volume named `docker_it635-db` simply cd into this directory and run `docker-compose up`.
Please note that this may take a long time, be patient.
You will see `INSERT 0 1` echoed to the screen several times.
When it is done, your DB container will continue running in the background.
Use a new terminal to run the client.

## Running a shell

This class will use both Linux and psql commands to complete the exercises.
As such, it is easiest to simply exec a BASH shell on the running `db` service by running the command `docker exec db bash` from within this directory.
Docker will default to giving you a root shell, but if you need to be the postgres user you can run the command `su postgres` (this image does not have sudo installed).

## Copying files between container and host

This setup creates a bind mount between the `shared` directory on the host and the `/shared` on the container.
Files can be copied to/from the container in this way.

## Recreating the DB

Since everything is stored on a volume and the database is created automatically if the volume doesn't have DB data on it, starting fresh is easy.
Start by deleting the old DB volume (which may require stopping an archived container):

```console
ryan@R90VJ3MK:~/IT635/docker$ docker stop docker-db-1
docker-db-1
ryan@R90VJ3MK:~/IT635/docker$ docker rm docker-db-1
docker-db-1
ryan@R90VJ3MK:~/IT635/docker$ docker volume rm docker_it635-db
```

Then it's just a matter of running `docker-compose up` again and the new volume will be created and a database will be set up.
