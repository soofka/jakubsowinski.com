const style = (data, theme) => `
  :root {
    --black: ${data.colors.grayscale[0]};
    --white: ${data.colors.grayscale[data.colors.grayscale.length - 1]};
    
    --fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 1] : data.colors.grayscale[0]};
    --off-fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 2] : data.colors.grayscale[1]};
    --off-fg-2: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 3] : data.colors.grayscale[2]};
    --alt-fg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 4] : data.colors.grayscale[3]};
    --bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 8] : data.colors.grayscale[7]};
    --off-bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 7] : data.colors.grayscale[6]};
    --off-bg-2: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 6] : data.colors.grayscale[5]};
    --alt-bg: ${theme === "dark" ? data.colors.grayscale[data.colors.grayscale.length - 5] : data.colors.grayscale[4]};

    --architect-fg: ${theme === "dark" ? data.colors.accents.architect.light : data.colors.accents.architect.dark};
    --architect-bg: ${theme === "dark" ? data.colors.accents.architect.dark : data.colors.accents.architect.light};
    --developer-fg: ${theme === "dark" ? data.colors.accents.developer.light : data.colors.accents.developer.dark};
    --developer-bg: ${theme === "dark" ? data.colors.accents.developer.dark : data.colors.accents.developer.light};
    --leader-fg: ${theme === "dark" ? data.colors.accents.leader.light : data.colors.accents.leader.dark};
    --leader-bg: ${theme === "dark" ? data.colors.accents.leader.dark : data.colors.accents.leader.light};
    --teacher-fg: ${theme === "dark" ? data.colors.accents.teacher.light : data.colors.accents.teacher.dark};
    --teacher-bg: ${theme === "dark" ? data.colors.accents.teacher.dark : data.colors.accents.teacher.light};

    --img-filter: ${theme === "dark" ? "grayscale(0.2)" : "none"};
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
