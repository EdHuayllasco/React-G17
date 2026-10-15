import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import { productos } from "./datos"



export default function App() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header nombre="TecCart" eslogan="Una Vida Tecnologica"/>
      <Header nombre="FalabellaProductos"/>
      {/* PROPS */}
      <section>
        {
          productos.map((p) => <ProductCard producto={p} key={p.id}/>)
        }
      </section>
      <Footer/>
    </main>
  )
}
