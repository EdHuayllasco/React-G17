import { useState } from "react";
import Header from "../components/Header";
import type { ItemCarrito } from "../tipos";
import PanelCarrito from "../components/PanelCarrito";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

interface Props {
    nombreTienda : string;
    resumen :  string;
    items : ItemCarrito[];
    onQuitar : (id : number) => void;
    onVaciar : () => void;
}

export default function ({nombreTienda, resumen, items, onQuitar, onVaciar} : Props) {
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    return (
        <main className="mx-auto max-w-5xl p-6">
            <Header nombre={nombreTienda} eslogan="Una Vida Tecnologica" 
            //`🛒 ${unidades} productos - ${formatearPrecio(total)}`
            resumen={resumen}/>
            <button className="mb-4 text-sm" 
            onClick={() => setCarritoAbierto(!carritoAbierto)}>
                {carritoAbierto ? 'Ocultar carrito' : 'Ver carrito'}
            </button>
            {carritoAbierto && (<PanelCarrito carrito={items} onQuitar={onQuitar} onVaciar={onVaciar}/>)}
            <Outlet/>
            <Footer/>
        </main>
    )
}