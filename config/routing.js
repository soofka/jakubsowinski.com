export const getRouting = (langs, labels, data) => {
  const routes = {};
  const pages = [];

  const pageTemplate = "page";
  const slidesTemplate = "slides";

  const indexPageName = "index";
  const articlesPageName = "articles";
  const articlePageName = "article";
  const blogPageName = "blog";
  const blogPostPageName = "post";
  const coursesPageName = "courses";
  const projectsPageName = "projects";
  const talksPageName = "talks";
  const slidesPageName = "slides";
  const cvPageName = "cv";

  for (let index in langs) {
    const lang = langs[index];

    const indexPageUrl = `/${lang}/${indexPageName}`;
    const indexPageId = `${indexPageName}-${lang}`;
    const indexPageObject = {
      template: pageTemplate,
      pageId: indexPageId,
      alts: [`/${lang}`],
    };
    if (index == 0) {
      indexPageObject.alts.push("/");
    }
    routes[indexPageUrl] = indexPageObject;
    pages.push({
      id: indexPageId,
      url: indexPageUrl,
      name: indexPageName,
      lang,
      template: pageTemplate,
      type: "home",
    });

    const articlesPageUrl = `/${lang}/${articlesPageName}`;
    const articlesPageId = `${articlesPageName}-${lang}`;
    routes[articlesPageUrl] = {
      template: pageTemplate,
      pageId: articlesPageId,
    };
    pages.push({
      id: articlesPageId,
      url: articlesPageUrl,
      name: articlesPageName,
      lang,
      template: pageTemplate,
      type: "list",
      meta: {
        title: labels[lang].pages.articles.meta.title,
        description: labels[lang].pages.articles.meta.description,
      },
      content: data.articles,
    });

    for (let article of data.articles) {
      const articlePageUrl = `/${lang}/${articlePageName}/${parseTitleToUrl(article.title)}`;
      const articlePageId = `${articlePageName}-${lang}-${article.id}`;
      routes[articlePageUrl] = {
        template: pageTemplate,
        pageId: articlePageId,
      };
      pages.push({
        id: articlePageId,
        url: articlePageUrl,
        name: articlePageName,
        lang,
        template: pageTemplate,
        type: "item",
        meta: {
          title: article.title,
          description: article.description,
          image: article.image,
        },
        content: article,
      });
    }

    const blogPageUrl = `/${lang}/${blogPageName}`;
    const blogPageId = `${blogPageName}-${lang}`;
    routes[blogPageUrl] = {
      template: pageTemplate,
      pageId: blogPageId,
    };
    pages.push({
      id: blogPageId,
      url: blogPageUrl,
      name: blogPageName,
      lang,
      template: pageTemplate,
      type: "list",
      meta: {
        title: labels[lang].pages.blog.meta.title,
        description: labels[lang].pages.blog.meta.description,
      },
      content: data.blog,
    });

    for (let post of data.blog) {
      const blogPostPageUrl = `/${lang}/${blogPostPageName}/${parseTitleToUrl(post.title)}`;
      const blogPostPageId = `${blogPostPageName}-${lang}-${post.id}`;
      routes[blogPostPageUrl] = {
        template: pageTemplate,
        pageId: blogPostPageId,
      };
      pages.push({
        id: blogPostPageId,
        url: blogPostPageUrl,
        name: blogPostPageName,
        lang,
        template: pageTemplate,
        type: "item",
        meta: {
          title: post.title,
          description: post.description,
        },
        content: post,
      });
    }

    const coursesPageUrl = `/${lang}/${coursesPageName}`;
    const coursesPageId = `${coursesPageName}-${lang}`;
    routes[coursesPageUrl] = {
      template: pageTemplate,
      pageId: coursesPageId,
    };
    pages.push({
      id: coursesPageId,
      url: coursesPageUrl,
      name: coursesPageName,
      lang,
      template: pageTemplate,
      type: "list",
      meta: {
        title: labels[lang].pages.courses.meta.title,
        description: labels[lang].pages.courses.meta.description,
      },
      content: data.courses,
    });

    const projectsPageUrl = `/${lang}/${projectsPageName}`;
    const projectsPageId = `${projectsPageName}-${lang}`;
    routes[projectsPageUrl] = {
      template: pageTemplate,
      pageId: projectsPageId,
    };
    pages.push({
      id: projectsPageId,
      url: projectsPageUrl,
      name: projectsPageName,
      lang,
      template: pageTemplate,
      type: "list",
      meta: {
        title: labels[lang].pages.projects.meta.title,
        description: labels[lang].pages.projects.meta.description,
      },
      content: data.projects,
    });

    const talksPageUrl = `/${lang}/${talksPageName}`;
    const talksPageId = `${talksPageName}-${lang}`;
    routes[talksPageUrl] = {
      template: pageTemplate,
      pageId: talksPageId,
    };
    pages.push({
      id: talksPageId,
      url: talksPageUrl,
      name: talksPageName,
      lang,
      template: pageTemplate,
      type: "list",
      meta: {
        title: labels[lang].pages.talks.meta.title,
        description: labels[lang].pages.talks.meta.description,
      },
      content: data.talks,
    });

    const cvPageUrl = `/${lang}/${cvPageName}`;
    const cvPageId = `${cvPageName}-${lang}`;
    routes[cvPageUrl] = {
      template: pageTemplate,
      pageId: cvPageId,
    };
    pages.push({
      id: cvPageId,
      url: cvPageUrl,
      name: cvPageName,
      lang,
      template: pageTemplate,
      type: "cv",
      meta: {
        title: labels[lang].pages.cv.meta.title,
        description: labels[lang].pages.cv.meta.description,
      },
      content: data.cv,
    });
  }

  for (let slides of data.slides) {
    const slidesPageUrl = `/${slidesPageName}/${parseTitleToUrl(slides.title)}`;
    if (slides.html) {
      const slidesPageId = `${slidesPageName}-${slides.id}`;
      routes[slidesPageUrl] = {
        template: slidesTemplate,
        pageId: slidesPageId,
      };
      pages.push({
        id: slidesPageId,
        url: slidesPageUrl,
        name: slidesPageName,
        template: slidesTemplate,
        type: "slides",
        meta: {
          title: slides.title,
          description: slides.description,
          image: slides.image,
        },
        content: slides,
      });
    }
  }

  for (let route in routes) {
    if (Object.hasOwn(routes[route], "template")) {
      routes[route].template = `${routes[route].template}.template.html`;
    }
    if (!route.endsWith("/")) {
      routes[`${route}/`] = { ...routes[route] };
    }
  }

  return { routes, pages };
};

const parseTitleToUrl = (title) =>
  title
    ? title
        .trim()
        .toLowerCase()
        .replaceAll(new RegExp("[^a-zA-Z0-9]", "g"), "-")
    : title;
