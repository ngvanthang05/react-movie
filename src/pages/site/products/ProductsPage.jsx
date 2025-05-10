import { useEffect, useState } from "react"
import { NavLink, useLoaderData, useLocation, useSearchParams } from "react-router"
import { get } from "../../../services/apis"

const ProductsPage = () => {
    const dataLoader = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    const [openIndex, setOpenIndex] = useState(null);
    const [dataBrands, setDataBrands] = useState([])
    const [dataCategories, setDataCategories] = useState([])
    const [pagination, setPagination] = useState(1)
    const location = useLocation();

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

    useEffect(() => {
        const lengthData = Math.floor(dataLoader.length / 10) // 8 % 10 = 0 + 1 = 1
        const countPage = lengthData + 1
        setPagination(countPage)
    }, [searchParams])

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const setQueryByBrand = (id) => {
        setSearchParams({ classify: "brand", id })
    }
    const setQueryByCategory = (id) => {
        setSearchParams({ classify: "category", id })
    }
    const handlePagination = (page) => {
        const params = new URLSearchParams(location.search);
        const classify = params.get('classify')
        if (!classify) {
            setSearchParams({ page })
        }
        if (classify && classify === 'category') {
            const id = params.get('id')
            setSearchParams({ classify: "category", id, page })
        }
        if (classify && classify === 'brand') {
            const id = params.get('id')
            setSearchParams({ classify: "brand", id, page })
        }
    }
    return (
        <div className="mb-20">
            <div className="pt-16 mx-10 grid grid-cols-[20%_1fr]">
                <div className="">
                    <div className="border rounded p-4 text-sm font-medium">
                        <div className="text-gray-200 text-xl mb-4 uppercase">

                            Bộ lọc sản phẩm
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <div className="py-2 px-3 rounded-lg bg-gray-500">
                                    <button
                                        onClick={() => toggleDropdown(1)}
                                        className="flex justify-between items-center w-full text-left hover:text-blue-600"
                                    >
                                        Danh mục
                                    </button>

                                </div>
                                <div className={`overflow-hidden mx-3 mt-1 transition-all duration-300 ease-in-out 
                                ${openIndex === 1 ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                                    <ul className="space-y-1">
                                        {dataBrands?.map((brand) => (<li className="py-2 px-3 rounded-lg bg-gray-500">
                                            <button
                                                key={brand.id}
                                                onClick={() => setQueryByBrand(brand.id)}
                                                className="flex justify-between items-center w-full text-left hover:text-blue-600">
                                                {brand.name}
                                            </button>
                                        </li>))}
                                    </ul>

                                </div>
                            </li>
                            <li className="">
                                <div className="py-2 px-3 rounded-lg bg-gray-500">
                                    <button
                                        onClick={() => toggleDropdown(2)}
                                        className="flex justify-between items-center w-full text-left hover:text-blue-600"
                                    >
                                        Thương hiệu
                                    </button>

                                </div>
                                <div className={`overflow-hidden mx-3 mt-1 transition-all duration-300 ease-in-out 
                                ${openIndex === 2 ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                                    <ul className="space-y-1">
                                        {dataCategories?.map((category) => (<li className="py-2 px-3 rounded-lg bg-gray-500">
                                            <button
                                                key={category.id}
                                                onClick={() => setQueryByCategory(category.id)}
                                                className="flex justify-between items-center w-full text-left hover:text-blue-600">
                                                {category.name}
                                            </button>
                                        </li>))}
                                    </ul>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-5">
                    <div className="text-xl uppercase my-4">Sản phẩm</div>
                    <div className="grid grid-cols-4 mb-4">
                        {dataLoader?.map((product) => (

                            <div
                                key={product.id}
                                className="bg-cover bg-no-repeat bg-center w-[250px] h-[300px] relative cursor-pointer"
                                style={{
                                    backgroundImage: `url(${import.meta.env.VITE_ORIGIN_IMAGE}/product/${product.thumbnail})`,
                                }}
                            >
                                <NavLink to={`/product/${product.id}`} className="bg-gray-700 w-full h-full opacity-40 absolute top-0 left-0 z-0">
                                    <div className="relative p-4 flex flex-col items-center justify-end h-full overflow-hidden">
                                        <h4 className="text-md uppercase truncate">
                                            {product.name}
                                        </h4>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <nav className="flex items-center gap-x-1 justify-end" aria-label="Pagination">

                        <div className="flex items-center gap-x-1 bg-gray-600 px-3 py-2">
                            {Array.from({ length: pagination }, (_, i) => (
                                <button type="button" key={i} onClick={() => handlePagination(i + 1)} className="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-300 hover:bg-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">{i + 1}</button>
                            ))}
                        </div>

                    </nav>
                </div>

            </div>
        </div>
    )
}

export default ProductsPage
