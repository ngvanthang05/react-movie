import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/BreadCrumb'
import PickImage from '../../../components/PickImage'
import { create, get } from '../../../services/apis'
import { useNavigate } from 'react-router'

const breadCrumb = [
    { label: "Product", href: "product" },
    { label: "Create" }
]


const statuses = [
    { id: 0, label: "Không hoạt động" },
    { id: 1, label: "Hoạt động" }
]

const ProductCreate = () => {
    const navigation = useNavigate()
    const [dataCategories, setDataCategories] = useState([])
    const [dataBrands, setDataBrands] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await get("category")
            if (res) {
                setDataCategories(res.categorys)
            }
        }
        const fetchBrands = async () => {
            const res = await get("brand")
            if (res) {
                setDataBrands(res.brands)
            }
        }
        fetchCategories()
        fetchBrands()
    }, [])
    const submitAction = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const thumbnail = formData.get("image")
        formData.set("thumbnail", thumbnail)

        const res = await create("product", formData)
        console.log(res)
        navigation('/admin/product')
    }
    return (
        <div>
            <div className="mb-6">
                <Breadcrumb isAdmin items={breadCrumb} />
            </div>
            <div className='mb-7'>
                <h3 className='text-xl'>Create New Product</h3>
            </div>
            <form onSubmit={submitAction} className="w-1/2 mx-auto">

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" name="name" type="text" placeholder="Name"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='mt-3'>
                    <label htmlFor="category_id" className="block text-sm font-medium mb-2">Category</label>
                    <select id="category_id" name="category_id"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {dataCategories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                {/* Brand ID */}
                <div className='mt-3'>
                    <label htmlFor="brand_id" className="block text-sm font-medium mb-2">Brand</label>
                    <select id="brand_id" name="brand_id"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {dataBrands.map((brand) => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
                    </select>
                </div>

                {/* Price Sale */}
                <div className="mt-3">
                    <label htmlFor="price_sale" className="block text-sm font-medium mb-2">Price Sale</label>
                    <input id="price_sale" name="price_sale" type="number" placeholder="Price Sale"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                {/* Description */}
                <div className="mt-3">
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                    <textarea id="description" name="description" placeholder="Description"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                {/* Qty */}
                <div className="mt-3">
                    <label htmlFor="qty" className="block text-sm font-medium mb-2">Quantity</label>
                    <input id="qty" name="qty" type="number" placeholder="Quantity"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                {/* Detail */}
                <div className="mt-3">
                    <label htmlFor="detail" className="block text-sm font-medium mb-2">Detail</label>
                    <textarea id="detail" name="detail" placeholder="Detail"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                {/* Price Buy */}
                <div className="mt-3">
                    <label htmlFor="price_buy" className="block text-sm font-medium mb-2">Price Buy</label>
                    <input id="price_buy" name="price_buy" type="number" placeholder="Price Buy"
                        className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className='mt-3'>
                    <label htmlFor="status" className="block text-sm font-medium mb-2">Status</label>
                    <select id="status" name="status" 
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
                    <PickImage />
                </div>

                <button type="submit" className="w-full mt-5 py-2 px-4 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ProductCreate
