import formatearPrecio from "../formato";
import type { ItemCarrito } from "../tipos";

interface Props {
    carrito : ItemCarrito[];
    total : number ;
    onVaciar : () => void;
}

export default function Checkout ({carrito, total, onVaciar} : Props) {
    return(
        <div className="flex max-w-md flex-col gap-3">
            <h1 className="text-2xl font-bold">Datos de envio</h1>
            <p className="text-sm">Total a pagar : <b>{formatearPrecio(total)}</b></p>
        </div>
    )
}