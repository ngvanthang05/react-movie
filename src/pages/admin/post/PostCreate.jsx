import React from 'react'
import Breadcrumb from '../../../components/BreadCrumb'
import PickImage from '../../../components/PickImage'
import { create } from '../../../services/apis'

const breadCrumb = [
    { label: "Post", href: "post" },
    { label: "Create" }
]


const PostCreate = () => {
    const submitAction = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const res = await create(" ", formData)

        navigation('/admin/post');
    }
    return (
        <div>
            <div className="mb-6">
                <Breadcrumb isAdmin items={breadCrumb} />
            </div>
            <div className='mb-7'>
                <h3 className='text-xl'>Create New Post</h3>
            </div>
            <form onSubmit={submitAction} className="w-1/2 mx-auto">

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
                    <input id="title" name="title" type="text" placeholder="title"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="detail" className="block text-sm font-medium mb-2">Detail</label>
                    <input id="detail" name="detail" type="text" placeholder="detail"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                    <input id="description" name="description" type="text" placeholder="description"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <div className='mb-3'>
                        <span className="block text-sm font-medium">Image</span>
                    </div>
                    <PickImage />
                </div>

                <button type="submit" className="w-full mt-5 py-2 px-4 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PostCreate
