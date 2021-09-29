import { logDOM } from '@testing-library/dom';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import footerlogo from '../assets/images/logo.png'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.selectcategory = this.selectcategory.bind(this);
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    render(){
        return (
        <div className="footer">
            <div  >
                <table width="90%" style={{marginLeft: "16px"}}>
                    <br></br>
                    <tr>
                    <td>
                    <tr>
                        <a href="/aboutus" className="nav-link">
                            <h6 className="nameColor">About Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/contactus" className="nav-link">
                            <h6 className="nameColor">Contact Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/termsnconditions" className="nav-link">
                            <h6 className="nameColor">Terms & Conditions</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/privacypolicy" className="nav-link">
                            <h6 className="nameColor">Privacy Policy</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/faqs" className="nav-link">
                            <h6 className="nameColor">FAQs</h6>
                        </a>
                    </tr>
                </td>

                <td className="float-end">
                    <div className="nameColor">
                        {' '}
                       
                        <br />
                        {/* <br /> <h2>Download App</h2> <br /> */}
                        <a
                        style={{ marginRight: "16px"}}>
                        <img
                            src={footerlogo}
                            alt="Footer logo"
                        />
                        </a>

                    </div>{' '}
                </td>
                </tr>
                </table>
                
                <div class="copyright">
                    <div>© 2021 SneakerHeads</div>
                </div>
            </div>
            
        </div>
        )
    }
}