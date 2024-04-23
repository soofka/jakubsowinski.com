const mainCv = (data, dists, { lang, content }) =>
  `<main>
    <section>
      <div class="wrapper">
        <article>
          <h1>Jakub Sowiński</h1>
          <h3>
            <span class="architect-fg">architect</span
            ><span class="developer-fg">developer</span
            ><span class="leader-fg">leader</span
            ><span class="teacher-fg">teacher</span>
          </h3>
          <h4>
            <span><a href="https://www.google.com/maps/place/Warsaw"target="_blank">Warsaw, Poland</a></span>
            <span><a href="https://swn.ski/" target="_blank">www.swn.ski</a></span>
            <span><a href="mailto:j@swn.ski" target="_blank">j[at]swn.ski</a></span>
          </h4>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>About me</h3>
          <div class="row">
            <div class="col col-2">
              <p>
                I am a highly skilled and driven software enthusiast who excels
                in working with both computer and another human being. I have
                over 15 years of experience in software development with
                particular focus on full-stack web development, over 5 years of
                experience in software architecture, and over 5 years of
                experience in leadership and teaching with heavy focus on
                programming and architecture.
              </p>
              <p>
                I am looking for an interesting, meaningful project, which would
                allow me to directly impact world for the better, be it through
                the product itself, or through company culture and values, close
                cooperation with my coworkers, sharing my knowledge and learning
                from others, so that we all can grow.
              </p>
            </div>
            <div class="col col-1">
              <partial name="img" data="${encodeURI(
                JSON.stringify({
                  src: "images/me1.jpg",
                  alt: data.labels[lang].pages.home.intro.imgAlt,
                  lazy: false,
                }),
              )}"></partial>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>Recent work experience</h3>
          ${content.workExperience
            .filter((item) => Object.hasOwn(item, "description"))
            .map(
              (item) =>
                `<article>
                <h2>${item.title}</h2>
                <h4><small>${item.from} — ${item.to} | ${item.company}</small></h4>
                <small class="tags">
                  ${item.tags.map((tag) => (Array.isArray(tag) ? `<span class="${tag[1]}">${tag[0]}</span>` : `<span>${tag}</span>`)).join("")}
                </small>
                ${item.description}
              </article>`,
            )
            .join("")}
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>Other work experience</h3>
          ${content.workExperience
            .filter((item) => !Object.hasOwn(item, "description"))
            .map(
              (item) =>
                `<article>
                <h4>${item.title} <small>${item.from} — ${item.to} | ${item.company}</small></h4>
                <small class="tags">
                  ${item.tags.map((tag) => (Array.isArray(tag) ? `<span class="${tag[1]}">${tag[0]}</span>` : `<span>${tag}</span>`)).join("")}
                </small>
              </article>`,
            )
            .join("")}
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>Education</h3>
          <article>
            <div class="row">
              <div class="col col-1">
                ${content.education
                  .slice(0, content.education.length / 2)
                  .map(
                    (item) =>
                      `<small>${item.from} — ${item.to} | ${item.university}</small>
                    <h4>${item.subject}</h4>
                    ${item.description}`,
                  )
                  .join("")}
              </div>
              <div class="col col-1">
                ${content.education
                  .slice(content.education.length / 2)
                  .map(
                    (item) =>
                      `<small>${item.from} — ${item.to} | ${item.university}</small>
                    <h4>${item.subject}</h4>
                    ${item.description}`,
                  )
                  .join("")}
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>Notable trainings</h3>
          <article>
            <div class="row">
              <div class="col col-1">
                ${Object.keys(content.trainings)
                  .slice(0, 2)
                  .map(
                    (year) =>
                      `<h4>${year}</h4>
                    <ul>${content.trainings[year].map((item) => `<li>${item}</li>`).join("")}</ul>`,
                  )
                  .join("")}
              </div>
              <div class="col col-1">
                ${Object.keys(content.trainings)
                  .slice(2)
                  .map(
                    (year) =>
                      `<h4>${year}</h4>
                    <ul>${content.trainings[year].map((item) => `<li>${item}</li>`).join("")}</ul>`,
                  )
                  .join("")}
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <h3>Notable contributions</h3>
          <article>
            <div class="row">
              <div class="col col-1">
                <h4>Talks</h4>
                <ul>${content.talks.map((item) => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join("")}</ul>
              </div>
              <div class="col col-1">
                <h4>Articles</h4>
                <ul>${content.articles.map((item) => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join("")}</ul>
                <h4>Projects</h4>
                <ul>${content.projects.map((item) => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join("")}</ul>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <div class="row">
            <div class="col col-1">
              <h3>Languages</h3>
              <ul>${content.languages.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
            <div class="col col-1">
              <h3>Miscellaneous</h3>
              <ul>${content.misc.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <article>
          <p>
            <small><em>I agree to the processing of personal data provided in this
              document for realising the recruitment process pursuant to the
              Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018,
              item 1000) and in agreement with Regulation (EU) 2016/679 of the
              European Parliament and of the Council of 27 April 2016 on the
              protection of natural persons with regard to the processing of
              personal data and on the free movement of such data, and repealing
              Directive 95/46/EC (General Data Protection Regulation).
            </em></small>
          </p>
        </article>
      </div>
    </section>
  </main>`;

export default mainCv;
