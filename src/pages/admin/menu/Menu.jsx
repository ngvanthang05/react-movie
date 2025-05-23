import React from 'react'
import { FaPen, FaPlus } from 'react-icons/fa6';
import { NavLink, useLoaderData } from 'react-router'
import ButtonDetele from '../../../components/ButtonDetele';

const TABLE_HEAD = ["Name", "Link", "Position", "Status", ""];

const Menu = () => {
  const dataMenu = useLoaderData()
  return (
    <div>
      <div className='mb-7 flex justify-between'>
        <h3 className='text-xl'>Menus</h3>
        <NavLink to={'create'} className='text-xs flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-700 rounded'>
          <FaPlus />
          Add New
        </NavLink>
      </div>
      <div className="h-full w-full overflow-x-auto bg-[#111c44] shadow rounded-lg">
        <table className="w-full min-w-max table-auto text-left border-collapse">
          <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-gray-600 p-4 text-sm font-normal"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataMenu.map(({ id, name, status, position, link }, index) => {

              return (
                <tr key={id} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                  <td className='p-4'>
                    <span className="text-sm font-normal">
                      {name}
                    </span>
                  </td>
                  <td className='p-4'>
                    <span className="text-sm font-normal">
                      {link}
                    </span>
                  </td>
                  <td className='p-4'>
                    <span className="text-sm font-normal">
                      {position}
                    </span>
                  </td>
                  <td className='p-4'>
                    <span className="text-sm font-normal">
                      {status}
                    </span>
                  </td>
                  <td className='p-4'>
                    <div className='flex gap-2'>
                      <NavLink to={`${id}`} className='text-xs p-2 hover:bg-gray-700 rounded'>
                        <FaPen />
                      </NavLink>
                      <ButtonDetele path={`menu/${id}`} label='' />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Menu
