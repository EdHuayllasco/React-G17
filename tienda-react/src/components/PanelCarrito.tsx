import type { ItemCarrito } from "../tipos";

interface Props {
 carrito : ItemCarrito[];
 onQuitar : (id : number) => void;
 onVaciar : () => void;
}

export default function PanelCarrito ({ carrito, onQuitar, onVaciar } : Props) {
    return (
        <section className="mb-6 rounded-xl border p-4">
            <h2 className="font-semibold">Tu carrito</h2>
            {carrito.length === 0 && <p className="text-sm text-gray-500">Tu carrito esta vacio</p>}
            <ul>
                {
                carrito.map((item) => (
                    <li key={item.id} className="flex items-center justify-between py-1 text-sm">
                        <span>{item.nombre} x {item.cantidad}</span>
                        {/* () => setCarrito(quitarItem(carrito, item.id)) */}
                        <button onClick={() => onQuitar(item.id)} aria-label="Quitar del barrito">X</button>
                    </li>
                    ))
                  }
                </ul>
                {
                  carrito.length > 0 && (
                    // setCarrito([])
                    <button className="mt-2 text-sm underline" onClick={onVaciar}>Vaciar carrito</button>
                  )
                }
        </section>
    )
}