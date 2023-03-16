import express from "express";
import * as controllers from "../controller/controller.js";
export const apiRouter = express.Router();

apiRouter.post("/shortner", controllers.shortUrl);
apiRouter.get("/:shortId", controllers.getUrl);
