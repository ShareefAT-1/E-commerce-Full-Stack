import Login from './components/login' 
import Register from './components/register' 
import './App.css' 
import { Route, Routes } from 'react-router-dom' 
import { Toaster } from 'react-hot-toast' 
import Upload from './components/Upload' 

function App() {
  return (
   <div>
    {/* <Login/> */} 
    {/* <Register/> */} 
    {/* <Toaster /> */} 
    
    <Toaster position="top-right" />
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/upload' element={<Upload/>}/>
    </Routes> 
   </div>
  )
}

export default App
