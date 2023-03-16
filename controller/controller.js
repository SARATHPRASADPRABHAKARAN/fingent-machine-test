import mongoose from "mongoose";
import { Shortner } from "../model/model.js";
import { shortid, isValidUrl } from "./helpers.js";

export const shortUrl = async (req, res) => {
  try {
    const url = req.body.url;
    const validUrl = isValidUrl(url);
    if (validUrl) {
      const shortId = shortid(5);
      const shortner = await Shortner.create({ url: url, shortId: shortId });
      const shortUrl = `${process.env.SERVER_URL}/${shortner.shortId}`;
      res.status(200).json({ data: shortUrl });
    } else {
      res.status(400).json({ message: "invalid url" });
    }
  } catch (err) {
    return res.status(500).send({ message: "something went wrong" })
  }
};

export const getUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const shortner = await Shortner.findOne({ shortId: shortId });
    if (shortner) {
      return res.redirect(shortner.url);
    } else {
      return res.status(400).send({ message: "invalid url" });
    }
  } catch (err) {
    return res.status(500).send({ message: "something went wrong" });
  }
};
