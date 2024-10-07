import { createExpressServer } from "routing-controllers";
import 'dotenv/config';

let PORT = 3002;

// Crea la aplicación Express con routing-controllers y habilita CORS
const app = createExpressServer({
  cors: {
    origin: '*', // Permite todos los orígenes; en producción, especifica los orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
  routePrefix: "/bp", 

  controllers: [
    __dirname + "/controllers/*{.js,.ts}",
  ], // Especifica los controladores que deseas usar
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});
