<?php
// Datos de conexión a la base de datos PostgreSQL
$host = 'localhost'; // Cambiar por el nombre del servidor de PostgreSQL
$port = '5432'; // Puerto por defecto para PostgreSQL
$database = 'medicinapuerta'; // Cambiar por el nombre de tu base de datos
$user = 'postgres'; // Cambiar por el nombre de usuario de PostgreSQL
$password = '1302'; // Cambiar por la contraseña de PostgreSQL

// Conexión a la base de datos PostgreSQL
$conexion = pg_connect("host=$host port=$port dbname=$database user=$user password=$password");
if (!$conexion) {
    die("Error al conectar a la base de datos: " . pg_last_error());
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];

// Query para insertar los datos en la tabla "usuarios" (cambiar "usuarios" por el nombre de tu tabla)
$query = "INSERT INTO usuarios (nombre, telefono, correo) VALUES ('$nombre', '$telefono', '$correo')";

// Ejecutar el query
$resultado = pg_query($conexion, $query);
if (!$resultado) {
    die("Error al insertar los datos: " . pg_last_error());
}

// Cerrar la conexión
pg_close($conexion);

// Redireccionar a la página de éxito
echo '<script>alert("Datos guardados exitosamente"); window.location.href = "7prueba";</script>';
?>
