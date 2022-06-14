## How to run this?

For running the gn app in dev, run `npm run start` , this is full-stack app, 
it will need a back-end for this one, ofr the back-end run `npm run dev:server`

For production env, build the ng app with `npm run build -- --configuration=production`

and then `npm run prod:server` to run the Node.js API in prod

### How to setup and migrate the pg db for the first time

First, start up the Postgresql instance using docker (change what is needed):

```sh
$ docker run \
    --name REPLACEME \
    -p 5455:5432 \
    -e POSTGRES_USER=nsolid \
    -e POSTGRES_PASSWORD=nsolid \
    -e POSTGRES_DB=heroes \
    -d postgres
```

**NOTE: Using docker is not required here, any pg server could work**

Once the pg instance is up and running, simply run:

```sh
$ PGUSER=nsolid PGHOST=localhost PGPORT=5432 node db-setup.js ```

```

For a different configuration, `db-setup.js` supports different env vars:

```sh
PGUSER=nsolid # by default
PGHOST=localhost # by default
PGDATABASE=nsolid # by default
PGPASSWORD=nsolid # by default
PGPORT=5432 # by default
```

Take a look to the `http-server/pg-tools.js` file.

### How to build Docker images

This project contains two dockerfiles:

* Dockerfile: Works to build the Frontend.
* Dockerfile-api: Works to build the Backend.

#### How to build Frontend Docker image

The following command must be executed:

```sh
docker build -t ui .
```

To test Docker image you can run:

```sh
docker run -p 80:80 -it ui
```

#### How to build Backend Docker image

The following command must be executed:

```sh
docker build -t api -f Dockerfile-api .
```

To test Docker image you can run:

```sh
docker run -p 5000:5000 -it api
```
