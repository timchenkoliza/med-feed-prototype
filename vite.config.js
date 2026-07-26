var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// GitHub Pages relative base; override via VITE_BASE if publishing under subpath.
export default defineConfig({
    plugins: [react()],
    base: (_a = process.env.VITE_BASE) !== null && _a !== void 0 ? _a : './',
    server: { port: 5173, host: true },
});
