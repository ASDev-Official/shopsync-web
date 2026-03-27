import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function arbLoader() {
  return {
    name: "arb-loader",
    transform(code, id) {
      if (!id.endsWith(".arb")) {
        return null;
      }

      return {
        code: `export default ${code}`,
        map: null,
      };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), arbLoader()],
});
