import { Routes,Route } from "react-router-dom"
import {Home , Cart} from '../pages';
export const AllRoutes = () => {
  return (
    <main>
        <section>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </section>
    </main>
  )
}
