import Our_Mission from "../components/ourMission";
import Head from "next/head";
export default function Mission(){
    return(
        <div className="mt-20 py-20 sm:w-[40%] mx-auto">
        <Head>
        <title>Our Mission | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Discover the mission of Khyber Petroleum Pvt Ltd. and learn about our commitment to providing top-quality petroleum products and services while fostering sustainable growth." />
        <meta name="keywords" content="Khyber Petroleum, Our Mission, Petroleum Products, Sustainable Growth, Quality Services" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="Our Mission | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Explore the mission of Khyber Petroleum Pvt Ltd. and our dedication to delivering exceptional petroleum products and services with a focus on sustainability." />
        <meta property="og:image" content="/mission.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/our-mission" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mission | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Learn about Khyber Petroleum Pvt Ltd.'s mission to provide high-quality petroleum services and drive sustainable growth in the industry." />
        <meta name="twitter:image" content="/mission.jpg" />
      </Head>
        <Our_Mission/>
        </div>
    )
};