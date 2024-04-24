import path from "path";
import { getContent } from "./content.js";
import { getRouting } from "./routing.js";
import { getTheming } from "./theming.js";

const langs = ["en", "pl"];
const { colors, themes } = getTheming();
const { data, labels } = await getContent(langs);
const { routes, pages } = getRouting(langs, labels, data);

export const config = {
  src: path.resolve("src"),
  dist: path.resolve("dist"),
  reportFile: path.resolve("report.json"),
  routes,
  verbosity: 3,

  data: {
    name: "sowinski.it",
    type: "website",
    url: "https://sowinski.it",
    author: "Jakub Sowiński",
    email: "j@sowinski.it",
    langs,
    themes,
    colors,
    labels,
    pages,
  },
};

export default config;
