import React, { Component } from 'react';
import $ from "jquery";
import './style.css';
import { Link } from 'react-router-dom';
import Donation_name from '../components/Name-Staff-Donation/donation-name';
import Donation_text from '../components/Content/donation-text';
// import Button_donation from '../components/Button-pnv/button-donation';
import Content from '../components/Description/description';
import Image_component from '../components/Image-component/image_component';
import Footer from '../Footer/Footer';
import Loading from '../Header/Loading';
import AboutUs from '../Content/AboutUs';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Map from '../Footer/Map';


class Donate extends Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            day = today.getMonth() + 1;
        this.state = {
            value: '',
            otherValue: "",
            valueMonth: '',
            total: "",
            orther: "",
            date: date,
            today: day
        };
    }

    onChange = (e) => {
        const newVal = parseInt(e.target.value);
        let other = parseInt(newVal - 10);
        let total = newVal + other;
        this.setState({ value: newVal, orther: other, total: total });
        console.log(e.target.value);
    }
    onHandelChange = (e) => {
        const newVal = parseInt(e.target.value);
        this.setState({ valueMonth: newVal });
    }
    onChangeOtherAmount = (e) => {
        this.setState({ otherValue: e.target.value });
    }
    postDonation = () => {

    }
    render() {
        var countries = [
            { "text": "Afghanistan", "value": "AF" },
            { "text": "Åland Islands", "value": "AX" },
            { "text": "Albania", "value": "AL" },
            { "text": "Algeria", "value": "DZ" },
            { "text": "American Samoa", "value": "AS" },
            { "text": "Andorra", "value": "AD" },
            { "text": "Angola", "value": "AO" },
            { "text": "Anguilla", "value": "AI" },
            { "text": "Antarctica", "value": "AQ" },
            { "text": "Antigua and Barbuda", "value": "AG" },
            { "text": "Argentina", "value": "AR" },
            { "text": "Armenia", "value": "AM" },
            { "text": "Aruba", "value": "AW" },
            { "text": "Australia", "value": "AU" },
            { "text": "Austria", "value": "AT" },
            { "text": "Azerbaijan", "value": "AZ" },
            { "text": "Bahamas", "value": "BS" },
            { "text": "Bahrain", "value": "BH" },
            { "text": "Bangladesh", "value": "BD" },
            { "text": "Barbados", "value": "BB" },
            { "text": "Belarus", "value": "BY" },
            { "text": "Belgium", "value": "BE" },
            { "text": "Belize", "value": "BZ" },
            { "text": "Benin", "value": "BJ" },
            { "text": "Bermuda", "value": "BM" },
            { "text": "Bhutan", "value": "BT" },
            { "text": "Bolivia", "value": "BO" },
            { "text": "Bosnia and Herzegovina", "value": "BA" },
            { "text": "Botswana", "value": "BW" },
            { "text": "Bouvet Island", "value": "BV" },
            { "text": "Brazil", "value": "BR" },
            { "text": "British Indian Ocean Territory", "value": "IO" },
            { "text": "Brunei Darussalam", "value": "BN" },
            { "text": "Bulgaria", "value": "BG" },
            { "text": "Burkina Faso", "value": "BF" },
            { "text": "Burundi", "value": "BI" },
            { "text": "Cambodia", "value": "KH" },
            { "text": "Cameroon", "value": "CM" },
            { "text": "Canada", "value": "CA" },
            { "text": "Cape Verde", "value": "CV" },
            { "text": "Cayman Islands", "value": "KY" },
            { "text": "Central African Republic", "value": "CF" },
            { "text": "Chad", "value": "TD" },
            { "text": "Chile", "value": "CL" },
            { "text": "China", "value": "CN" },
            { "text": "Christmas Island", "value": "CX" },
            { "text": "Cocos (Keeling) Islands", "value": "CC" },
            { "text": "Colombia", "value": "CO" },
            { "text": "Comoros", "value": "KM" },
            { "text": "Congo", "value": "CG" },
            { "text": "Congo, The Democratic Republic of the", "value": "CD" },
            { "text": "Cook Islands", "value": "CK" },
            { "text": "Costa Rica", "value": "CR" },
            { "text": "Cote D'Ivoire", "value": "CI" },
            { "text": "Croatia", "value": "HR" },
            { "text": "Cuba", "value": "CU" },
            { "text": "Cyprus", "value": "CY" },
            { "text": "Czech Republic", "value": "CZ" },
            { "text": "Denmark", "value": "DK" },
            { "text": "Djibouti", "value": "DJ" },
            { "text": "Dominica", "value": "DM" },
            { "text": "Dominican Republic", "value": "DO" },
            { "text": "Ecuador", "value": "EC" },
            { "text": "Egypt", "value": "EG" },
            { "text": "El Salvador", "value": "SV" },
            { "text": "Equatorial Guinea", "value": "GQ" },
            { "text": "Eritrea", "value": "ER" },
            { "text": "Estonia", "value": "EE" },
            { "text": "Ethiopia", "value": "ET" },
            { "text": "Falkland Islands (Malvinas)", "value": "FK" },
            { "text": "Faroe Islands", "value": "FO" },
            { "text": "Fiji", "value": "FJ" },
            { "text": "Finland", "value": "FI" },
            { "text": "France", "value": "FR" },
            { "text": "French Guiana", "value": "GF" },
            { "text": "French Polynesia", "value": "PF" },
            { "text": "French Southern Territories", "value": "TF" },
            { "text": "Gabon", "value": "GA" },
            { "text": "Gambia", "value": "GM" },
            { "text": "Georgia", "value": "GE" },
            { "text": "Germany", "value": "DE" },
            { "text": "Ghana", "value": "GH" },
            { "text": "Gibraltar", "value": "GI" },
            { "text": "Greece", "value": "GR" },
            { "text": "Greenland", "value": "GL" },
            { "text": "Grenada", "value": "GD" },
            { "text": "Guadeloupe", "value": "GP" },
            { "text": "Guam", "value": "GU" },
            { "text": "Guatemala", "value": "GT" },
            { "text": "Guernsey", "value": "GG" },
            { "text": "Guinea", "value": "GN" },
            { "text": "Guinea-Bissau", "value": "GW" },
            { "text": "Guyana", "value": "GY" },
            { "text": "Haiti", "value": "HT" },
            { "text": "Heard Island and Mcdonald Islands", "value": "HM" },
            { "text": "Holy See (Vatican City State)", "value": "VA" },
            { "text": "Honduras", "value": "HN" },
            { "text": "Hong Kong", "value": "HK" },
            { "text": "Hungary", "value": "HU" },
            { "text": "Iceland", "value": "IS" },
            { "text": "India", "value": "IN" },
            { "text": "Indonesia", "value": "ID" },
            { "text": "Iran, Islamic Republic Of", "value": "IR" },
            { "text": "Iraq", "value": "IQ" },
            { "text": "Ireland", "value": "IE" },
            { "text": "Isle of Man", "value": "IM" },
            { "text": "Israel", "value": "IL" },
            { "text": "Italy", "value": "IT" },
            { "text": "Jamaica", "value": "JM" },
            { "text": "Japan", "value": "JP" },
            { "text": "Jersey", "value": "JE" },
            { "text": "Jordan", "value": "JO" },
            { "text": "Kazakhstan", "value": "KZ" },
            { "text": "Kenya", "value": "KE" },
            { "text": "Kiribati", "value": "KI" },
            { "text": "Korea, Democratic People'S Republic of", "value": "KP" },
            { "text": "Korea, Republic of", "value": "KR" },
            { "text": "Kuwait", "value": "KW" },
            { "text": "Kyrgyzstan", "value": "KG" },
            { "text": "Lao People'S Democratic Republic", "value": "LA" },
            { "text": "Latvia", "value": "LV" },
            { "text": "Lebanon", "value": "LB" },
            { "text": "Lesotho", "value": "LS" },
            { "text": "Liberia", "value": "LR" },
            { "text": "Libyan Arab Jamahiriya", "value": "LY" },
            { "text": "Liechtenstein", "value": "LI" },
            { "text": "Lithuania", "value": "LT" },
            { "text": "Luxembourg", "value": "LU" },
            { "text": "Macao", "value": "MO" },
            { "text": "Macedonia, The Former Yugoslav Republic of", "value": "MK" },
            { "text": "Madagascar", "value": "MG" },
            { "text": "Malawi", "value": "MW" },
            { "text": "Malaysia", "value": "MY" },
            { "text": "Maldives", "value": "MV" },
            { "text": "Mali", "value": "ML" },
            { "text": "Malta", "value": "MT" },
            { "text": "Marshall Islands", "value": "MH" },
            { "text": "Martinique", "value": "MQ" },
            { "text": "Mauritania", "value": "MR" },
            { "text": "Mauritius", "value": "MU" },
            { "text": "Mayotte", "value": "YT" },
            { "text": "Mexico", "value": "MX" },
            { "text": "Micronesia, Federated States of", "value": "FM" },
            { "text": "Moldova, Republic of", "value": "MD" },
            { "text": "Monaco", "value": "MC" },
            { "text": "Mongolia", "value": "MN" },
            { "text": "Montserrat", "value": "MS" },
            { "text": "Morocco", "value": "MA" },
            { "text": "Mozambique", "value": "MZ" },
            { "text": "Myanmar", "value": "MM" },
            { "text": "Namibia", "value": "NA" },
            { "text": "Nauru", "value": "NR" },
            { "text": "Nepal", "value": "NP" },
            { "text": "Netherlands", "value": "NL" },
            { "text": "Netherlands Antilles", "value": "AN" },
            { "text": "New Caledonia", "value": "NC" },
            { "text": "New Zealand", "value": "NZ" },
            { "text": "Nicaragua", "value": "NI" },
            { "text": "Niger", "value": "NE" },
            { "text": "Nigeria", "value": "NG" },
            { "text": "Niue", "value": "NU" },
            { "text": "Norfolk Island", "value": "NF" },
            { "text": "Northern Mariana Islands", "value": "MP" },
            { "text": "Norway", "value": "NO" },
            { "text": "Oman", "value": "OM" },
            { "text": "Pakistan", "value": "PK" },
            { "text": "Palau", "value": "PW" },
            { "text": "Palestinian Territory, Occupied", "value": "PS" },
            { "text": "Panama", "value": "PA" },
            { "text": "Papua New Guinea", "value": "PG" },
            { "text": "Paraguay", "value": "PY" },
            { "text": "Peru", "value": "PE" },
            { "text": "Philippines", "value": "PH" },
            { "text": "Pitcairn", "value": "PN" },
            { "text": "Poland", "value": "PL" },
            { "text": "Portugal", "value": "PT" },
            { "text": "Puerto Rico", "value": "PR" },
            { "text": "Qatar", "value": "QA" },
            { "text": "Reunion", "value": "RE" },
            { "text": "Romania", "value": "RO" },
            { "text": "Russian Federation", "value": "RU" },
            { "text": "RWANDA", "value": "RW" },
            { "text": "Saint Helena", "value": "SH" },
            { "text": "Saint Kitts and Nevis", "value": "KN" },
            { "text": "Saint Lucia", "value": "LC" },
            { "text": "Saint Pierre and Miquelon", "value": "PM" },
            { "text": "Saint Vincent and the Grenadines", "value": "VC" },
            { "text": "Samoa", "value": "WS" },
            { "text": "San Marino", "value": "SM" },
            { "text": "Sao Tome and Principe", "value": "ST" },
            { "text": "Saudi Arabia", "value": "SA" },
            { "text": "Senegal", "value": "SN" },
            { "text": "Serbia and Montenegro", "value": "CS" },
            { "text": "Seychelles", "value": "SC" },
            { "text": "Sierra Leone", "value": "SL" },
            { "text": "Singapore", "value": "SG" },
            { "text": "Slovakia", "value": "SK" },
            { "text": "Slovenia", "value": "SI" },
            { "text": "Solomon Islands", "value": "SB" },
            { "text": "Somalia", "value": "SO" },
            { "text": "South Africa", "value": "ZA" },
            { "text": "South Georgia and the South Sandwich Islands", "value": "GS" },
            { "text": "Spain", "value": "ES" },
            { "text": "Sri Lanka", "value": "LK" },
            { "text": "Sudan", "value": "SD" },
            { "text": "Suriname", "value": "SR" },
            { "text": "Svalbard and Jan Mayen", "value": "SJ" },
            { "text": "Swaziland", "value": "SZ" },
            { "text": "Sweden", "value": "SE" },
            { "text": "Switzerland", "value": "CH" },
            { "text": "Syrian Arab Republic", "value": "SY" },
            { "text": "Taiwan, Province of China", "value": "TW" },
            { "text": "Tajikistan", "value": "TJ" },
            { "text": "Tanzania, United Republic of", "value": "TZ" },
            { "text": "Thailand", "value": "TH" },
            { "text": "Timor-Leste", "value": "TL" },
            { "text": "Togo", "value": "TG" },
            { "text": "Tokelau", "value": "TK" },
            { "text": "Tonga", "value": "TO" },
            { "text": "Trinidad and Tobago", "value": "TT" },
            { "text": "Tunisia", "value": "TN" },
            { "text": "Turkey", "value": "TR" },
            { "text": "Turkmenistan", "value": "TM" },
            { "text": "Turks and Caicos Islands", "value": "TC" },
            { "text": "Tuvalu", "value": "TV" },
            { "text": "Uganda", "value": "UG" },
            { "text": "Ukraine", "value": "UA" },
            { "text": "United Arab Emirates", "value": "AE" },
            { "text": "United Kingdom", "value": "GB" },
            { "text": "United States", "value": "US" },
            { "text": "United States Minor Outlying Islands", "value": "UM" },
            { "text": "Uruguay", "value": "UY" },
            { "text": "Uzbekistan", "value": "UZ" },
            { "text": "Vanuatu", "value": "VU" },
            { "text": "Venezuela", "value": "VE" },
            { "text": "Viet Nam", "value": "VN" },
            { "text": "Virgin Islands, British", "value": "VG" },
            { "text": "Virgin Islands, U.S.", "value": "VI" },
            { "text": "Wallis and Futuna", "value": "WF" },
            { "text": "Western Sahara", "value": "EH" },
            { "text": "Yemen", "value": "YE" },
            { "text": "Zambia", "value": "ZM" },
            { "text": "Zimbabwe", "value": "ZW" }
        ];
        return (

            <div>
                <Loading />
                <div className="navigation-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="#">
                                        <img src="assets/images/logo.png" alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <a className="page-scroll" href="#home">Trang chú</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#about">Thông tin</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#service">Giá trị</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#project">Thành tựu</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#team">Hội đồng</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#contact">Liên hệ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#news">Tin tức</a>
                                            </li>
                                        </ul> {/* navbar nav */}
                                    </div>
                                    <div className="navbar-btn ml-20 d-none d-sm-block">
                                        <a className="main-btn" href="#"><i className="lni-phone" />DONATE</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Header></Header>
                <AboutUs></AboutUs>
                <div className="donation wow fadeInUp" data-wow-delay="0.1s" id="review">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/olcVx8xnwWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">Share about student</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/huou.jpg" alt="video of student PNV22" data-toggle="modal" data-target="#modal1" /></a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="modal fade" id="modal6" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NDHBdV3QUCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">About PNV</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/pnv.jpg" alt="video" data-toggle="modal" data-target="#modal6" /></a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="modal fade" id="modal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tZPy-PjL_3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <span className="mr-4">Alumni class 17-20</span>
                                            <a type="button" className="btn-floating btn-sm btn-fb"><i className="lni-facebook-filled" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-tw"><i className="lni-twitter-original" /></a>
                                            <a type="button" className="btn-floating btn-sm btn-ins"><i className="lni-linkedin-original" /></a>
                                            <button type="button" className="btn btn-footer btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a><img className="img-fluid z-depth-1" src="images/alumMs.Quyen.jpg" alt="video" data-toggle="modal" data-target="#modal4" /></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Content content="You can make a difference and improve the lives of underprivileged youths by helping Passerelles numériques in many different ways"></Content>
                    <div className="donates-form container" >
                        <img src="https://th.bing.com/th/id/OIP.VGclM04uzA6nLx6KcrKVxwHaFP?pid=ImgDet&rs=1" width="50px" height="33px" style={{ float: 'right' }} />
                        <img src="https://th.bing.com/th/id/R3faa0b3d7207fcb4f8bfc91dfa55d0be?rik=%2bkg6YoVdIzrMQA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f2%2f21%2fFlag_of_Vietnam.svg%2f2000px-Flag_of_Vietnam.svg.png&ehk=ch8dvYpGh7gop%2bsuPbVjXDbHZdGC5ry%2f2p%2bmv9qn1iI%3d&risl=&pid=ImgRaw" width="50px" style={{ float: 'right' }} />
                        <div className="form-group">
                            <img src="images/logo.png" width="80px" />
                            <span><h4>Donate now to Passerelles numériques Vietnam</h4></span>
                        </div>
                        <form id="form-outsize" action={this.PostDonate}>
                            <div className="row">
                                <div className="col-sm-4" id="my-donation" >
                                    <div id="header-donation" className="col">
                                        <h4>My Donation</h4>
                                    </div>
                                    <div id="second-form" className="col">
                                        <h6>Donation Amount</h6>
                                        <div className="form-group donate-buttons" id="donate-buttons" >
                                            <div className="amount" style={{ display: 'float' }}>
                                                <button name="value" value={30} onClick={this.onChange.bind(this)} className="btn-blue">€30</button>
                                                <button name="value" value={50} onClick={this.onChange.bind(this)} className="btn-blue">€50</button>
                                                <button name="value" value={100} onClick={this.onChange.bind(this)} className="btn-blue">€100</button>
                                                <button name="value" className="btn-blue-other" id="other">Other
                                                </button>
                                                <strong id="other-input">
                                                    <input type="number" min={0} max={100000} name="value" onChange={this.onChange.bind(this)} value={this.state.value} data-impact="That’s great. Thank you!" />
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span>Other Amount</span>
                                            <input className="col-sm-6" name="donation" type="text" id="otheramount" name="otheramount"
                                                minlength="4" maxlength="8" size="10" onChange={(e) => this.onChangeOtherAmount(e)}></input>
                                            {this.state.otherValue}$
                                        </div>
                                    </div>
                                    <div id="month-amount" className="col">
                                        <h6>Monthly donation amount</h6>
                                        <div className="form-group donate-button" id="donate-button" >
                                            <div className="amount" style={{ display: 'float' }}>
                                                <button name="value" value={30} onClick={this.onHandelChange.bind(this)} className="btn-blue">€30</button>
                                                <button name="value" value={50} onClick={this.onHandelChange.bind(this)} className="btn-blue">€50</button>
                                                <button name="value" value={100} onClick={this.onHandelChange.bind(this)} className="btn-blue">€100</button>
                                                <button name="value" className="btn-blue-other" id="other1">Other
                                                </button>
                                                <strong id="other-input1">
                                                    <input type="number" min={0} max={100000} name="valueMonth" onChange={this.onHandelChange.bind(this)} value={this.state.valueMonth} data-impact="That’s great. Thank you!" />
                                                </strong>
                                            </div>
                                        </div>
                                        <div className=" col">
                                            <span>You will be charged on the following date each month <input type="text" value={this.state.today} style={{ maxWidth: '70px', height: '20px' }} /></span>
                                        </div>

                                        <div className="form-group col">
                                            <span> <b>In order to confirm your credit card, the first payment will be made today. Your following donation will be charged on {this.state.date}</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4" id="my-detail">
                                    <div id="header-detail" >
                                        <h4>My detail</h4>
                                    </div>
                                    <div id="content-detail" >
                                        {/* <h6 className="col">I already have a HelloAsso account
                                        </h6> */}
                                        <section id="tabs" className="project-tab">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <nav>
                                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                                <a className="nav-item nav-link active btn-footer" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Individual</a>
                                                                <a className="nav-item nav-link btn-footer" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Organizate</a>
                                                            </div>
                                                        </nav>
                                                        <div className="tab-content" id="nav-tabContent">
                                                            <br></br>
                                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                                                <div className="form-group">
                                                                    <input type="text" name="lastname" id="lastname" className="col" placeholder="Last Name *" required />
                                                                    <input type="text" name="firstname" id="firstname" className="col" placeholder="First Name *" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" name="email" id="email" placeholder="Email *" required />
                                                                </div>
                                                                <div className="form-group" >
                                                                    <input type="text" name="address" id="address" placeholder="Street adsress *" required />
                                                                </div>

                                                                <div className="form-group" >
                                                                    <input type="text" name="city" id="city" className="col" placeholder="city" required />
                                                                    <select className="col-sm-6" required>
                                                                        {
                                                                            countries.map(a => (
                                                                                <option>{a.text.toString()}</option>
                                                                            ))
                                                                        };
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                                <div className="form-group">
                                                                    <input type="text" name="company" id="company" className="col" placeholder="Company or organization *" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" name="lastname" id="lastname" className="col" placeholder="Last Name *" required />
                                                                    <input type="text" name="firstname" id="firstname" className="col" placeholder="First Name *" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" name="email" id="email" placeholder="Email *" required />
                                                                </div>
                                                                <div className="form-group" >
                                                                    <input type="text" name="address" id="address" placeholder="Street adsress *" required />
                                                                </div>

                                                                <div className="form-group" >
                                                                    <input type="text" name="city" id="city" className="col" placeholder="city" required />
                                                                    <select className="col-sm-6">
                                                                        {
                                                                            countries.map(a => (
                                                                                <option>{a.text.toString()}</option>
                                                                            ))
                                                                        };
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="footer-detail col" id="footer-datail">
                                        <h4 style={{ textAlign: 'center' }}>Contact</h4>
                                        <p>Passerelles numériques VietNam</p>
                                        <p>99 Tô Hiến Thành, Đà Nẵng</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 " id="sumary-donation">
                                    <div id="header-sumary" style={{ textAlign: 'center' }}>
                                        <h4>My Sumary</h4>
                                    </div>
                                    <div className=" col" id="content-sumary">
                                        <h6 style={{ textAlign: 'center' }}> Sumary</h6>
                                        <table border='1px' style={{ width: '300px' }}>
                                            <thead>
                                                <tr>
                                                    <th>Selection</th>
                                                    <th >Donation</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr >
                                                    <td>Donation</td>
                                                    <td>{this.state.value}€</td>
                                                </tr>
                                                <tr>
                                                    <td>Your contribution to the functioning of HelloAsso.<a ></a></td>
                                                    <td >{this.state.orther}€</td>
                                                </tr>
                                                <tr>
                                                    <td>Total</td>
                                                    <td>{this.state.total}€</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="form-group col " >
                                            {/* <i className="fa fa-heart" align="center"></i> */}
                                        </div>
                                        <div className="form-group col">
                                            <span>HelloAsso is a social and solidarity company, which provides for free its payment technologies to the organism Passerelles Numériques. A contribution to the functioning of HelloAsso, updatable and optional, is proposed to you before the validation of your payment.</span>
                                        </div>
                                        <div className="form-group col">
                                            <input type="checkbox" name="agree" className="col-sm-1" />
                                            <span >I understand and I confirm that I want to provide financial support to HelloAsso by finalizing my paymen</span>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-radio-flex col">
                                                <input type="radio" name="payment_type" id="payment_visa" defaultValue="payment_visa" defaultChecked="checked" />
                                                <label htmlFor="payment_visa"><img src="resource/images/icon-visa.png" alt="" /></label>
                                                <input type="radio" name="payment_type" id="payment_master" defaultValue="payment_master" />
                                                <label htmlFor="payment_master"><img src="resource/images/icon-master.png" alt="" /></label>
                                                <input type="radio" name="payment_type" id="payment_paypal" defaultValue="payment_paypal" />
                                                <label htmlFor="payment_paypal"><img src="resource/images/icon-paypal.png" alt="" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="col " id="paypal-button"> <p><small>100% secured payment </small></p>  </button>
                                    </div>
                                    <div className="reason">
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="payment-method">
                                <div className="form-group col " >
                                    <p><p style={{ textAlign: 'center' }}><i className="fa fa-lock lock">100% secured payment
                                    </i></p>All your bank details are completely secured throughout the payment process. The data is encrypted with SSL and we guarantee the safe treatment of your transaction.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <footer className="wow fadeInUp container" data-wow-delay="0.1s" id="review">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/quan.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="Before joining PNV,
                                        all of my relatives disapproved my wish to come here to study as they thought IT was not suitable for a girl.
                                        But my mother advised me to go and study at PNV.
                                        Before I left, she asked me to try to study hard which I did!
                                        My mother is my everyday inspiration and motivation."></Donation_text>
                                    <Donation_name name="Hoang Trung Quan" ></Donation_name>
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/duong.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="There was a huge change in my life after PN.
                                        I realized that I am capable of doing something bigger!
                                        That my dreams before weren’t just dreams…
                                        My family is my first source of motivation.
                                        I wanted to study, to get a good job and help them.
                                        And now, I am proud to see them in a situation way better than before.
                                        Proud to help my brother finish his education.
                                        Proud to help my family slowly build a new and stronger house." />
                                    <Donation_name name="A Viet Duong" ></Donation_name>
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <Image_component image="images/phat.jpg"></Image_component>
                                <div className="card-body">
                                    <Donation_text content="PN Cambodia has given me great training & education!
                                        I am not sure I could find that anywhere else.
                                        I learned so much at PNC programme and having this on my resume has put me light years ahead of the competition.
                                        I would not be where I am today if it was not thanks to the training programme in Information Technology I was part of.
                                        Thanks to all the teachers, staffs and partners who make the programme a true success: thank PNV!"/>
                                    <Donation_name name="Tran Van Phat" />
                                    {/* <Link to="/"><Button_donation name_butotn="read more"></Button_donation></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Map />                                                        
                <Footer></Footer>
                <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up" /></a>
            </div>
        );
    }
}
$(document).ready(function () {
    $("#donate-buttons").on("click", ".btn-blue", function (e) {
        e.preventDefault();
        $(".active").removeClass("active");
        $("#other-input").hide().siblings("#other").show();
        $(this).filter(".btn-blue").addClass("active");
        var value = $(this).data("impact");
        $(this)
            .closest("div")
        $("#other-input").find("input").val("");
    });
    $("#other").on("click", function (e) {
        e.preventDefault();
        var buttons = $(this).parent("#donate-buttons");
        buttons.find(".active").removeClass("active");
        var other = $(this).hide().siblings("#other-input");
        other.show();
        other.find("input").focus();
    });
});

$(document).ready(function () {
    $("#donate-button").on("click", ".btn-blue", function (e) {
        e.preventDefault();
        $(".active").removeClass("active");
        $("#other-input1").hide().siblings("#other1").show();
        $(this).filter(".btn-blue").addClass("active");
        var value = $(this).data("impact");
        $(this)
            .closest("div")
        $("#other-input").find("input").val("");
    });
    $("#other1").on("click", function (e) {
        e.preventDefault();
        var buttons = $(this).parent("#donate-button");
        buttons.find(".active").removeClass("active");
        var other = $(this).hide().siblings("#other-input1");
        other.show();
        other.find("input").focus();
    });
});

export default Donate;