import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/AdminDashComponent/sidebar'

export default function AdminDashboardlayout() {
  return (
    <div>
        <Sidebar/>
        
      <div>
        <main>
            <Outlet/>
        </main>
      </div>
    </div>
  )
}
