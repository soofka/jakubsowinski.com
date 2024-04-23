import hljs from "highlight.js";
import { desanitizeHtml } from "../helpers/index.js";

const code = (data, dists, { language }, content) => {
  const contentParsed = desanitizeHtml(
    content
      .trim()
      .substring("<pre>".length, content.trim().length - "</pre>".length - 1),
  );
  const contentHighlighted = language
    ? hljs.highlight(contentParsed, { language })
    : hljs.highlightAuto(contentParsed);
  return `<code class="hljs"><pre>${contentHighlighted.value}</pre></code>`;
};

export default code;
