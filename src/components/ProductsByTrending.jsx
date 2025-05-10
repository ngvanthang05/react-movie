import { useEffect, useState } from 'react'
import { get } from '../services/apis';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router';

const ProductsByTrending = ({ title, path }) => {
    const [dataProductList, setDataProductList] = useState([])

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await get(path)
                setDataProductList(response.products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProductList()
    }, [])
    return (
        <div className="mb-10 px-10 max-w-full ">
            <h2 className="text-xl uppercase mb-4">{title}</h2>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={2}
                slidesPerView={7}
            >
                {dataProductList.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div
                            className="bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                            style={{
                                backgroundImage: `url(${import.meta.env.VITE_ORIGIN_IMAGE}/product/${product.thumbnail})`,
                            }}
                        >
                            <NavLink to={`product/${product.id}`} className="bg-gray-700 w-full h-full opacity-40 absolute top-0 left-0 z-0">
                                <div className="relative p-4 flex flex-col items-center justify-end h-full overflow-hidden">
                                    <h4 className="text-md uppercase truncate">
                                        {product.name}
                                    </h4>
                                    <h4>
                                        Giá: {(product.price_buy).toLocaleString('vi-VN')}<sup>đ</sup>
                                    </h4>
                                </div>
                            </NavLink>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductsByTrending
