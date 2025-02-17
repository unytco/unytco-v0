import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Get the branch name from environment variable
const branch = process.env.GITHUB_REF_NAME || "main";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set base depending on branch
  base: branch === "develop" ? "/unyt.co/" : "/",
});
