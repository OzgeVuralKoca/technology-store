import './Hero.css'

const Hero = () => {

    return (
        <section id="carouselExampleIndicators" data-bs-ride="carousel" className="carousel slide w-100 mx-auto py-5 px-5">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner bg-dark py-5">
                <div className="carousel-item active py-5 bg-bestseller" data-bs-interval="3000">
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-sm-6 pt-5 ps-5">
                                <h1 className='text-white'>AYIN ÇOK SATAN ÜRÜNLERİ</h1>
                                <a className="btn btn-info fw-semibold rounded px-3">Keşfet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item py-5 bg-save"  data-bs-interval="3000">
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-sm-6 pt-5 ps-5">
                                <h1 className='text-white'>%20 YE VARAN ÇOK ÖZEL İNDİRİMLER</h1>
                                <a className="btn btn-info fw-semibold rounded px-3">Keşfet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item py-5 bg-technology"  data-bs-interval="3000">
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-sm-6 pt-5 ps-5 mx-auto">
                                <h1 className='text-white'>SENİN TEKNOLOJİ MARKETİN!</h1>
                                <a className="btn btn-info fw-semibold rounded px-3">Keşfet</a>
                            </div>
                            <div className='col-sm-6'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}

export default Hero