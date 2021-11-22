import React,{useState,useEffect} from 'react'
import ProductItem from './ProductItem'
import './index.css'

const Product = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://6166c4d713aa1d00170a66f3.mockapi.io/products')
        .then((data)=> data.json())
        .then((products)=> setProducts(products))
    }, [])

    return (
        <>
            
            <section className="product-section">
                <div className='container'>
                {products.map((item)=>{
                    const {id} = item
                    return <ProductItem key={id} {...item} />
                })}
                </div>
            </section>
        </>
    )
}

export default Product
