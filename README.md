# Todo List App

Aplicación de gestión de tareas

- Creación de notas
- Edición de contenido
- Eliminar notas

## Arquitectura

### Back-end

El back-end está programado en PHP con el framework Laravel. El único
controlador importante para este proyecto en específico está ubicado en
`app/Http/Controllers/TodoController.php`, es el que se encarga de las distintas
acciones en las tareas del usuario.

Los cambios en la base de datos son manejados por el modelo `Todo` en la carpeta
`app/Models`, por medio de Eloquent es posible hacer cambios en los datos sin
necesidad de escribir SQL.

### Front-end

El front-end se encuentra programado en React.js y Typescript. Las peticiones se
realizan con ayuda de la librería Inertia.js que permite una buena integración
con el back-end y optimiza el tamaño del payload en las respuestas.

## Instalación

Clonar el proyecto:

```sh
git clone https://github.com/OscarM3615/todolistapp.git
cd todolistapp
```

Instalar las dependencias, tanto del back-end como del front-end.

```sh
composer install
npm install
```

Después, construir los assets del front-end.

```sh
npm run build
```

Para conectar una base de datos, es posible crear una en MySQL, ya sea por medio
de phpMyAdmin o alguna otra herramienta. Para probar el proyecto se puede crear
una y acceder con el usuario root (no recomendado en producción).

Ingresar los datos de la BB.DD. en el archivo `.env`, el cual se puede obtener copiando el archivo `.env.example`:

```env
DB_DATABASE=todolistapp
DB_USERNAME=root
DB_PASSWORD
```

Por último, aplicar las migraciones y correr el servidor:

```sh
php artisan migrate
php artisan serve
```

La página debería estar visible en `http://localhost:8000`.
