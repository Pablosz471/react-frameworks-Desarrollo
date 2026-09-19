import React from 'react'

function ProductoCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0

    return (
        <div className={`card ${sinStock ? 'border-danger' : ''}`}>

            <div className="ratio ratio-4x3">
                <img
                    src={imagen}
                    className="w-100 h-100 object-fit-cover"
                    alt={nombre}
                />
            </div>

            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>

                <p className="card-text">
                    Precio: ${precio}
                </p>

                <p className="card-text">
                    Stock: {stock}
                </p>

                <button
                    className="btn btn-"
                    disabled={sinStock}
                >
                    Agregar
                </button>
            </div>

        </div>
    )
}

export default ProductoCard