import React, { Component } from 'react'
import Navigation from '../../components/Navigation'

export default class Store extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <div className="container " style={{ width: "90%" }}>
                        <div class="row">
                            <div className="col-md-5"><hr /></div>
                            <div className="col-md-2"><h1>Store</h1></div>
                            <div className="col-md-5"><hr /></div>
                        </div>
                    </div>
                    <div class="container">

                        <div class="row" >
                            <h3 style={{ textAlign: "left" }}>Delhi</h3>
                            <p>Contact:
                                105, Ground Floor, DLF Avenue, A-4, Saket District Centre, New Delhi, Delhi 110017
                                Phone: +91 01146105324
                                E-Mail: info@superkicks.in </p>
                            <br />
                            <h3 style={{ textAlign: "left" }}>Bengaluru</h3>
                            <p>Contact:
                                No. 1079, Ground Floor, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka 560038
                                Phone: +91 80-43029807
                                E-Mail: info@superkicks.in</p>
                            <br />
                            <h3 style={{ textAlign: "left" }}>Mumbai</h3>
                            <p>
                                Stores
                                Mumbai
                                Contact:
                                Ground Floor, Yashwant Smruti Building, 12th Road, Khar West, Off-Linking Road, Near Madhu Park, Mumbai-400052
                                Phone: 022 26000518
                                E-Mail: info@superkicks.in
                            </p>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
