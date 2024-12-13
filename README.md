# Guía para iniciar el proyecto backend con Node.js

## Prerrequisitos

1. Tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/).
2. Asegúrate de que las dependencias necesarias estén instaladas ejecutando:

   ```bash
   npm install
   Levantar el proyecto en modo desarrollo
   El proyecto incluye un script para iniciar en modo desarrollo con nodemon. Sigue los pasos a continuación:
   ```

Abre la terminal en la raíz del proyecto.

Ejecuta el comando:

bash
Copiar código

# npm run dev

nodemon observará los cambios en los archivos y reiniciará automáticamente el servidor.

Configuración adicional
El archivo principal del servidor está ubicado en src/server.js.
Si usas variables de entorno, asegúrate de configurar un archivo .env en la raíz del proyecto con las claves necesarias.
