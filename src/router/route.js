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
import axios from "axios";
import BannerCreate from "../pages/admin/banner/BannerCreate";
import LayoutBanner from "../pages/admin/banner/LayoutBanner";
import LayoutBrand from "../pages/admin/brand/LayoutBrand";
import LayoutCategory from "../pages/admin/category/LayoutCategory";
import LayoutContact from "../pages/admin/contact/LayoutContact";
import LayoutMenu from "../pages/admin/menu/LayoutMenu";
import LayoutOrder from "../pages/admin/order/LayoutOrder";
import LayoutPost from "../pages/admin/post/LayoutPost";
import LayoutProduct from "../pages/admin/product/LayoutProduct";
import LayoutTopic from "../pages/admin/topic/LayoutTopic";
import LayoutUser from "../pages/admin/user/LayoutUser";
import BannerEdit from "../pages/admin/banner/BannerEdit";
import BrandCreate from "../pages/admin/brand/BrandCreate";
import BrandEdit from "../pages/admin/brand/BrandEdit";
import MenuCreate from "../pages/admin/menu/MenuCreate";
import MenuEdit from "../pages/admin/menu/MenuEdit";
import CategoryCreate from "../pages/admin/category/CategoryCreate";
import CategoryEdit from "../pages/admin/category/CategoryEdit";

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
            {
                path: "banner", Component: LayoutBanner,
                children: [
                    {
                        index: true, Component: BannerList,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/banner")).data.banners;
                        },
                    },
                    { path: "create", Component: BannerCreate },
                    {
                        path: ":id", Component: BannerEdit,
                        loader: async ({ params }) => {
                            return (await axios.get(`http://thayloi.edu.vn/laravel/api/banner/${params.id}`)).data.banner;
                        },
                    },
                ],
            },

            {
                path: "brand", Component: LayoutBrand,
                children: [
                    {
                        index: true, Component: Brand,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/brand")).data.brands;
                        },
                    },
                    { path: "create", Component: BrandCreate },
                    {
                        path: ":id", Component: BrandEdit,
                        loader: async ({ params }) => {
                            return (await axios.get(`http://thayloi.edu.vn/laravel/api/brand/${params.id}`)).data.brand;
                        },
                    },
                ],
            },

            {
                path: "category", Component: LayoutCategory,
                children: [
                    {
                        index: true, Component: Category,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/category")).data.categorys;
                        },
                    },
                    { path: "create", Component: CategoryCreate },
                    {
                        path: ":id", Component: CategoryEdit,
                        loader: async ({ params }) => {
                            return (await axios.get(`http://thayloi.edu.vn/laravel/api/category/${params.id}`)).data.category;
                        },
                    },
                ],
            },

            {
                path: "contact", Component: LayoutContact,
                children: [
                    {
                        index: true, Component: Contact,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/contact")).data.contacts;
                        },
                    },
                    // { path: "create", Component: ContactCreate },
                ],
            },

            {
                path: "menu", Component: LayoutMenu,
                children: [
                    {
                        index: true, Component: Menu,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/menu")).data.menus;
                        },
                    },
                    { path: "create", Component: MenuCreate },
                    {
                        path: ":id", Component: MenuEdit,
                        loader: async ({ params }) => {
                            return (await axios.get(`http://thayloi.edu.vn/laravel/api/menu/${params.id}`)).data.menu;
                        },
                    },
                ],
            },

            {
                path: "order", Component: LayoutOrder,
                children: [
                    {
                        index: true, Component: Order,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/order")).data.orders;
                        },
                    },
                    // { path: "create", Component: OrderCreate },
                ],
            },

            {
                path: "post", Component: LayoutPost,
                children: [
                    {
                        index: true, Component: Post,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/post")).data.posts;
                        },
                    },
                    // { path: "create", Component: PostCreate },
                ],
            },

            {
                path: "product", Component: LayoutProduct,
                children: [
                    {
                        index: true, Component: Product,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/product")).data.products;
                        },
                    },
                    // { path: "create", Component: ProductCreate },
                ],
            },

            {
                path: "topic", Component: LayoutTopic,
                children: [
                    {
                        index: true, Component: Topic,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/topic")).data.topics;
                        },
                    },
                    // { path: "create", Component: TopicCreate },
                ],
            },

            {
                path: "user", Component: LayoutUser,
                children: [
                    {
                        index: true, Component: User,
                        loader: async () => {
                            return (await axios.get("http://thayloi.edu.vn/laravel/api/user")).data.users;
                        },
                    },
                    // { path: "create", Component: UserCreate },
                ],
            },
        ],
    }

]);

export default router;