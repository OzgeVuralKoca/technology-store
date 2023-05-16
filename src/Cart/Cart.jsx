import { useContext } from "react"
import Offcanvas from "../UI/Offcanvas"
import CartItem from "./CartItem"
import { CartContext } from "../Context/CartProvider"

const Cart = ({ onCloseCart }) => {
    const { items, totalAmount, clearItem } = useContext(CartContext)
    const hasItems = items.length > 0

    const cartItems = (
        <div className="mb-3">
            {
                items.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))
            }
        </div>
    )

    return (
        <Offcanvas onCloseCart={onCloseCart} >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-info" id="offcanvasDarkLabel">
                    Sepetim
                </h5>
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvasDark"
                    aria-label="Close"
                    onClick={onCloseCart}
                >
                </button>
            </div>
            <div className="offcanvas-body">
                {
                    hasItems ? cartItems : <div className="text-white-50 mb-3">Alışveriş Sepetiniz Boş!</div>
                }

                <div className="d-flex justify-content-between mb-3">
                    <h6>Toplam Tutar:</h6>
                    <h6>{totalAmount.toFixed(2)} ₺</h6>
                </div>
                <div className="d-flex justify-content-between gap-3">
                    <button
                        type="button"
                        className="btn btn-info rounded-3 w-50"
                        disabled={!hasItems}
                    >
                        Satın Al
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger rounded-3 w-50"
                        disabled={!hasItems}
                        onClick={clearItem}
                    >
                        Temizle
                    </button>
                </div>

            </div>
        </Offcanvas>
    )
}

export default Cart