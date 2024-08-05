import Express from "express";

const app = Express();

app.get("/", (req, res) => {
	res.send("<h1>Frontend</h1>");
});

app.listen(80, () => {
	console.log("Frontend is running on port 80");
});
