export const getTheming = () => {
  const colors = {
    grayscale: [
      "#080808",
      "#101010",
      "#181818",
      "#202020",
      "#DFDFDF",
      "#E7E7E7",
      "#EFEFEF",
      "#F7F7F7",
    ],
    accents: {
      architect: {
        light: "#F66E8E",
        dark: "#870725",
      },
      developer: {
        light: "#6DACF7",
        dark: "#074187",
      },
      leader: {
        light: "#79DAEB",
        dark: "#126D7C",
      },
      teacher: {
        light: "#F6BE6E",
        dark: "#875207",
      },
    },
  };

  const themes = [
    { name: "light", color: colors.grayscale[6] },
    { name: "dark", color: colors.grayscale[1] },
  ];

  return { colors, themes };
};
