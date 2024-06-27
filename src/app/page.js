import Image from "next/image";
import Our_value from "./components/ourValue";
import Our_Journey from "./components/ourJourney";
import Our_vision from "./components/ourVision";
import Our_Mission from "./components/ourMission";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <div className="relative mt-20 d-flex justify-center items-center">
      <Head>
        <title>Home | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Welcome to Khyber Petroleum Pvt Ltd. Discover our journey, values, and vision as a leading petroleum company in Pakistan, expanding our services and product range to meet growing demands." />
        <meta name="keywords" content="Khyber Petroleum, Home, Petroleum Company, Pakistan, Fuel Supply, Petrol Pumps, Lubricants, Engineering Consultancy" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="Home | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Learn more about Khyber Petroleum Pvt Ltd., our mission, and our expansion plans in the petroleum industry across Pakistan." />
        <meta property="og:image" content="/kppl-cover-1024x680.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Explore Khyber Petroleum Pvt Ltd. and our commitment to providing top-quality petroleum products and services in Pakistan." />
        <meta name="twitter:image" content="/kppl-cover-1024x680.jpg" />
      </Head>
        <div className="relative">
          <Image
            src="/kppl-cover-1024x680.jpg"
            alt="Khyber Petroleum"
            width={2500}
            height={1400}
            className="cursor-pointer w-full h-full justify-center mx-auto"
            title="Khyber Petroleum"
          />

          <div className="absolute z-10 top-2/3 md:left-1/2 max-w-[1800px] sm:mx-auto  mx-3 md:transform md:-translate-x-1/2 -translate-y-1/2  text-center text-white">
            <h1 className="text-white text-center uppercase md:text-3xl font-medium text-lg">
              Welcome to Khyber Petroleum Pvt Ltd.
            </h1>
            <h1 className="text-white text-center sm:text-lg text-xs mt-3">
              Encouraged by the substantial growth of our company we are to
              diversify our product and services; we are now introducing a new
              concept in retailing through our own retail network of Petrol
              Pumps.{" "}
            </h1>
          </div>
        </div>
        <div className="absolute z-0 inset-0 bg-black bg-opacity-50 "></div>
      </div>
      <div className="relative my-10 mx-4">
        <div className="w-full mx-auto max-w-[1080px] pt-10">
          <div className="border-b pb-4 ">
            <h1 className="text-center uppercase md:text-3xl sm:text-2xl text-xl font-bold text-slate-900 my-4">
              COMPANY OVERVIEW
            </h1>
            <p className="text-neutral-600 text-center my-4  mx-auto md:mx-10 mx-6">
              Khyber Petroleum (Pvt.) Ltd. has been established as a Petroleum
              company in Pakistan. Our traditional business model is based on
              the accomplishment of fuel supply nationwide consistent of top
              quality and services that exceeds our customers’ expectations.
              Encouraged by the substantial growth of our company we are to
              diversify our product and services; we are now introducing a new
              concept in retailing through our own retail network of Petrol
              Pumps. There is a great need for certified business partners in
              the near future to meet the growing demand of Lubricants,
              Engineering consultant and ongoing Supply from numerous venders.
            </p>
          </div>
          <div className="pb-10">
            <Our_value />
          </div>
          <div className="my-4">
            <h1 className="text-2xl font-bold text-center py-4">Directors</h1>
            <p className="text-center">
              Abrar Jillani: Chief Executive Officer
              <br />
              Sohail Ahmed Naseem: Managing Director
            </p>
          </div>
          <Our_Journey />
          <div className="grid md:grid-cols-2 gap-10 justify-evenly py-10 mx-auto ">
            <Our_vision />
            <Our_Mission />
          </div>
        </div>
      </div>
    </>
  );
}
