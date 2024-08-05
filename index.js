import { config } from "dotenv";
import Express from "express";

const app = Express();
config();

app.get("/number", (req, res) => {
	res.send(process.env.NUMBER);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
