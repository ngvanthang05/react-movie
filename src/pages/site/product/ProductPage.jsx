import { useEffect } from "react"
import { useNavigate } from "react-router"

const ProductPage = () => {
    const navigation = useNavigate()
    useEffect(() => {
        navigation('/products')
    }, [])
    return null
}

export default ProductPage
