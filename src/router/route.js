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
import ProductCreate from "../pages/admin/product/ProductCreate";
import ProductEdit from "../pages/admin/product/ProductEdit";
import { get } from "../services/apis";
import ProductDetail from "../pages/site/product/productDetail/ProductDetail";
import ProductPage from "../pages/site/product/ProductPage";
import ProductsPage from "../pages/site/products/ProductsPage";
import PostCreate from "../pages/admin/post/PostCreate";

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutSite,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            // { path: "contact", Component: Contact },
            {
                path: "products", Component: ProductsPage,
                loader: async ({ request }) => {
                    try {
                        const url = new URL(request.url);
                        const keyword = url.searchParams.get("classify");
                        const pagination = url.searchParams.get("page");

                        if (!keyword) {
                            const productAll = await get(`product-all`)
                            if (!pagination) return productAll.products.slice(0, 10)
                            return productAll.products.slice((parseInt(pagination) - 1) * 10, parseInt(pagination) * 10) // 21   
                        };

                        if (keyword === "brand") {
                            const brandId = url.searchParams.get("id");
                            // chưa có API lọc theo thương hiệu
                        }
                        if (keyword === "category") {
                            const categoryId = url.searchParams.get("id");
                            const productByCategory = await get(`product-category/${categoryId}`);
                            console.log(productByCategory)
                            if (!pagination) return productByCategory.products.slice(0, 10)
                            return productByCategory.products.slice((parseInt(pagination) - 1) * 10, parseInt(pagination) * 10) // 21   
                        }
                    } catch (error) {
                        console.error(error.message);
                        return []; // hoặc throw new Error("Không thể tải bài viết")
                    }
                },
            },
            {
                path: "product",
                children: [
                    { index: true, Component: ProductPage },
                    {
                        path: ":id", Component: ProductDetail,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`product/${params.id}`)).product;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    }
                ]
            }
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
                            try {
                                const response = await get("banner");
                                return response.banners;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    { path: "create", Component: BannerCreate },
                    {
                        path: ":id", Component: BannerEdit,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`banner/${params.id}`)).banner;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("brand");
                                return response.brands;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    { path: "create", Component: BrandCreate },
                    {
                        path: ":id", Component: BrandEdit,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`brand/${params.id}`)).brand;

                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("category");
                                return response.categorys;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    {
                        path: "create", Component: CategoryCreate,
                        loader: async () => {
                            try {
                                const response = await get("category");
                                return response.categorys;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    {
                        path: ":id", Component: CategoryEdit,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`category/${params.id}`)).category;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("contact");
                                return response.contacts;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("menu");
                                return response.menus;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    { path: "create", Component: MenuCreate },
                    {
                        path: ":id", Component: MenuEdit,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`menu/${params.id}`)).menu;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("order");
                                return response.orders;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("post");
                                return response.posts;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    { path: "create", Component: PostCreate },
                ],
            },

            {
                path: "product", Component: LayoutProduct,
                children: [
                    {
                        index: true, Component: Product,
                        loader: async () => {
                            try {
                                const response = await get("product");
                                return response.products;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    { path: "create", Component: ProductCreate },
                    {
                        path: ":id", Component: ProductEdit,
                        loader: async ({ params }) => {
                            try {
                                return (await get(`product/${params.id}`)).product;
                            } catch (error) {
                                console.error(error.message);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                ],
            },

            {
                path: "topic", Component: LayoutTopic,
                children: [
                    {
                        index: true, Component: Topic,
                        loader: async () => {
                            try {
                                const response = await get("topic");
                                return response.topics;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
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
                            try {
                                const response = await get("user");
                                return response.users;
                            } catch (error) {
                                console.error(error);
                                return []; // hoặc throw new Error("Không thể tải bài viết")
                            }
                        },
                    },
                    // { path: "create", Component: UserCreate },
                ],
            },
        ],
    }

]);

export default router;