import { Link } from 'react-router-dom';
import fbIcon from '../content/images/fbIcon.png'
import instaIcon from '../content/images/instaIcon.png'
import twiterIcon from '../content/images/twiterIcon.png'
import headerLogo from '../content/images/logo.png'

export default function Footer() {
    return (
        <>
            <hr />
            <div className="container-xl p-3">
                <div className="row">
                    <div style={{ width: '150px' }}>
                        <img src={headerLogo} alt='logo' className='w-100' />
                    </div>
                    <p className='texts text-dark-gray my-4 max-w-310'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ab nesciunt illum dicta quo quasi, laboriosam fugiat voluptatum repudiandae debitis sint inventore nam dolore reprehenderit totam ducimus cum accusantium rerum.</p>
                </div>
                <div className="row pt-md-5">
                    <div className='option_after_md_scrn my-4'>
                        <h5 className=''>Take an <span className='text-success'>extra 10%</span> off your order</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Your Email" aria-describedby="button-addon2" />
                            <button class="btn btn-success" type="button" id="button-addon2">Get Promo</button>
                        </div>
                        <p style={{ fontSize: "10px" }}>We'll also send you delicious recipes, product updates, and more.</p>
                    </div>

                    <div className="col-6 col-md-4 col-md col-lg pb-5 footer-links">
                        <h5 className='mb-3'>Region</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Contact Us</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Map</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Form</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Contact Details</Link><br />
                    </div>
                    <div className="col-6 col-md-4 col-md col-lg pb-5 footer-links">
                        <h5 className='mb-3'>Type</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Privacy Policy</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Terms and Service</Link><br />
                    </div>
                    <div className="col-4 col-lg pb-5">
                        <h5>Follow us</h5>
                        <div className="d-flex gap-2">
                            <a href='/' className="pe-auto">
                                <img src={fbIcon} alt="#ImgNotFound" className='img-fluid' />
                            </a>
                            <a href='/' className="pe-auto">
                                <img src={instaIcon} alt="#ImgNotFound" className='img-fluid' />
                            </a>
                            <a href='/' className="pe-auto">
                                <img src={twiterIcon} alt="#ImgNotFound" className='img-fluid' />
                            </a>
                        </div>
                        <div className="option_before_md_scrn">
                            <h5 className='pt-3'>Take an <span className='text-success'>extra 10%</span> off your order</h5>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Your Email" aria-describedby="button-addon2" />
                                <button class="btn btn-success" type="button" id="button-addon2">Get Promo</button>
                            </div>
                            <p style={{ fontSize: "10px" }}>We'll also send you delicious recipes, product updates, and more.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}