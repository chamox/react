# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

# Pasos para ocupar React desde js vanilla

- `npm install @vitejs/plugin-react -E` (plugin de vite para react)
- `npm install react react-dom -E` (no están las dependencias de react, debemos instalarlas)

crear `vite.config.js` y ponerle

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```
