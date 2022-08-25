const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Task Number 2.1</title></head>');
        res.write('<body><h1>Welcome to my first assignment!</h1><form action="/create-user" method="POST">Username: <input type="text" name="username"><button type="submit">Send</button></form></body>');
        return res.end();
    }

    if (url === "/users") {
        res.write('<html>');
        res.write('<head><title>Task Number 2.1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const username = [];
        req.on('data', (chunk) => {
            username.push(chunk);
        });
        return req.on('end', () => {
            const parsedUsername = Buffer.concat(username).toString();
            console.log(parsedUsername.split('=')[1]);
        })
    }
});

server.listen(3000);