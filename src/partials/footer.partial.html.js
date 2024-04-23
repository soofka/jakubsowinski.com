const footer = (data, dists, { lang, type }) =>
  `<footer>
    <section id="contact">
      <div class="wrapper">
        <article>
          ${
            type === "home"
              ? `<h2>${data.labels[lang].pages.home.contact.head}</h2>
                <div>
                  <ul>
                    <li class="architect-fg"><h3>${data.labels[lang].pages.home.contact.lead.architect}</h3></li>
                    <li class="developer-fg"><h3>${data.labels[lang].pages.home.contact.lead.developer}</h3></li>
                    <li class="teacher-fg"><h3>${data.labels[lang].pages.home.contact.lead.teacher}</h3></li>
                    <li class="leader-fg"><h3>${data.labels[lang].pages.home.contact.lead.leader}</h3></li>
                  </ul>
                  <partial name="link-email"><h3 id="contact-mail">
                    ${data.labels[lang].pages.home.contact.head}: __EMAIL__
                  </h3></partial>
                </div>`
              : ""
          }
          <p>
            <partial name="link-email"></partial>
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
`;

export default footer;
