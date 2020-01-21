import express from "express";
import App from "../components/app";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
  <html>
    <head>
        <title>Lavely.dev</title>
        <link href="css/uikit.min.css" rel="stylesheet"/>
    <script src="js/uikit-icons.min.js"></script>
    <script src="js/uikit.min.js"></script>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </head>
        <body>
            <div id="reactele">{{{reactele}}}</div>
        </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

export default router;
