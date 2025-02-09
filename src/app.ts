import cookieParser from "cookie-parser";
import express from "express";
import router from "./routes";
const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

//cookie-parser
app.use(cookieParser());

//routes
app.use("/api/v1", router);

//server health check
app.get("/", (req, res) => {
  res.send("<h1 style='color:#4834d4'>Hello from Prisma</h1>");
});

export default app;
