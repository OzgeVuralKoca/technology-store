import ReactDOM from "react-dom"

const Backdrop = ({ onCloseCart }) => {
    return <div
        className="vw-100 vh-100 position-fixed"
        style={{ backgroundColor: "#11111150", zIndex: "10" }}
        onClick={onCloseCart}
    />
}

const OffcanvasOverlay = (props) => {
    return (
        <div
            className="offcanvas offcanvas-end show text-bg-dark"
            tabIndex="-1"
            id="offcanvasDark"
            aria-labelledby="offcanvasDarkLabel"
        >
            {props.children}
        </div>
    )
}

const Offcanvas = (props) => {
    const { children, onCloseCart } = props

    const portalElement = document.getElementById('overlays')

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onCloseCart={onCloseCart} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <OffcanvasOverlay>{children}</OffcanvasOverlay>,
                portalElement
            )}
        </>
    )
}

export default Offcanvas