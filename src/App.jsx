import ProductoCard from "./components/ProductoCard"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import Esmaltes from "./assets/esmaltes.jpg"
import cremasfaciales from "./assets/cremasfaciales.jpg"
import productosparaelcabello from "./assets/productosparaelcabello.jpg"


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
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      <main className="flex-grow-1 container-fluid mt-4">

        <h1 className="mb-4">Productos</h1>

        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.nombre}>
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