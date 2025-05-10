import React from 'react'
import { FaAngleRight } from 'react-icons/fa6';
import { NavLink, useLocation } from 'react-router';

const tabs = [
    { path: "", label: "Dashboard" },
    { path: "brand", label: "Brand" },
    { path: "banner", label: "Banner" },
    { path: "menu", label: "Menu" },
    { path: "category", label: "Category" },
    { path: "contact", label: "Contact" },
    { path: "order", label: "Order" },
    { path: "product", label: "Product" },
    { path: "post", label: "Post" },
    { path: "topic", label: "Topic" },
    { path: "user", label: "User" },

];

const SideBar = () => {
    const pathname = useLocation().pathname
    console.log(pathname.split("/").slice(1).join('').slice(5))
    return (
        <div>
            <div className="bg-[#111c44] px-5 w-full h-screen transition-all duration-200 ease-linear">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="flex flex-col items-center mt-4">
                        <img src='/logo.svg' alt="" width={50} height={50} />
                        <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                        <div className="flex flex-col px-4 w-full">
                            {tabs.map((tab) => {
                                const isActive = pathname.split("/").slice(1).join('').slice(5) === tab.path;

                                return (
                                    <NavLink
                                        key={tab.path}
                                        to={`${tab.path}`}
                                        className={`flex items-center justify-between w-full py-2 px-4 mb-1 rounded-md transition text-sm ${isActive ? 'bg-blue-900' : 'hover:bg-gray-700'
                                            }`}
                                    >
                                        <span>{tab.label}</span>
                                        <FaAngleRight />
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
