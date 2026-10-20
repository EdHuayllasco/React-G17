import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import { productos } from "./datos"
import type {EstadoCarga, ItemCarrito, Producto} from "./tipos"
import { agregarItem, quitarItem } from "./carrito"
import formatearPrecio from "./formato"
const estado = 'listo' as EstadoCarga;

export default function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  function agregarAlCarrito(producto : Producto) {
    setCarrito(agregarItem(producto, carrito))
  }
  const unidades = carrito.reduce((suma, i) => suma + i.cantidad, 0);
  const total = carrito.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header nombre="TecCart" eslogan="Una Vida Tecnologica" 
      resumen={`🛒 ${unidades} productos - ${formatearPrecio(total)}`}/>
      {/* PROPS */}
      <p className="mb-4 text-sm text-gray-500">{productos.length} productos</p>
      {estado === 'cargando' && <p className="text-gray-500">Cargando catalogo...</p>}
      {estado === 'error' && <p className="text-red-600">No pudimos cargar los productos</p>}
      {estado === 'listo' && (
          <section>
          {
            productos.map((p) => <ProductCard producto={p} key={p.id} onAgregar={agregarAlCarrito}/>)
          }
          </section>
        )
      }
      <button className="mb-4 text-sm" onClick={() => setCarritoAbierto(!carritoAbierto)}>{carritoAbierto ? 'Ocultar carrito' : 'Ver carrito'}</button>
      
      {carritoAbierto && (<section className="mb-6 rounded-xl border p-4">
        <h2 className="font-semibold">Tu carrito</h2>
        {carrito.length === 0 && <p className="text-sm text-gray-500">Tu carrito esta vacio</p>}
        <ul>
          {
            carrito.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-1 text-sm">
                <span>{item.nombre} x {item.cantidad}</span>
                <button onClick={() => setCarrito(quitarItem(carrito, item.id))} aria-label="Quitar del barrito">X</button>
              </li>
            ))
          }
        </ul>
        {
          carrito.length > 0 && (
            <button className="mt-2 text-sm underline" onClick={() => setCarrito([])}>Vaciar carrito</button>
          )
        }
      </section>)}
      <Footer/>
    </main>
  )
}
