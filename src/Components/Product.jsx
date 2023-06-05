import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Product = () => {
  const { addItem } = useCart()
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  }, [])

  const Loading = () => {
    return (
      <>
        Loading.....
      </>
    )
  }

  const Showproduct = () => {
    return (
      <>
        <div className='col-md-4'>
          <img src={product.image} alt={product.title} height='350px' weight='350px' />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{product.category}</h4>
          <h1 className='display-5'>{product.title}</h1>
          <span className='lead fw-bolder'>Ratting : {product.rating && product.rating.rate}</span>
          <i className='fa fa-star'></i>
          <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
          <p className='lead'>{product.description}</p>

          <Link to='/Cart' className='btn btn-dark ms-2 px-3 py-2' onClick={() => addItem(product)}>Add to cart</Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container py-5'>
        <div className='row py-4'>
          {loading ? <Loading /> : <Showproduct />}
        </div>
      </div>
    </>
  )
}

export default Product;