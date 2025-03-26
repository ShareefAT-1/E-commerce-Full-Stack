import Login from './components/login'
import Register from './components/register'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <div>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Toaster /> */}

    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </div>
  )
}

export default App
