import QRCode from "react-qr-code"
import { Routes,Route, BrowserRouter } from "react-router-dom"

import RegistrationForm from "./pages/register"
import Inicio from "./pages/inicio"
function App() {

  return (
    <>
     
        <BrowserRouter>
          <Routes>
              
            <Route path="/" element={<Inicio />}/>
            <Route path="/register" element={<RegistrationForm />}/>
            
            <Route path="/*" element={<Inicio />}/>
              
          </Routes>
        
        
        </BrowserRouter>



    </>



  )
}

export default App