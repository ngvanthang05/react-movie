import React from 'react'
import { NavLink, Outlet } from 'react-router'
import SideBar from '../../components/SideBar'

import './index.css'
import { FaEye } from 'react-icons/fa6'

const LayoutAdmin = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto">
      <div className="relative">
        <aside className="fixed w-[260px]">
          <SideBar />
        </aside>
        <main className="ml-[260px]">
          <header className="flex items-center justify-end h-16 bg-gray-700">
            <div className="mx-2">
              <NavLink to={'/'} className="py-2 px-4 bg-blue-900 flex items-center gap-2 rounded text-xs hover:bg-blue-800"><FaEye />HomePage</NavLink>
            </div>
          </header>
          <section className="m-9">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin
