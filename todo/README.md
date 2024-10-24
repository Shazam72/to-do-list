# The TODO App

Here is the implementation of the front web application  of the Todo App test. It has been written in two directory which contains respectivly the `front` in the *todo* folder and the `api server` in the *api* folder.

## Technologies

The basic technology in the project is `typeScript` based on the `node JS` runtime.  
The front uses **Next JS** to generate the interface conbing the **tailwind CSS** support and somees puglings.  
The server uses **express.js** and expose routes in a `REST API` that hydrate the front data.

## How to setup?

The project is supported by the `pnpm` package manager and `deno` runtime. But you can use another package manager to *setup*, *run* or *deploy* the project.  
At first you will need to navigqte to one of the following directory before running the development script

```bash
    ├── api 
    └── todo
```

To set up a project dependencies run;

```bash
    npm install
    #or
    pnpm install
    #or
    deno install
```

according to which package manager you want to use.  
In the `api` directory if you want too launch the server run

```bash
    pnpm serve
    #or
    npm run serve
    #or
    deno task serve
```

> the types are not linted before the server starts

To launch the client server run the following command

```bash
    pnpm dev
    #or
    npm run dev
    #or
    deno task dev
```
