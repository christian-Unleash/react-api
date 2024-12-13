import './App.css'
import {Routes, Route} from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { Layout } from './Layout'
import { LoginPage } from './pages/LoginPage'
import { IndexPage } from './pages/IndexPage'
import axios from 'axios'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App
