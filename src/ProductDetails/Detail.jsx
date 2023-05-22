import { useContext } from 'react';
import { useParams } from "react-router-dom"
import { CartContext } from '../Context/CartProvider';
import products from "../ProductData"
import { MdStarRate } from "react-icons/md"
import { ToastContainer } from 'react-toastify';
import DeliveryDate from './DeliveryDate';

const Detail = () => {
  const { id } = useParams()
  const { addItem } = useContext(CartContext)

  const product = products.find((item) => item.id === parseInt(id))

  const rate = () => {
    if (product.rate === 5) {
      return (<div>
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
      </div>)
    }
    if (product.rate >= 4) {
      return (<div>
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-secondary" />
      </div>)
    }
    if (product.rate >= 3) {
      return (<div>
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
      </div>)
    }
    if (product.rate >= 2) {
      return (<div>
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
      </div>)
    }
    if (product.rate >= 1) {
      return (<div>
        <MdStarRate size={23} className="text-warning" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
      </div>)
    }
    if (product.rate < 1) {
      return (<div>
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
        <MdStarRate size={23} className="text-secondary" />
      </div>)
    }
  }

  return (
    <div className="container py-5">
      <div className="row pt-5">
        <div className="col-lg-7 mb-4">
          <img src={product.img} alt={product.name} className="w-100 object-fit-contain rounded-4" />
        </div>
        <div className="col-lg-5">
          <h2 className="text-white">{product.name}</h2>
          <div className="text-white d-flex" >
            {rate()} <p className="ms-2 fs-5">{product.rate}</p>
          </div>
          <br />
          <h3 className="text-info" >$ {product.price}</h3>
          <p className="text-white fs-5">Kalan Stok: {product.stock}</p>
          <p className="text-white-50">#{product.category} #{product.category2}</p>
          <br />
          <button
            className="btn btn-info w-100 fw-semibold"
            onClick={() => addItem(product)}
          >
            Sepete Ekle
          </button>
          <div className='text-white mt-3 border rounded-3 px-3 pt-3'>
            <DeliveryDate/>
          </div>
        </div>
      </div>
      <div className="text-light mt-3">
        <h5>Ürün Açıklaması:</h5>
        <p>{product.description}</p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Detail