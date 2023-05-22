import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../Context/CartProvider"
import './Cart.css'
import DeliveryDate from "../ProductDetails/DeliveryDate"
import { Link } from "react-router-dom"
import products from '../images/techproducts.jpg'

const Cart = () => {
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
        <div className="cart-head container text-white">
            <div className="d-flex">
                <h4 className="text-info mb-3">
                    Sepetim
                </h4>
                <span className="text-white-50 mt-1 ms-3">
                    ({items.length} Ürün)
                </span>
            </div>
            <div className="row">
                {
                    hasItems ?
                        (
                            <>
                                <div className="col-md-8">
                                    {cartItems}
                                </div>
                                <div className="col-md-4">
                                    <div className="border p-3">
                                        <h5 className="mb-4">Sipariş Özeti</h5>
                                        <div className="d-flex justify-content-between mb-3 border-bottom">
                                            <p>Toplam Tutar:</p>
                                            <p>{totalAmount.toFixed(2)} ₺</p>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <DeliveryDate />
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
                                </div>
                            </>
                        ) : (
                            <div className="text-white text-center">
                            <img src={products} className="mt-5" width="150px" alt="technologyproducts" />
                            <h5 className="my-3">Alışveriş Sepetin Boş</h5>
                            <Link onClick={() => window.scrollTo(0, 0)} to='/' className="text-decoration-none btn btn-info">Alışverişe Başla</Link>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Cart