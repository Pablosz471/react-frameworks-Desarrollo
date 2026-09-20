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
    <div className="flex min-h-screen flex-col">

      <Navbar />

      <main className="flex-1 px-6 py-6">

        <h1 className="mb-6 text-2xl font-semibold">
          Productos
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.nombre}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              stock={producto.stock}
            />
          ))}
        </div>

      </main>

      <Footer />

    </div>
  )
}

export default App