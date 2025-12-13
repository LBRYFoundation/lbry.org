import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: [eslint.configs.recommended],
  },
]);
