import Our_Journey from "../components/ourJourney";
import Head from "next/head";
export default function Journey(){
    return(
        <div className="mt-20 py-10">
        <Head>
        <title>Our Journey | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Learn about Khyber Petroleum Pvt Ltd., a leading petroleum company in Pakistan, offering top-quality fuel supply and expanding into retail with our own network of petrol pumps." />
        <meta name="keywords" content="Khyber Petroleum, Company Journey,Our Journey, Fuel Supply, Petrol Pumps, Lubricants, Engineering Consultant, Business Partners" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="Our Journey | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Discover Khyber Petroleum Pvt Ltd., our mission, and our expansion into a new retail network of petrol pumps across Pakistan." />
        <meta property="og:image" content="/jouney.png" />
        <meta property="og:url" content="https://www.kppl.pk/our-journey" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Journey | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Explore Khyber Petroleum Pvt Ltd.'s Company Journey,Our Journey, our growth, and our future plans to meet the growing demand for lubricants and engineering consultancy." />
        <meta name="twitter:image" content="/journey.png" />
      </Head>
        <Our_Journey/>
        </div>
    )
};