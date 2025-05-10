import Banner from '../../../components/Banner';
import ProductByCategory from '../../../components/ProductByCategory';
import ProductsByTrending from '../../../components/ProductsByTrending';


const Home = () => {

  return (
    <div>
      <Banner />
      <div className='mt-10'>
        <h1 className='uppercase text-xl ml-5 mb-5'>Sản phẩm mới & Khuyến mãi</h1>
        <ProductsByTrending title="Sản phẩm mới" path={'product-new/7'} />
        <ProductsByTrending title="Sản phẩm khuyến mãi" path={'product-sale/7'} />
      </div>
      <div className='mt-10'>
        <h1 className='uppercase text-xl ml-5 mb-5'>Sản phẩm theo doanh mục</h1>
        <ProductByCategory />
      </div>

      {/* {searchData.length > 0 && <MovieSearch data={searchData} />} */}
    </div>
  );
}

export default Home
