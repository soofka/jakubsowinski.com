const mainHome = (data, dists, { lang }) => `
  <section id="intro">
    <div class="wrapper">
      <article>
        <!--<h1>
          <span class="architect-fg">J</span>
          <span class="architect-fg">A</span>
          <span class="architect-fg">K</span>
          <span class="architect-fg">U</span>
          <span class="architect-fg">B</span>
          <span class="teacher-fg name">_</span>
          <span class="developer-fg">S</span>
          <span class="developer-fg">O</span>
          <span class="developer-fg">W</span>
          <span class="developer-fg">I</span>
          <span class="developer-fg">N</span>
          <span class="developer-fg">S</span>
          <span class="developer-fg">K</span>
          <span class="developer-fg">I</span>
          <span class="teacher-fg website">.</span>
          <span class="leader-fg website">C</span>
          <span class="leader-fg website">O</span>
          <span class="leader-fg website">M</span>
        </h1>-->
        <div class="row">
          <div class="col col-2">
            <h2>${data.labels[lang].pages.home.intro.head}</h2>
            <h3>${data.labels[lang].pages.home.intro.lead}</h3>
          </div>
          <div class="col col-1">
            <partial name="img" data="${encodeURI(
              JSON.stringify({
                src: "images/me1",
                alt: data.labels[lang].pages.home.intro.imgAlt,
                caption: `<p class="text-blinker">
                  <span class="text">
                    <span class="architect-fg">solution architect</span> / 
                    <span class="developer-fg">software developer</span> / 
                    <span class="teacher-fg">programming teacher</span> / 
                    <span class="leader-fg">technical leader</span>
                  </span>
                  <span class="blinker"></span>
                </p>`,
              }),
            )}"></partial>
          </div>
        </div>
        <p>${data.labels[lang].pages.home.intro.text}</p>
        <div class="buttons">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button architect-bg",
              pageId: `cv-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.intro.buttons.cv}</partial>
          <a class="button developer-bg" href="#architect">${data.labels[lang].pages.home.intro.buttons.info}</a>
          <a class="button teacher-bg" href="#contact">${data.labels[lang].pages.home.intro.buttons.contact}</a>
        </div>
      </article>
    </div>
  </section>
  <section id="architect">
    <div class="wrapper">
      <article>
        <h2 class="architect-fg">${data.labels[lang].pages.home.architect.head}</h2>
        <div class="row">
          <div class="col col-1">
            <partial name="img" data="${encodeURI(
              JSON.stringify({
                src: "images/me2",
                alt: data.labels[lang].pages.home.architect.imgAlt,
                caption: `<span class="architect-fg">${data.labels[lang].pages.home.architect.imgAlt}</span>`,
                lazy: true,
              }),
            )}"></partial>
          </div>
          <div class="col col-2">
            <h3>${data.labels[lang].pages.home.architect.lead}</h3>
            <p>${data.labels[lang].pages.home.architect.text}</p>
          </div>
        </div>
        <div class="buttons">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button architect-bg",
              pageId: `talks-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.architect.buttons.talks}</partial>
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button architect-bg",
              pageId: `articles-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.architect.buttons.articles}</partial>
          <a class="button teacher-bg" href="#contact">${data.labels[lang].pages.home.intro.buttons.contact}</a>
        </div>
      </article>
    </div>
  </section>
  <section id="developer">
    <div class="wrapper">
      <article>
        <h2 class="developer-fg">${data.labels[lang].pages.home.developer.head}</h2>
        <div class="row">
          <div class="col col-2">
            <h3>${data.labels[lang].pages.home.developer.lead}</h3>
            <p>${data.labels[lang].pages.home.developer.text}</p>
          </div>
          <div class="col col-1">
            <partial name="img" data="${encodeURI(
              JSON.stringify({
                src: "images/me3",
                alt: data.labels[lang].pages.home.developer.imgAlt,
                caption: `<span class="developer-fg">${data.labels[lang].pages.home.developer.imgAlt}</span>`,
                lazy: true,
              }),
            )}"></partial>
          </div>
        </div>
        <div class="buttons">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button developer-bg",
              pageId: `projects-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.developer.buttons.projects}</partial>
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button developer-bg",
              pageId: `blog-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.developer.buttons.blog}</partial>
          <a class="button teacher-bg" href="#contact">${data.labels[lang].pages.home.intro.buttons.contact}</a>
        </div>
      </article>
    </div>
  </section>
  <section id="leader">
    <div class="wrapper">
      <article>
        <h2 class="leader-fg">${data.labels[lang].pages.home.leader.head}</h2>
        <div class="row">
          <div class="col col-1">
            <partial name="img" data="${encodeURI(
              JSON.stringify({
                src: "images/me4",
                alt: data.labels[lang].pages.home.leader.imgAlt,
                caption: `<span class="leader-fg">${data.labels[lang].pages.home.leader.imgAlt}</span>`,
                lazy: true,
              }),
            )}"></partial>
          </div>
          <div class="col col-2">
            <h3>${data.labels[lang].pages.home.leader.lead}</h3>
            <p>${data.labels[lang].pages.home.leader.text}</p>
          </div>
        </div>
        <div class="buttons">
          <partial name="link" data="${encodeURI(
            JSON.stringify({
              class: "button leader-bg",
              pageId: `courses-${lang}`,
            }),
          )}">${data.labels[lang].pages.home.leader.buttons.courses}</partial>
          <a class="button teacher-bg" href="#contact">${data.labels[lang].pages.home.intro.buttons.contact}</a>
        </div>
      </article>
    </div>
  </section>
`;

export default mainHome;
