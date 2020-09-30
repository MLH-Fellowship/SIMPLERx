import React from "react";

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Forget</h1>
                        <h1>Paper</h1>
                        <br />
                        <h6 className="bold-four">
                            Some Description about our app.
                    </h6>
                        <br />
                        {/* <h6><a className="btn btn-dark start start-two" href="#">Get Started</a></h6> */}
                    </div>
                    <div className="col-sm-9 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Digital</h5>
                                <p class="lead mb-0">Keep all your records at one place.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Data</h5>
                                <p class="lead mb-0">Never lose any piece of data.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Verified</h5>
                                <p class="lead mb-0">End to end service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;