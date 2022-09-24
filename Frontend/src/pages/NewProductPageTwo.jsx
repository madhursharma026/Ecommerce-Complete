import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import BenefitsCard from "./ProductPageComponents/BenefitsCard";
import ReviewAndRating from "./ReviewAndRating/ReviewAndRating";
import { CowGheeincrement } from '../Redux/EcommerceReducer';
import { CowGheedecrement } from '../Redux/EcommerceReducer';
import RelatedProductCard from "./RelatedProductCard/RelatedProductCard";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";

function NewProductPageTwo() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const CowGhee = useSelector(state => state.CowGhee)
    const gettingUserDetails = useSelector(state => state.UserDetail)

    {
        React.useEffect(() => {
            if (gettingUserDetails.length === 0) {
                navigate("/login")
            }
        })
    }

    return (
        <div className="container-xl py-4">
            <div className="row pt-3 pt-3">
                <div className="col-lg-6 px-lg-5">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner text-center">
                            <div class="carousel-item active">
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_1_1_7c8337ba-ebd3-43d4-a270-8230d51b3250_1_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_2_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_3_1962717b-3459-44ed-a696-1bac6ab0ffb9_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/BLACK_TEA_100gm_1634db94-bc2c-472b-bf9e-fe86b8600471_1024x.jpg?v=1653567234" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1024x.jpg?v=1653567234" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 px-3 pt-3">
                    <h3>Pure Desi Cow Ghee</h3>
                    <div className="row py-1">
                        <div className="col">
                            <Link to="/" className="text-success" style={{ fontSize: "14px" }}>Pure Desi Ghee</Link>&nbsp;
                        </div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <span>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>
                                <span className="ms-1">(15)</span>
                            </span>
                        </div>
                    </div>
                    <p className="text-muted pt-2">
                        Pure desi Gir cow bilona ghee  made from desi cow milk using the ancient bilona method
                    </p>
                    <div className="mt-2">
                        <h6 className="m-0">Buying Options</h6>
                        <div className="row pt-3 px-2">
                            <div className="col text-center px-lg-1 d-flex cursor-pointer">
                                <div class="card w-100" style={{ border: "2px solid #009340" }}>
                                    <div class="card-body py-1">
                                        <h6 className="text-success text-center">
                                            500 gm
                                        </h6>
                                        <span>
                                            <del>₹ 900</del> | &nbsp;
                                            <span className="text-success">₹ 650</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center px-lg-1 d-flex cursor-pointer">
                                <div class="card w-100">
                                    <div class="card-body py-1">
                                        <h6 className="text-success text-center">
                                            1 kg
                                        </h6>
                                        <span>
                                            <del>₹ 1600</del> | &nbsp;
                                            <span className="text-success">₹ 1250</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center px-lg-1 d-flex cursor-pointer">
                                <div class="card w-100">
                                    <div class="card-body py-1">
                                        <h6 className="text-success text-center">
                                            5 kg
                                        </h6>
                                        <span>
                                            <del>₹ 7500</del> | &nbsp;
                                            <span className="text-success">₹ 5400</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5" style={{ maxWidth: "600px" }}>
                        <div className="d-flex align-items-center justify-content-start mb-3">
                            <h5 className="fw-bold m-0"> &nbsp;₹ 650</h5>
                            <div className="d-flex align-items-center justify-content-start gap-3 ms-auto">
                                {CowGhee >= 1 ?
                                    <>
                                        <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer" style={{ width: '2rem', height: "2rem", background: 'lightgray' }} onClick={() => dispatch(CowGheedecrement())}>
                                            <i class="fa fa-minus"></i>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer" style={{ width: '2rem', height: "2rem", background: 'lightgray' }}>
                                            <i class="fa fa-minus"></i>
                                        </div>
                                    </>
                                }
                                <input type="text" defaultValue="1" value={CowGhee} className="w-25  rounded border ps-2" />
                                <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer" style={{ width: '2rem', height: "2rem", background: 'lightgray' }} onClick={() => dispatch(CowGheeincrement())}>
                                    <i class="fa fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-3">
                            <div className="col-6 col-xl-4">
                                <button type="button" class="btn btn-success w-100" onClick={() => dispatch(CowGheeincrement())}>Add to Cart</button>
                            </div>
                            <div className="col-6 col-xl-4">
                                <button type="button" class="btn btn-primary w-100" onClick={() => (dispatch(CowGheeincrement()), navigate("/add_to_cart"))}>Buy Now</button>
                            </div>
                            <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer border" style={{ width: '2rem', height: "2rem" }}>
                                <i class="fa fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-xl-5 believe_car_before_md_scrn pt-5">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h2 className="text-center fw-bold">Why Choose Us</h2>
                    <span>Why Ghee Wala’s Desi Cow Ghee </span>
                </div>
                <BelieveCardBeforeMDScrn data={[
                    "It is 100% pure, natural, and unadulterated.",
                    "Directly sourced from the farmers",
                    "Tested in our certified labs",
                    "Made from milk sourced from high-quality A2 Indian native desi cows",
                    "Made using the Bilona method of churning curd",
                    "This product is non-GMO, contains no artificial hormones",
                ]} />
            </div>
            <div>
                <div className="mb-4">
                    <h1 className="text-center pt-5"><b>FRESHNESS JOURNEY</b></h1>
                    <div className=" text-center pb-3">
                        Our Unique $ Transparent procurement process, from <b>leaf to cup</b>
                    </div>
                </div>
                <div className="text-center">
                    <div className="row position-relative">
                        <div className="col-4 col-md-2 position-relative">
                            <div className="d-flex justfy-content-center align-items-center flex-column">
                                <span className="fw-bold">Step 1</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-1.svg?v=12636508475391262561" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Picked & Processed</h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>23rd-24th May'22</b></p>
                                <div className="step-arrow">
                                    <svg clip-rule="evenodd" width='30' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
                                <span className="fw-bold">Step 2</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-2.svg?v=6602855577405003226" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Arrived at Ghee Wala</h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>25th May'22</b></p>
                                <div className="step-arrow">
                                    <svg clip-rule="evenodd" width='30' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
                                <span className="fw-bold">Step 3</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-3.svg?v=12505986752712508259" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Sorted & Cleaned</h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>25th May'22</b></p>
                                <div className="step-arrow">
                                    <svg clip-rule="evenodd" width='30' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
                                <span className="fw-bold">Step 4</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-4.svg?v=4606512964122051706" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Vacuum Packed</h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>25th May'22</b></p>
                                <div className="step-arrow">
                                    <svg clip-rule="evenodd" width='30' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
                                <span className="fw-bold">Step 5</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-5.svg?v=14189309169453830059" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Stored @ -5°c </h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>25th May'22</b></p>
                                <div className="step-arrow">
                                    <svg clip-rule="evenodd" width='30' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2">
                            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
                                <span className="fw-bold">Step 6</span>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-6.svg?v=3201811780339525507" alt="#ImgNotFound" width="100px" height="100px" />
                                <h6 className="sub_para">Ready to Ship</h6>
                                <p className="text-success" style={{ fontSize: "12px" }}><b>26th May'22</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoSection py-5">
                <h1 className="text-center mb-3"><b>Product Video</b></h1>
                <div className="text-center yt-video">
                    <iframe src="https://www.youtube.com/embed/_1ZcIM9O2cI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="text-center my-5">
                <h1 className="text-center fw-bold mb-3">
                    Know Your Ghee
                </h1>
                <p>
                    Desi Ghee is a type of clarified butter that is traditionally used in Indian cooking. It has been around for centuries and is still a popular ingredient in Indian cuisine.It is limited in quantity to maintain best quality and uses Omega 3 fatty acids to add more into your diet. This product is directly sourced from farmers and then tested in our certified labs.
                </p>
                <p>
                    With its unique taste, use this product to add more fibre, vitamins and minerals into your diet. Ghee has many health benefits, such as boosting cholesterol levels and reducing the risk of heart disease, diabetes, and cancer. With ghee being so popular in India, it’s no surprise that Westerners are also trying it out more regularly. But why would you want to use clarified butter instead of regular butter? The answer is simple- not only will ghee be more affordable, but it will also be more nutritious than regular butter since it retains more nutrients when processed.
                </p>
            </div>

            <div className="text-center my-5">
                <h1 className="text-center fw-bold mb-4">
                    Product Specification
                </h1>
                <div className="row">
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-5_green_de520591-ebda-4c3b-b443-34b96341f545.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Season</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>First Flush</p>
                    </div>
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-6_green_1c66ff0d-ebe7-4f93-b6d4-450aa8b79260.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Specialty</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>Chinary</p>
                    </div>
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Caffeine.svg?v=1632222600" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Caffeine</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>Medium</p>
                    </div>
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-2_green_ee57406e-b4a2-40a7-9344-df476ed97acb.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Time Of Day</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>Afternoon</p>
                    </div>
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Tea_Grade_Logo_1.svg?v=1632138898" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Grade</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>FTGFOP1</p>
                    </div>
                    <div className="col-4">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Invoice_Logo_1.svg?v=1632138898" alt="#ImgNotFound" width="50px" height="50px" />
                        <h6 className="sub_para">Invoice </h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>EX-5</p>
                    </div>
                </div>
            </div>
            <div className="text-center my-">
                <h1 className="text-center fw-bold mb-3">
                    Benefits of Pure Buffalo Ghee
                </h1>
                <div className="row px-5 g-4">
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Anti-cancer properties'
                            desription='An acid known as conjugated linoleic acid which is found to fight cancer is available in ghee that comes from grass-fed cows. The acid is also thought to burn fat and decrease its formation. It’s a very important benefit tied with regular consumption of 100% pure ghee.'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Natural moisturizer'
                            desription='Ghee has essential fatty acids that help in hydrating the skin. As a natural moisturizer, it supports healthy and glowing skin in all weathers. Regular consumption of 100% pure ghee and its application on the skin provides anti-aging benefits to the skin and can enhance skin health.'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Improve reproductive health '
                            desription='The healthy fats available in ghee are thought to help the formation of the hormone responsible for fertility. Women of reproductive age are advised to take pure ghee regularly to regulate hormones in their bodies. In men, pure quality ghee can improve sperm quality. '
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Stimulates lactation '
                            desription='Ghee provides a number of benefits for newborn mothers. It rehydrates the body, aids in better digestion, helps in bowel movements, provides essential nourishing, and also helps in the formation of healthy breast milk. As mentioned above, it can prevent excess weight gain. '
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Good for lactose tolerant people '
                            desription='This is yet another important benefit associated with the consumption of 100% natural ghee. Because it is lactose-free, if you are lactose intolerant, you can safely consume ghee. '
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BenefitsCard
                            title='Increases taste of food '
                            desription='Ghee is an excellent taste enhancer. It goes down quite well with nearly all the foods and adds new tastes, making the process of eating food enjoyable. '
                        />
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-center fw-bold mb-3">
                    Certifications
                </h1>
                <div className="row">
                    <div className="row text-center">
                        <div className="col-6">
                            <div className="w-75 mx-auto">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M14.969 13.547l.031.191c0 .193-.096.379-.264.496-.538.372-.467.278-.67.885-.084.253-.33.424-.605.424h-.002c-.664-.002-.549-.038-1.083.338-.112.08-.244.119-.376.119s-.264-.039-.376-.118c-.534-.376-.419-.34-1.083-.338h-.002c-.275 0-.521-.171-.605-.424-.203-.607-.133-.513-.669-.885-.169-.118-.265-.304-.265-.497l.031-.19c.207-.604.208-.488 0-1.094l-.031-.191c0-.193.096-.379.265-.497.536-.372.466-.277.669-.885.084-.253.33-.424.605-.424h.002c.662.002.544.041 1.083-.338.112-.08.244-.119.376-.119s.264.039.376.118c.534.376.419.34 1.083.338h.002c.275 0 .521.171.605.424.203.607.132.513.67.885.168.118.264.304.264.497l-.031.191c-.207.604-.208.488 0 1.094zm-1.469-1.198l-.465-.464-1.41 1.446-.66-.627-.465.464 1.125 1.091 1.875-1.91zm8.5-4.349v14h-20v-14h20zm2-2h-24v18h24v-18zm-5 11h-14v1h14v-1zm0 2h-14v1h14v-1zm-7-19c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm-4.74 5l2.771-1.979c-.206-.267-.36-.574-.446-.91l-4.045 2.889h1.72zm11.2 0l-4.044-2.889c-.086.336-.24.643-.446.91l2.77 1.979h1.72z" /></svg>
                                </div>
                                <div className="mt-4">
                                    <h4>The Experience</h4>
                                    <p>Lorem ipsum dolor sit amet. Id voluptatem facere aut eius quod est atque eligendi. Et sint quia qui enim consectetur et alias odio aut fugiat soluta a illo doloribus est perspiciatis voluptas aut incidunt sapiente. Ea quia perspiciatis et quia nihil ut fugiat modi eos tempora delectus ut repudiandae itaque.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="w-75 mx-auto">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M14.969 13.547l.031.191c0 .193-.096.379-.264.496-.538.372-.467.278-.67.885-.084.253-.33.424-.605.424h-.002c-.664-.002-.549-.038-1.083.338-.112.08-.244.119-.376.119s-.264-.039-.376-.118c-.534-.376-.419-.34-1.083-.338h-.002c-.275 0-.521-.171-.605-.424-.203-.607-.133-.513-.669-.885-.169-.118-.265-.304-.265-.497l.031-.19c.207-.604.208-.488 0-1.094l-.031-.191c0-.193.096-.379.265-.497.536-.372.466-.277.669-.885.084-.253.33-.424.605-.424h.002c.662.002.544.041 1.083-.338.112-.08.244-.119.376-.119s.264.039.376.118c.534.376.419.34 1.083.338h.002c.275 0 .521.171.605.424.203.607.132.513.67.885.168.118.264.304.264.497l-.031.191c-.207.604-.208.488 0 1.094zm-1.469-1.198l-.465-.464-1.41 1.446-.66-.627-.465.464 1.125 1.091 1.875-1.91zm8.5-4.349v14h-20v-14h20zm2-2h-24v18h24v-18zm-5 11h-14v1h14v-1zm0 2h-14v1h14v-1zm-7-19c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm-4.74 5l2.771-1.979c-.206-.267-.36-.574-.446-.91l-4.045 2.889h1.72zm11.2 0l-4.044-2.889c-.086.336-.24.643-.446.91l2.77 1.979h1.72z" /></svg>
                                </div>
                                <div className="mt-4">
                                    <h4>How to Check Ghee Purity</h4>
                                    <p>Lorem ipsum dolor sit amet. Id voluptatem facere aut eius quod est atque eligendi. Et sint quia qui enim consectetur et alias odio aut fugiat soluta a illo doloribus est perspiciatis voluptas aut incidunt sapiente. Ea quia perspiciatis et quia nihil ut fugiat modi eos tempora delectus ut repudiandae itaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className="py-5 px-1 px-lg-3">
                <h1 className="text-center"><b>EXPERIENCE</b></h1>
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 pt-5">
                        <h3 className="">Appearance</h3>
                        <p className="sub_para">
                            Champagne
                        </p>
                        <h3 className="">Taste</h3>
                        <p className="sub_para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi ipsa culpa? Ad modi animi corporis libero, ipsam voluptatem molestiae quas optio repellat iusto in, asperiores quam neque amet suscipit laboriosam odit, quidem quaerat ipsa sapiente eligendi! Maxime repellat amet voluptatem eum excepturi labore exercitationem distinctio quaerat repudiandae, eos quam facilis sunt itaque? Cupiditate minima quo consequuntur asperiores sequi? Consectetur aspernatur beatae odit? Pariatur, quam tempora suscipit rerum consequatur et nesciunt, iusto error ut eligendi excepturi quod, cum neque non velit dolorum eum fuga molestias est laboriosam enim doloremque illum perspiciatis. Dolores tempore accusantium blanditiis sequi, ex natus beatae excepturi.
                        </p>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 text-center">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234" alt="#ImgNotFound" className="w-100" style={{ maxWidth: "500px" }} />
                    </div>
                </div>
                <h1 className="text-center pt-5 pb-3"><b>How to Check Ghee Purity-</b></h1>
                <div className="px-xl-5 mx-xl-5">
                    <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <h1 className="text-center pt-5"><b>How to Check Ghee Purity-</b></h1>
                <h1 className="text-center ">KNOW YOUR TEA</h1>
                <div classsName="text-center">
                    <p className="sub_para">Originally known as Kumseri, the Castleton tea estate was established in 1855. Located in Kurseong, Darjeeling, this estate has 130-year-old chinary bushes. Picked fresh at 4000 feet, this chinary black we have procured is an impressive one! Vegetal, stone-fruity with nutty accents, this Indian Single Estate is a captivating cup of First Flush 2022, fresh from the misty hills!</p>
                </div>
                <h1 className="text-center py-5">Rating and Reviews</h1>
                <div className="row px-5">
                    <div className="col-lg-7">
                        <div className="row px-lg-5">
                            <div className="col-lg-5 text-center">
                                <h1>4.97</h1>
                                <h4><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h4>
                                <h6>40 reviews</h6>
                            </div>
                            <div className="col-lg-7 text-center">
                                <div class="progress mb-2" style={{ height: "15px" }}>
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "25%", background: "#35d57b" }}></div>
                                </div>
                                <div class="progress mb-2" style={{ height: "15px" }}>
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "25%", background: "#35d57b" }}></div>
                                </div>
                                <div class="progress mb-2" style={{ height: "15px" }}>
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "25%", background: "#35d57b" }}></div>
                                </div>
                                <div class="progress mb-2" style={{ height: "15px" }}>
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "25%", background: "#35d57b" }}></div>
                                </div>
                                <div class="progress mb-2" style={{ height: "15px" }}>
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "25%", background: "#35d57b" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 px-lg-5" style={{ textAlign: 'right' }}>
                        <button type="button" class="btn text-light write_a_review_btn" style={{ background: "#51BE66" }}>WRITE A REVIEW</button>
                    </div>
                </div>
                <hr />
                <span class="dropdown px-1 px-lg-3">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black", borderRadius: "0" }}>
                        <span style={{ fontSize: "14px" }}>Sort by Featured</span>
                    </button>
                    <ul class="dropdown-menu ">
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>

                    </ul>
                </span>
                <span class="dropdown px-1 px-lg-3">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black", borderRadius: "0" }}>
                        <span style={{ fontSize: "14px" }}>Rating All</span>
                    </button>
                    <ul class="dropdown-menu ">
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                    </ul>
                </span>
                <span class="dropdown px-1 px-lg-3">
                    <input type="checkbox" />&ensp;
                    With media
                </span>
                <div className="row pt-4">
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                </div>
                <h1 className="text-center pt-5"><b>Related Products</b></h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NewProductPageTwo;
