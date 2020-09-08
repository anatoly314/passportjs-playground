import 'dotenv/config.js';  //https://github.com/motdotla/dotenv/issues/89
// dotenv.config();

import app from "./app.js";

/**
 * Start Express server.
 */

app.set("port", process.env.PORT || 3000);


function listenAsync (port) {
    return new Promise((resolve, reject) => {
        const server = app.listen(port, () => resolve(server));
        server.on('error', reject);
    })
}

async function startServer() {
    try {
        const port = app.get("port");
        await listenAsync(port);
        console.log(`Server running on http://localhost:${port}/`)
    } catch (e) {
        process.exit(1);
        console.error(e);
    }
}

startServer().catch(error => {
    console.error(error);
});
