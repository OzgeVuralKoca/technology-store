import { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { CartContext } from '../Context/CartProvider'

const CartItem = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="d-flex py-3 gap-3 my-auto border-bottom">
            <img src={product.img} width="150" alt="" />
            <h5 className='my-auto'>{product.name}</h5>
            <h5 className="text-info my-auto">{product.price}<span className='ms-1 text-white my-auto'>TL</span></h5>
            <p className='my-auto'>x</p>
            <p className='my-auto'>{product.amount}</p>
            <button
                className="btn btn-sm text-danger my-auto"
                onClick={(e) => {
                    e.preventDefault()
                    removeItem(product.id)
                }}
            >
                <MdDelete size={25} />
            </button>
        </div>
    )
}

export default CartItem