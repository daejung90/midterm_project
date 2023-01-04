/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const storyRoutes = express.Router();
const storyQueries = require("../db/queries/stories");

storyRoutes.get("/", (req, res) => {
  storyQueries.getStories().then((stories) => {
    res.send(stories);
  });
});

storyRoutes.get("/create", (req, res) => {
  res.render("create");
});

module.exports = storyRoutes;
