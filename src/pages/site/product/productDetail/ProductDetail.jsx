import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { get } from "../../../../services/apis";
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const dataProduct = useLoaderData()
  const [moreProduct, setMoreProduct] = useState([])

  useEffect(() => {
    const fetchMoreProduct = async () => {
      try {
        const response = await get(`product-category/${dataProduct.category_id}`)
        if (!response.products) return
        // console.log(response.products)
        const moreProduct = response.products.filter((data) => data.id !== dataProduct.id)
        setMoreProduct(moreProduct)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMoreProduct()
  }, [dataProduct])
  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto  py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100 rounded-3xl p-6 relative">
          <img src={`${import.meta.env.VITE_ORIGIN_IMAGE}/product/${dataProduct.thumbnail}`} alt={dataProduct.name} className="mx-auto" />

        </div>

        <div>
          <h2 className="text-2xl font-medium text-gray-800">{dataProduct.name}</h2>
          <span className="text-gray-200">Sản phẩm còn: </span>
          <span className="text-gray-400">{dataProduct.qty}</span>

          <p className="mt-4 text-sm text-gray-600 ">
            {dataProduct.detail}
          </p>


          <p className="mt-6 text-3xl font-semibold">{new Intl.NumberFormat('vi-VN').format(dataProduct.price_buy)} <span className="text-base text-gray-500">\VNĐ</span></p>

          <button className="mt-4 bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
      <div className="mt-10 mb-4">
        <p className="text-gray-300 text-xl">Mô tả sản phẩm</p>
        <p className="mt-5">{dataProduct.description}</p>

      </div>
      <hr />
      <div className="my-12 md:col-span-2">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Sản phẩm liên quan</h3>

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={2}
          slidesPerView={7}
        >
          {moreProduct?.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_ORIGIN_IMAGE}/product/${product.thumbnail})`,
                }}
              >
                <NavLink to={`/product/${product.id}`} className="bg-gray-700 w-full h-full opacity-40 absolute top-0 left-0 z-0">
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
    </div>
  );
}

export default ProductDetail
