import React, { useEffect, useState } from 'react'

const BannerList = () => {
  const [dataBanner, setDataBanner] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      return await fetch("http://thayloi.edu.vn/laravel/api/banner").then(res => res.json()).then(data => setDataBanner(data.banners))
    }
    fetchData()
  },[])
  console.log(dataBanner)
  return (
    <div>
      {dataBanner && dataBanner.map(banner => (<div>
        <p>name: {banner.name}</p>
      </div>))}
    </div>
  )
}

export default BannerList
