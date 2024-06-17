import './index.css'
import {Contact} from './components/Contact'
import Home from './components/Home'
import Mission from './components/Mission'
import  {Header} from './components/Header'
import History from './components/History'
import Footer from './components/Footer'
import Produto from './components/produto'



import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <div>
    <Header />

     <Routes>

         <Route path="/" element={<Home 
        nomePagina= 'Totoro'
        paginaPrincipal= 'Detalhamento de toda página'/>}/>
           <Route path="/Mission" element={<Mission nomePagina= 'Missão' />} />
           <Route path="/produto" element={<Produto nomePagina= 'Produto'/>} />
           <Route path="/History" element={<History nomePagina= 'História'/>} />
           <Route path="/Contact" element={<Contact nomePagina= 'Contato'/>} />
         </Routes>

         <Footer/>

        </div>
   </>

  )
} 

export default App
