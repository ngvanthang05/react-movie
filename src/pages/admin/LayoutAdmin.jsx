import React from 'react'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
  return (
    <div>
      Đây là admin
      <Outlet />
    </div>
  )
}

export default LayoutAdmin
