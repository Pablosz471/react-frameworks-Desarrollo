import React from 'react'

function ProductoCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0

    return (
        <div
            className={`overflow-hidden rounded border bg-white shadow-sm ${
                sinStock ? 'border-2 border-red-500' : 'border-gray-200'
            }`}
        >
            <div className="aspect-[4/3] w-full">
                <img
                    src={imagen}
                    className="h-full w-full object-cover"
                    alt={nombre}
                />
            </div>

            <div className="p-4">
                <h5 className="mb-2 text-lg font-medium">
                    {nombre}
                </h5>

                <p className="mb-1 text-sm">
                    Precio: ${precio}
                </p>

                <p className="mb-3 text-sm">
                    Stock: {stock}
                </p>

                <button
                    className="rounded border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={sinStock}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ProductoCard