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

    --img-filter: ${theme === "dark" ? "grayscale(0.7)" : "none"};
  }

  ${
    theme === "dark"
      ? ".hljs{background:#2b2b2b;color:#f8f8f2}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}"
      : ".hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#d91e18}.hljs-attribute,.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#aa5d00}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:green}.hljs-section,.hljs-title{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}"
  }
`;

export default {
  "-dark": (data) => style(data, "dark"),
  "-light": (data) => style(data, "light"),
};
