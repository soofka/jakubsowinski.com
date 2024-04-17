import hljs from "highlight.js";

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

const sanitizeHtml = (html) =>
  html
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const desanitizeHtml = (html) =>
  html
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&#x24;", "$");

export default code;
