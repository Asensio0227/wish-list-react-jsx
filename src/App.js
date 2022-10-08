import {
  About,
  AuthWrapper,
  PrivateRoute,
  Error,
  Home,
  Landing,
} from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <AuthWrapper>
    <BrowserRouter>
      <Routes>
        <Route exact path='/landing' element={<Landing />} />
        <Route path='/' element={
          <PrivateRoute>
          <Home />
          </PrivateRoute>
        } />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
