import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Breadcrumb from '../../../components/BreadCrumb'
import PickImage from '../../../components/PickImage'
import { create } from '../../../services/apis'

const breadCrumb = [
    { label: "Brand", href: "brand" },
    { label: "Edit" }
]

const statuses = [
    { id: 0, label: "Không hoạt động" },
    { id: 1, label: "Hoạt động" }
]

const sortOrderName = [
    { id: 0, label: "Việt Nam" },
    { id: 1, label: "Lào" }
]


const BrandEdit = () => {
    const navigation = useNavigate()

    const dataBrand = useLoaderData()
    const submitAction = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const res = create(`brand/${dataBrand.id}`, formData)

        navigation('/admin/brand')

    }
    return (
        <div>
            <div className="mb-6">
                <Breadcrumb isAdmin items={breadCrumb} />
            </div>
            <div className='mb-7'>
                <h3 className='text-xl'>Update Brand</h3>
            </div>
            <form onSubmit={submitAction} className="w-1/2 mx-auto">

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name" defaultValue={dataBrand.name}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                    <input id="description" name="description" type="text" placeholder="Slug" defaultValue={dataBrand.description}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className='mt-3'>
                    <label htmlFor="sort_order" className="block text-sm font-medium mb-2">Sort Order</label>
                    <select id="sort_order" name="sort_order" defaultValue={dataBrand.sort_order}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {sortOrderName.map((sort) => (
                            <option key={sort.id} value={sort.id}>{sort.label}</option>
                        ))}
                    </select>
                </div>

                <div className='mt-3'>
                    <label htmlFor="status" className="block text-sm font-medium mb-2">Status</label>
                    <select id="status" name="status" defaultValue={dataBrand.status}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {statuses.map((status) => (
                            <option key={status.id} value={status.id}>{status.label}</option>
                        ))}
                    </select>
                </div>

                <div className='mt-3'>
                    <div className='mb-3'>
                        <span className="block text-sm font-medium">Image</span>
                    </div>
                    <PickImage valueImageSrc={`/brand/${dataBrand.image}`} />
                </div>

                <button type="submit" className="w-full mt-5 py-2 px-4 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default BrandEdit
