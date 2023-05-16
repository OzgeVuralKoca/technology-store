import { useContext } from 'react';
import { useParams } from "react-router-dom"
import { CartContext } from '../Context/CartProvider';
import products from "../ProductData"
import { MdStarRate, MdLocalShipping } from "react-icons/md"
import { ToastContainer } from 'react-toastify';

const Detail = () => {
  const { id } = useParams()
  const { addItem } = useContext(CartContext)

  const product = products.find((item) => item.id === parseInt(id))

  const today = new Date();
  let month = today.getMonth();
  const day = today.getDate();

  let nowMonth = ''

  if (month === 1) {
    nowMonth = 'Ocak'
  } else if (month === 2) {
    nowMonth = 'Şubat'
  } else if (month === 3) {
    nowMonth = 'Mart'
  } else if (month === 4) {
    nowMonth = 'Nisan'
  } else if (month === 5) {
    nowMonth = 'Mayıs'
  } else if (month === 6) {
    nowMonth = 'Haziran'
  } else if (month === 7) {
    nowMonth = 'Temmuz'
  } else if (month === 8) {
    nowMonth = 'Ağustos'
  } else if (month === 9) {
    nowMonth = 'Eylül'
  } else if (month === 10) {
    nowMonth = 'Ekim'
  } else if (month === 11) {
    nowMonth = 'Kasım'
  } else if (month === 12) {
    nowMonth = 'Aralık'
  }

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
            <h6><MdLocalShipping size={25} className='me-1' /> Tahmini Teslimat: {day + 3} - {day + 5} {nowMonth}</h6>
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