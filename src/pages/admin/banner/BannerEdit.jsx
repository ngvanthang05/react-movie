import React from 'react'
import { useLoaderData } from 'react-router'
import Breadcrumb from '../../../components/BreadCrumb'
import PickImage from '../../../components/PickImage'

const breadCrumb = [
    { label: "Banner", href: "banner" },
    { label: "Edit" }
]

const statuses = [0, 1]


const BannerEdit = () => {
    const dataBanner = useLoaderData()
    const submitAction = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData)
    }
    return (
        <div>
            <div className="mb-6">
                <Breadcrumb isAdmin items={breadCrumb} />
            </div>
            <div className='mb-7'>
                <h3 className='text-xl'>Create New Banner</h3>
            </div>
            <form onSubmit={submitAction} className="w-1/2 mx-auto">

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name" defaultValue={dataBanner.name}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="link" className="block text-sm font-medium mb-2">Link</label>
                    <input id="link" name="link" type="text" placeholder="Link" defaultValue={dataBanner.link}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">Position</label>
                    <input id="position" name="position" type="text" placeholder="Position" defaultValue={dataBanner.position}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="status" className="block text-sm font-medium mb-2">Status</label>
                    <select id="status" name="status" defaultValue={dataBanner.status}
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                <div className='mt-3'>
                    <div className='mb-3'>
                        <span className="block text-sm font-medium">Image</span>
                    </div>
                    <PickImage valueImageSrc={dataBanner.image} />
                </div>

                <button type="submit" className="w-full mt-5 py-2 px-4 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default BannerEdit
