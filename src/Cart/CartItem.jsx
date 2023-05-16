import { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { CartContext } from '../Context/CartProvider'

const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="d-flex justify-content-between border-bottom pb-3">
            <div className='me-3'>
                <img src={product.img} width="80" alt="" />
            </div>
            <div className="d-flex gap-2">
                <div className="d-flex flex-column justify-content-between">
                    <h6 >{product.name}</h6>
                    <div className="ms-auto">
                        <span className="text-info">{product.price} ₺</span>
                        <span> x {product.amount}</span>
                    </div>
                </div>
                <button
                    className="btn btn-sm text-danger"
                    onClick={(e) => {
                        e.preventDefault()
                        removeItem(product.id)
                    }}
                >
                    <MdDelete size={20} />
                </button>
            </div>
        </div>
    )
}

export default CartItem