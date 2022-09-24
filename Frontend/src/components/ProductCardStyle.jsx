import { Link } from "react-router-dom";

function ProductCardStyle({
    productImg,
    ratingQty,
    productName,
    productCategory,
    productDescription,
    Attribute,
    OriginalPrice,
    DiscountedPrice,
    number
}) {
    return (
        <>
            <Link to={`/product_page/${number}`} style={{ textDecoration: "none" }}>
                <div className="card w-100 text-center product_card p-4">
                    <div className="text-center">
                        <img src={productImg} className="card-img-top p-lg-5" alt="#ImgNotFound" style={{ maxWidth: "400px", maxHeight: "400px" }} />
                    </div>
                    <div className="card-body px-lg-5">
                        <span className="position-relative">
                            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i className="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>
                            ({ratingQty})
                        </span>
                        <div className="my-4">
                            <h5 className="card-title text-dark">{productName}</h5>
                            <p className="card-text text-dark" style={{ fontSize: "16px" }}>{productDescription}</p>
                        </div>
                        <div className="dropdown-center">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "white", border: "1px solid black" }}>
                                {Attribute[0]} | &nbsp;
                                <del>₹{OriginalPrice[0]}</del> &nbsp;
                                ₹{DiscountedPrice[0]} &nbsp;
                                <b><span className="text-success">Save {`${100 - Math.floor(((DiscountedPrice[0] * 100) / OriginalPrice[0]))}%`}</span></b>
                            </button>
                            <ul className="dropdown-menu  text-center">
                                <li>
                                    <Link className="dropdown-item" to="/">{Attribute[1]} <del className="text-muted">₹{OriginalPrice[1]}</del> ₹{DiscountedPrice[1]} &nbsp;<b><span className="text-success">Save {`${100 - Math.floor((DiscountedPrice[1] * 100) / OriginalPrice[1])}%`}</span></b></Link>
                                    <hr />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">{Attribute[2]} <del className="text-muted">₹{OriginalPrice[2]}</del> ₹{DiscountedPrice[2]} &nbsp;<b><span className="text-success">Save {`${100 - Math.floor(((DiscountedPrice[2] * 100) / OriginalPrice[2]))}%`}</span></b></Link>
                                </li>
                            </ul>
                        </div>
                        {/* <Link to="/" className="btn mt-3 text-white custom-btn" style={{ background: "#02CB5A", border: "0" }}>ADD TO CART</Link> */}
                        <button className="btn mt-3 text-white custom-btn" style={{ background: "#02CB5A", border: "0" }} type="button">ADD TO CART</button>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProductCardStyle;
