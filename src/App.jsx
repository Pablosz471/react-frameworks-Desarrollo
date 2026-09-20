import ProductoCard from "./components/ProductoCard"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import Esmaltes from "./assets/esmaltes.jpg"
import cremasfaciales from "./assets/cremasfaciales.jpg"
import productosparaelcabello from "./assets/productosparaelcabello.jpeg"

const productos = [
  {
    nombre: 'Esmaltes',
    precio: '15.000',
    imagen: Esmaltes,
    stock: 5
  },
  {
    nombre: 'Cremas Faciales',
    precio: '35.000',
    imagen: cremasfaciales,
    stock: 7
  },
  {
    nombre: 'Productos para el cabello',
    precio: '40.000',
    imagen: productosparaelcabello,
    stock: 0
  }
]

function App() {
  return (
    <div
      className="is-flex is-flex-direction-column"
      style={{ minHeight: '100vh' }}
    >
      <Navbar />

      <main className="is-flex-grow-1 p-5">
        <h1 className="title is-2 mb-5">
          Productos
        </h1>

        <div className="columns is-multiline">
          {productos.map((producto) => (
            <div
              className="column is-12-mobile is-4-desktop"
              key={producto.nombre}
            >
              <ProductoCard
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                stock={producto.stock}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App