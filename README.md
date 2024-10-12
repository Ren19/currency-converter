Instrucciones para ejecutar el proyecto localmente

1. Clonar el repositorio: 

git clone https://github.com/Ren19/currency-converter.git

2. Navegar al directorio del proyecto: 

cd currency-converter

3. Instalar las dependencias: 

npm install

4. Ejecutar el servidor de desarrollo: 

ng serve

5. Abrir http://localhost:4200 en tu navegador para ver el proyecto.

* Breve descripción de la arquitectura y decisiones técnicas

** Arquitectura: 
*** La aplicación frontend está construida con Angular, utilizando Angular Material para componentes de UI. La arquitectura sigue un patrón de módulos y componentes para organizar el código de manera modular y mantenible.

** Servicios: 
*** Utiliza servicios de Angular (ApiService) para manejar las solicitudes HTTP y la autenticación mediante JWT.

** Enrutamiento: 
*** Implementa el enrutamiento de Angular para la navegación entre componentes.

* Notas sobre medidas de seguridad y optimización

** Seguridad:
***Utiliza autenticación mediante JWT para proteger las rutas y asegurarse de que solo los usuarios autenticados puedan acceder a ciertas funcionalidades.

** Optimización:
*** Uso de observables y suscripción a servicios para manejar datos asincrónicos, minimizando el uso excesivo de recursos y mejorando la experiencia del usuario.

** Manejo de Errores:
*** Implementa el manejo de errores en el servicio de autenticación y conversión para proporcionar retroalimentación útil al usuario.