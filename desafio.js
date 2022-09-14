/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

var nombre = "Carlos";
var apellido = "Martinez";
var edad = 18;
var desarrollador = true;
var nacimiento = "04-08-2004";
var libroFavorito = {
  titulo: "Soy el número cuatro",
  autor: "Pittacus Lore",
  fecha: "04-12-2012",
  url: "https://es.wikipedia.org/wiki/Soy_el_número_cuatro",
};

var pasatiempos = ["Leer", "Escribir", "Dibujar", "Jugar videojuegos"];

var miActividadFavorita = () =>{
  return 'Lo que más me gusta hacer es escribir poemas';
};