const footer = (data, dists, { name, lang, template, type }) =>
  `<footer>
    <section id="contact">
      <div class="wrapper">
        <article>
          ${
            type === "home"
              ? `<h2>${data.labels[lang].pages.home.contact.head}</h2>
                <div>
                  <ul>
                    <li><h3 class="architect-fg" style="width:auto;margin:0;padding:0;">Architecture offer?</h3></li>
                    <li><h3 class="developer-fg" style="width:auto;margin:0;padding:0;">Development offer?</h3></li>
                    <li><h3 class="leader-fg" style="width:auto;margin:0;padding:0;">Leadership offer?</h3></li>
                    <li><h3 class="teacher-fg" style="width:auto;margin:0;padding:0;">Teachingship offer?</h3></li>
                  </ul>
                  <a href="mailto:j@swn.ski"><h3 id="contact-mail">j[at]swn.ski</h3></a>
                </div>`
              : ""
          }
          <p>
            <a href="mailto:j@swn.ski">j[at]swn.ski</a>
            | <a href="https://linkedin.com/in/jakub-sowi%C5%84ski/" target="_blank">linkedin</a>
            | <a href="https://github.com/soofka/" target="_blank">github</a>
            | <a href="https://last.fm/user/soofka/" target="_blank">last.fm</a>
          </p>
          <p><small>
            swn.ski 2007-2024
            | <a href="https://europa.eu/youreurope/business/running-business/intellectual-property/copyright/index_en.htm" target="_blank">${data.labels[lang].misc.allRightsReserved}</a>
            | <a href="https://github.com/soofka/swn.ski">repo</a>
          </small></p>
        </article>
      </div>
    </section>
  </footer>
  ${dists
    .filter(
      (dist) =>
        (dist.name === "script" ||
          dist.name === `script-${template}` ||
          dist.name === `script-${type}` ||
          dist.name === `script-${name}`) &&
        dist.ext === ".js",
    )
    .sort((script) => (script.name === "script" ? -1 : 0))
    .map((script) => `<script defer src="${script.rel}"> </script>`)
    .join("")}`;

export default footer;
