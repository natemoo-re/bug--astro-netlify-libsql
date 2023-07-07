import { defineMiddleware } from "astro/middleware";
import { client } from "./db";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
    console.log(client);
    context.locals.data = "Hello world!"
});
