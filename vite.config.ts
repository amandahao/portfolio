import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import crypto from "crypto";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// Temporary patch for bad `crypto.hash` usage
// if (typeof (crypto as any).hash !== "function") {
//   (crypto as any).hash = (
//     algo: string,
//     data: string,
//     enc: "hex" | "binary" | "base64" = "hex"
//   ) => crypto.createHash(algo).update(data).digest(enc);
// }
