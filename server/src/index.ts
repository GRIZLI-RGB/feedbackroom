import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
	res.json({ status: "ok" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
