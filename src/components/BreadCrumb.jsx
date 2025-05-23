import React from "react";
import { FaAngleRight, FaHouse } from 'react-icons/fa6'
import { NavLink } from "react-router";

const Breadcrumb = ({ items , isAdmin }) => {
    return (
        <nav className="flex">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <NavLink
                        to={isAdmin ? '/admin' : '/'}
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                        <FaHouse />
                    </NavLink>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index}>
                            <div className="flex items-center">
                                <FaAngleRight />
                                {isLast ? (
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        {item.label}
                                    </span>
                                ) : (
                                    <NavLink
                                        to={isAdmin ? `/admin/${item.href}` : item.href || "#"}
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
