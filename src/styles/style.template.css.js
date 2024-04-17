const style = (data, theme) => `
  :root {
    --fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 1] : data.colors.grayscale[0]};
    --off-fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 2] : data.colors.grayscale[1]};
    --off-fg-2: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 3] : data.colors.grayscale[2]};
    --alt-fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 4] : data.colors.grayscale[3]};
    --bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 8] : data.colors.grayscale[7]};
    --off-bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 7] : data.colors.grayscale[6]};
    --off-bg-2: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 6] : data.colors.grayscale[5]};
    --alt-bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 5] : data.colors.grayscale[4]};

    --architect-fg: ${theme === "dark" ? data.colors.accents.architect.dark : data.colors.accents.architect.light};
    --architect-bg: ${theme === "dark" ? data.colors.accents.architect.light : data.colors.accents.architect.dark};
    --developer-fg: ${theme === "dark" ? data.colors.accents.developer.dark : data.colors.accents.developer.light};
    --developer-bg: ${theme === "dark" ? data.colors.accents.developer.light : data.colors.accents.developer.dark};
    --leader-fg: ${theme === "dark" ? data.colors.accents.leader.dark : data.colors.accents.leader.light};
    --leader-bg: ${theme === "dark" ? data.colors.accents.leader.light : data.colors.accents.leader.dark};
    --teacher-fg: ${theme === "dark" ? data.colors.accents.teacher.dark : data.colors.accents.teacher.light};
    --teacher-bg: ${theme === "dark" ? data.colors.accents.teacher.light : data.colors.accents.teacher.dark};

    --img-filter: ${theme === "dark" ? "grayscale(0.2)" : "none"};
    --img-box-shadow: ${theme === "dark" ? "0 0 0 1px var(--off-bg), 0 0 0 2px var(--alt-bg)" : "0 0 0 1px var(--bg), 0 0 0 2px var(--fg)"}
  }
`;

export default {
  generate: (data) => {
    const dists = [];
    for (let theme of data.themes) {
      dists.push({
        name: `style-${theme.name}`,
        content: (data) => style(data, theme.name),
      });
    }
    return dists;
  },
};
