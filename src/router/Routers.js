import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import NewBolgs from '../components/NewandBolgs/NewBolgs'
import AllNew from "../components/AllNew/AllNew"
import NewDetails from '../components/NewDetails/NewDetails'
import NewTemplate from '../components/NewTemplate/NewTemplate'
import Whoweare from '../components/WhoWeAre/Whoweare'
import Countacts from '../components/CountactsUs/Countacts'
import GetInvoloed from '../components/GetInvoloed/GetInvoloed'
import Navbar from '../components/Navbar/Navbar'


function Routers() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Navigate to="/new&bolgs"/>} />
            <Route path='/new&bolgs' element={<NewBolgs/>}/>
            <Route path='/allnew' element={<AllNew/>}/>
            <Route path='/newsdetails' element={<NewDetails/>}/>
            <Route path='/newtemplate' element={<NewTemplate/>}/>
            <Route path='/whoweare' element={<Whoweare/>}/>
            <Route path='/conutacts' element={<Countacts/>}/>
            <Route path='/new&bolgs' element={<NewBolgs/>}/>
            <Route path='/getInvoloed' element={<GetInvoloed/>}/>

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Routers