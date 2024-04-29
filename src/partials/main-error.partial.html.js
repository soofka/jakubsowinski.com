const mainError = (data, dists, { name, lang }) => `
  <section>
    <div class="wrapper">
      <article>
        <h2>${data.labels[lang].pages.error[name].name}</h2>
        <h3>${data.labels[lang].pages.error[name].description}</h3>
        <p>
          <a ${name === "404" ? 'href="/"' : 'href="#" class="no-js" onclick="window.location.reload()"'}>
            ${data.labels[lang].pages.error[name].nextStep}
          </a>
        </p>
      </article>
    </div>
  </section>
`;

export default mainError;
