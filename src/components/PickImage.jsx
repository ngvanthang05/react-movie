import React, { useEffect, useState } from 'react'
import { FaUpload } from 'react-icons/fa6'

const PickImage = ({ reset, valueImageSrc }) => {
  const [pickedImage, setPickedImage] = useState(null)

  useEffect(() => {
    if (valueImageSrc) {
      const originImage = import.meta.env.VITE_ORIGIN_IMAGE + valueImageSrc
      setPickedImage({ src: originImage, name: valueImageSrc })
    }
    if (reset) {
      setPickedImage(null)
    }
  }, [reset])

  const handleImageUpload = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setPickedImage({ src: imageUrl, name: file.name })
  }
  return (
    <div className='flex'>
      <div className='w-4/12'>
        <div className='relative w-44 h-32 rounded-lg flex items-center justify-center border'>
          {pickedImage &&
            <img
              src={pickedImage.src}
              alt={pickedImage.name}
              className='w-44 h-32 rounded-lg object-fill' />}
          {!pickedImage && <p className="text-sm text-gray-400 mt-1">No image picked yet.</p>}
        </div>
      </div>
      <div>
        <label htmlFor='image' className="flex items-center gap-2 text-sm font-medium py-3 px-2 bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer"><FaUpload />Upload Image</label>
        <input
          type="file"
          accept='image/png, image/jpg, image/jpeg'
          id='image'
          name='image'
          onChange={handleImageUpload}
          className="hidden" />
      </div>
    </div>
  )
}

export default PickImage
