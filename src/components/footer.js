import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col footer">
            <a href="http://instagram.com/"><FaInstagramSquare className="instagram" /></a>
            <a href="http://facebook.com/"><FaFacebookSquare className="facebook"/></a>
            <a href="http://google.com/"><FaGoogle className="google"/></a>
            <a href="http://twitter.com/"><FaTwitterSquare className="twitter"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;