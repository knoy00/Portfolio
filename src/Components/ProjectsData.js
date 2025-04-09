import KnolensImage from '../assets/images/Knolens.png'
import KnolensHero from '../assets/images/knolens_sample/knolens_hero.png'
import KnolensAuth from '../assets/images/knolens_sample/knolens_auth.png'
import KnolensProducts from '../assets/images/knolens_sample/knolens_products.png'
import KnolensOrders from '../assets/images/knolens_sample/knolens_orders.png'
import KnolensOverview from '../assets/images/knolens_sample/knolens_overview.png'
import KnolensCheckout from '../assets/images/knolens_sample/knolens_checkout.png'


import FurnistoreImage from '../assets/images/Furnistore.png'
import LuxedriveImage from '../assets/images/Luxedrive.png'

const projectsData = [
    {
        id: 1,
        image: KnolensImage,
        title: "Knolens Web App",
        description: "Knolens is an eCommerce website for camera gadgets, offering a seamless shopping experience with a wide range of cameras, lenses, and accessories.",
        link: "https://knolens.netlify.app/",
        github: 'https://github.com/knoy00/Knolens',
        sample_img1: KnolensHero,
        sample_img2: KnolensAuth,
        sample_img3: KnolensProducts,
        sample_img4: KnolensOrders,
        sample_img5: KnolensOverview,
        sample_img6: KnolensCheckout,
        features: [
            "User should be able to Sign up or Sign in to place an order",
            "User should be able to browse through products and add them to the cart",
            "User should be able to checkout and place an order",
        ]

    },
    {
        id: 2,
        image: FurnistoreImage,
        title: "Furnistore Web App",
        description: "Description of Project 2"
    },
    {
        id: 3,
        image: LuxedriveImage,
        title: "LuxeDriveGroup",
        description: "LuxeDriveGroup is an automobile group",
        link: 'https://luxedrivegroup.netlify.app/',
        github: 'https://github.com/knoy00/automobile',
        about: 'Luxedrivegroup is your ultimate luxury automotive destination, offering exclusive access to some of the most iconic and prestigious car brands in the world. As the parent company of renowned manufacturers like Mercedes-Benz, Aston Martin, Bentley, and Porsche, Luxedrivegroup brings a unique blend of style, performance, and craftsmanship to the forefront. '
    },
    {
        id: 4,
        image: KnolensImage,
        title: "Project 4",
        description: "Description of Project 3"
    },
]

export default projectsData;