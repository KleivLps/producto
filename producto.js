class producto {
  constructor(
    id,
    titulo,
    modelo,
    cantidadderam,
    precio,
    stock,
    imagen,
    descuento
  ) {
    this.id = id;
    this.titulo = titulo;
    this.modelo = modelo;
    this.cantidadderam = cantidadderam;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
    this.descuento = descuento;
  }
}

const producto1 = new producto();
const producto2 = new producto("2031", "samsung", "s23");
const producto3 = new producto(
  "4051",
  "motorola",
  "g80",
  "40gb",
  2000,
  true,
  "imagen",
  true
);

console.log(producto1, producto2, producto3);
