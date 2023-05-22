import { Link } from "react-router-dom"
import HeaderCartButton from "../UI/HeaderCartButton"


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark position-fixed w-100 py-3" data-bs-theme="dark" style={{ zIndex: "4" }}>
            <div className="container-fluid container px-4">
                <Link onClick={() => window.scrollTo(0, 0)} to='/' className="navbar-brand text-info fs-5 bg-light-subtle fw-semibold px-3 rounded-3 logo" href="#">
                    <span className="text-white">t</span>echnology s<span className="text-white">t</span>ore
                </Link>
                <div className="ms-auto d-flex">
                    {/* <button type="submit" className="btn btn-outline-warning btn-sm ms-auto rounded-5 px-4 py-2 fs-6">
                        Orders
                    </button> */}
                    <HeaderCartButton/>
                </div>
            </div>
        </nav>
    )
}

export default Header