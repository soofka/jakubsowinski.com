import { parse as parseMarkdown } from "marked";

export const getContent = async (langs) => {
  const labels = {};
  for (let lang of langs) {
    labels[lang] = (
      await import(`../src/data/translations/${lang}.json`, {
        assert: { type: "json" },
      })
    ).default;
  }

  const data = {
    articles: (
      await import("../src/data/articles.json", {
        assert: { type: "json" },
      })
    ).default,
    blog: (
      await import("../src/data/blog.json", {
        assert: { type: "json" },
      })
    ).default,
    courses: (
      await import("../src/data/courses.json", {
        assert: { type: "json" },
      })
    ).default,
    projects: (
      await import("../src/data/projects.json", {
        assert: { type: "json" },
      })
    ).default,
    talks: (
      await import("../src/data/talks.json", {
        assert: { type: "json" },
      })
    ).default,
    slides: (
      await import("../src/data/slides.json", {
        assert: { type: "json" },
      })
    ).default,
    cv: (
      await import("../src/data/cv.json", {
        assert: { type: "json" },
      })
    ).default,
  };

  data.cv.articles = [];
  for (let article of data.articles) {
    if (article.inCV) {
      data.cv.articles.push(article);
    }
  }

  data.cv.projects = [];
  for (let project of data.projects) {
    if (project.github) {
      const readme = await (
        await fetch(
          `https://raw.githubusercontent.com/soofka/${project.github}/master/README.md`,
        )
      ).text();
      const descriptionStartIndex = readme.indexOf("<!---description_start-->");
      const descriptionEndIndex = readme.indexOf("<!---description_end-->");
      if (descriptionStartIndex >= 0 && descriptionEndIndex >= 0) {
        project.description = parseMarkdown(
          readme
            .substring(descriptionStartIndex + 25, descriptionEndIndex)
            .trim(),
        );
      }

      const { forks_count = 0, stargazers_count = 0 } = await (
        await fetch(`https://api.github.com/repos/soofka/${project.github}`)
      ).json();
      project.stars = stargazers_count;
      project.forks = forks_count;
    }
    if (project.npm) {
      const { downloads = 0 } = await (
        await fetch(
          `https://api.npmjs.org/downloads/point/2000-01-01:2050-01-01/${project.npm}`,
        )
      ).json();
      project.installs = downloads;
    }
    if (project.inCV) {
      data.cv.projects.push(project);
    }
  }

  data.cv.talks = [];
  for (let talk of data.talks) {
    if (talk.slides) {
      talk.slides = data.slides.find((item) => item.id === talk.slides);
    }
    if (talk.inCV) {
      data.cv.talks.push(talk);
    }
  }

  return { data, labels };
};
