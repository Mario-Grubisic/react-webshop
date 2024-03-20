import './App.css'
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapperComponent'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Page } from './Components/Page/Page'
import { Product } from './Components/Product/Product'
import { SingleProduct } from './Components/Product/SingleProduct'
import { Home } from './Components/Home/Home'
import { DetailedProductView } from './Components/Product/DetailedProductView'
import { ProductList } from './Components/Product/ProductList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapperComponent />}>
          <Route index element={<Home />}/>
          <Route path="/contact" element={<Page title={"Contact"} description={"Lorem ipsum"}/>
          } />
          <Route path="/about" element={<Page title={"About us"} description={"Lorem ipsum"}/>
          } />
          <Route path="/product" element={<Product />}>
            <Route path='/product/:id' element={<DetailedProductView />} />
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
