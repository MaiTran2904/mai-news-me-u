import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer-area">
          <div className="footer-widget pt-80 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-8">
                  <div className="footer-logo mt-50">
                    <a href="#">
                      <img src="assets/images/logo.png" alt="Logo" />
                    </a>
                    <ul className="footer-info">
                      <li>
                        <div className="single-info">
                          <div className="info-content">
                            <p>+84 236 3888 503</p>
                          </div>
                        </div> {/* single info */}
                      </li>
                      <li>
                        <div className="single-info">
                          <div className="info-content">
                            <p> info.vietnam@passerellesnumeriques.org</p>
                          </div>
                        </div> {/* single info */}
                      </li>
                      <li>
                        <div className="single-info">
                          <div className="info-content">
                            <p>4th floor, building B,
99 To Hien Thanh,
Da Nang VIETNAM</p>
                          </div>
                        </div> {/* single info */}
                      </li>
                    </ul>
                    <ul className="footer-social mt-20">
                      <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                      <li><a href="#"><i className="lni-twitter-original" /></a></li>
                      <li><a href="#"><i className="lni-google" /></a></li>
                      <li><a href="#"><i className="lni-instagram" /></a></li>
                    </ul>
                  </div> {/* footer logo */}
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-link mt-45">
                    <div className="f-title">
                      <h4 className="title">C??c trung t??m kh??c</h4>
                    </div>
                    <ul className="mt-15">
                      <li><a href="#">Campuchia</a></li>
                      <li><a href="#">Philippines</a></li>
                      <li><a href="#">Qu???c t???</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-8">
                  <div className="footer-newsleter mt-45">
                    <div className="f-title">
                      <h4 className="title">????ng k?? nh???n th??ng tin h???ng ng??y</h4>
                    </div>
                    <p className="mt-15">Sau khi ????ng k?? v???i ?????a ch??? email n??y, ch??ng t??i s??? h???ng ng??y g???i cho b???n c??c tin t???c m???i nh???t c???a ch??ng t??i.</p>
                    <form action="#">
                      <div className="newsleter mt-20">
                        <input type="email" placeholder="Nh???p ?????a ch??? email" />
                        <button><i className="lni-angle-double-right" /></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* container */}
          </div> {/* footer widget */}
        </footer>   
        );
    }
}

export default Footer;