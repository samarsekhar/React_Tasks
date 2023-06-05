import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMouted = true;
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      if (componentMouted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return () => { componentMouted = false }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return (
      <>
        <h1 style={{ color: 'orange' }}>Loading....</h1>
      </>
    )
  }
  const filterProduct = (cat) => {
    const updatedlist = data.filter((x) => x.category === cat)
    setFilter(updatedlist)
  }

  const Showproducts = () => {
    return (
      <>
        <div className='d-flex justify-content-center mb-7 pb-5'>
          <button className='btn btn-outline-dark ms-2' onClick={() => setFilter(data)}>All</button>
          <button className='btn btn-outline-dark ms-2' onClick={() => filterProduct("men's clothing")}>Mens</button>
          <button className='btn btn-outline-dark ms-2' onClick={() => filterProduct("women's clothing")}>Women</button>
          <button className='btn btn-outline-dark ms-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className='btn btn-outline-dark ms-2' onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        <div className='row justify-content-center'>
          {
            filter.map((product) => {
              return (
                <>
                  <div className='col-md-3 mb-4'>
                    <div className="card h-100 text-center p-4" key={product.id}>
                      <img src={product.image} className="card-img-top" alt={product.title} height='200px' />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                        <Link to={`/Products/${product.id}`} className="btn btn-primary">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </>
    )
  }
  return (
    <div>
      <div className='container my-2 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='text-center'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>
    </div>
  )
}

export default Products;