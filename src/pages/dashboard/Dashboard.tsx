
import Header from '../../components/header/Header'
import Saidbar from '../../components/saidbar/Saidbar'


import "./Dashboard.css"
import { useState } from 'react'
import Table from '../../components/table/Table'

function Dashboard() {

  const [sidebarHide , setSidebarHide] = useState(true)


  return (
    <div>
      <div className="navbar">
        <Saidbar sidebarHide={sidebarHide} setSidebarHide={setSidebarHide}/>
        <div className="dashboard">
          <div className="hd"><Header/></div>
          
         <div className="dash"> <Table/></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
