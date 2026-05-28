export default [
  {
    // 1. Tell ESLint to check EVERY .js and .jsx file inside your src directory
    files: ["src/**/*.{js,mjs,cjs,jsx}"],
    
    // 2. Clear out the folder bans so it can read your /ui and /lib files
    ignores: ["node_modules/**", "dist/**"],
    
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // Keep your existing plugins and rules settings intact below this...
  }
];
