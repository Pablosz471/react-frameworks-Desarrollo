import React from 'react'

function ProductoCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0

    return (
        <div className={`card ${sinStock ? 'has-background-danger-light' : ''}`}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={imagen}
                        alt={nombre}
                    />
                </figure>
            </div>

            <div className="card-content">
                <h5 className="title is-5">
                    {nombre}
                </h5>

                <p className="mb-2">
                    Precio: ${precio}
                </p>

                <p className="mb-4">
                    Stock: {stock}
                </p>

                <button
                    className="button is-light"
                    disabled={sinStock}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ProductoCard