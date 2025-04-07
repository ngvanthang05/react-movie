import { createBrowserRouter } from "react-router";

//site
import LayoutSite from "../pages/site/Layout";
import Home from "../pages/site/home/Home";
import About from "../pages/site/about/About";

// admin
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import BannerList from "../pages/admin/banner/BannerList";
import Brand from "../pages/admin/brand/Brand";
import Category from "../pages/admin/category/Category";
import Contact from "../pages/admin/contact/Contact";
import Menu from "../pages/admin/menu/Menu";
import Order from "../pages/admin/order/Order";
import Post from "../pages/admin/post/Post";
import Product from "../pages/admin/product/Product";
import Topic from "../pages/admin/topic/Topic";
import User from "../pages/admin/user/User";

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutSite,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            // { path: "contact", Component: Contact },
        ],
    },
    {
        path: "/admin",
        Component: LayoutAdmin,
        children: [
            { index: true, Component: Dashboard },
            { path: "banner", Component: BannerList },
            { path: "brand", Component: Brand },
            { path: "category", Component: Category },
            { path: "contact", Component: Contact },
            { path: "menu", Component: Menu },
            { path: "order", Component: Order },
            { path: "post", Component: Post },
            { path: "product", Component: Product },
            { path: "topic", Component: Topic },
            { path: "user", Component: User },

        ]
    }
]);

export default router;