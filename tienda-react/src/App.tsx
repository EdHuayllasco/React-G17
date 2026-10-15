const tienda = 'Tienda Tech';
const productosEnCarrito = 3;

export default function App() {

  return (
    <>
      <h1>{tienda.toUpperCase()}</h1>
      <p>Tienes {productosEnCarrito} productos en el carrito</p>
    </>
  )
}
