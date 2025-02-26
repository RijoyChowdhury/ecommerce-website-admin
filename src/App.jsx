import { Route, Routes } from 'react-router-dom'
import AuthChecker from './components/AuthChecker'
import ComponentDecorator from './components/ComponentDecorator'
import Products from './views/Products'
import Dashboard from './views/Dashboard'
import SignUp from './views/Signup'
import Login from './views/Login'
import './App.css'
import ProductUpload from './views/ProductUpload'

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<AuthChecker />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/upload" element={<ProductUpload />} />
                </Route>
                <Route element={<ComponentDecorator />}>
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
