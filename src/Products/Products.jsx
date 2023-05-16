import { RiSearchLine } from 'react-icons/ri'
import { useState } from 'react'
import Hero from "../Hero/Hero"
import products from "../ProductData"
import ProductItem from "./ProductItem"

const Products = () => {
    const [search, setSearch] = useState('')

    return (
        <>
            <Hero />
            <main className="container my-3">
                <div className='col-md-6 ms-3'>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-dark" id="basic-addon1">
                            <RiSearchLine size={20} className='text-info' />
                        </span>
                        <input
                          type="text"
                          className="form-control bg-dark search-input"
                          placeholder="Hangi ürünü arıyorsunuz?"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {products.filter((item) => {
                        return search.toLowerCase() === ''
                            ? item
                            : item.name.toLowerCase().includes(search) || 
                                item.description.toLowerCase().includes(search) ||
                                item.category.toLowerCase().includes(search) ||
                                item.category2.toLowerCase().includes(search)
                    }).map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Products