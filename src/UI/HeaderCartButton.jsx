import { useContext } from 'react'
import { SlBasket } from 'react-icons/sl'
import { CartContext } from '../Context/CartProvider'
import { Link } from 'react-router-dom'

const HeaderCartButton = () => {
    const {items} = useContext(CartContext)

    const totalItemsInCart = items.length

    return (
        <Link to='/cart'
          className="btn btn-outline-info btn-sm fw-semibold rounded-3 px-4 py-2"
          type="submit"
        >
            <SlBasket className='' />
            <span className='mx-1'>Sepetim</span>
            <span className="badge text-white rounded-5 bg-danger mt-1">{totalItemsInCart}</span>
        </Link>
    )
}

export default HeaderCartButton