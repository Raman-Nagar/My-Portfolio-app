import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    settings: {
      react: { version: "19" },
    },
    rules: {
      "react/no-unescaped-entities": 0,
    },
  },
];
