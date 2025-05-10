import React from 'react'
import { FaEnvelope, FaHouse, FaPhone } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <img src="/logo.svg" alt="" width={100} height={100} />
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div>
                    <h6 className="uppercase font-bold mb-4">Products</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">MDBootstrap</a></li>
                        <li><a href="#" className="hover:underline">MDWordPress</a></li>
                        <li><a href="#" className="hover:underline">BrandFlow</a></li>
                        <li><a href="#" className="hover:underline">Bootstrap Angular</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="uppercase font-bold mb-4">Useful Links</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Your Account</a></li>
                        <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                        <li><a href="#" className="hover:underline">Shipping Rates</a></li>
                        <li><a href="#" className="hover:underline">Help</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="uppercase font-bold mb-4">Contact</h6>
                    <ul className="space-y-2">
                        <li><FaHouse /> New York, NY 10012, US</li>
                        <li><FaEnvelope />  info@example.com</li>
                        <li><FaPhone />  + 01 234 567 88</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-900 text-center py-4 text-xs">
                © 2025 Copyright: MDBootstrap.com
            </div>
        </footer>

    )
}

export default Footer
