import Image from "next/image";
import Head from "next/head";
export default function Company() {
  return (
    <div className="mt-20 py-20 max-w-[1080px] mx-auto w-full">
      <Head>
        <title>Company Overview | Khyber Petroleum Pvt Ltd.</title>
        <meta
          name="description"
          content="Learn about Khyber Petroleum Pvt Ltd., a leading petroleum company in Pakistan, offering top-quality fuel supply and expanding into retail with our own network of petrol pumps."
        />
        <meta
          name="keywords"
          content="Khyber Petroleum, Company Overview, Fuel Supply, Petrol Pumps, Lubricants, Engineering Consultant, Business Partners"
        />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta
          property="og:title"
          content="Company Overview | Khyber Petroleum Pvt Ltd."
        />
        <meta
          property="og:description"
          content="Discover Khyber Petroleum Pvt Ltd., our mission, and our expansion into a new retail network of petrol pumps across Pakistan."
        />
        <meta property="og:image" content="/company.png" />
        <meta property="og:url" content="https://www.kppl.pk/our-company" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Company Overview | Khyber Petroleum Pvt Ltd."
        />
        <meta
          name="twitter:description"
          content="Explore Khyber Petroleum Pvt Ltd.'s company overview, our growth, and our future plans to meet the growing demand for lubricants and engineering consultancy."
        />
        <meta name="twitter:image" content="/company.png" />
      </Head>
      <h1 className="text-left uppercase md:text-3xl sm:text-2xl text-xl font-bold text-slate-900 my-4">
        COMPANY OVERVIEW
      </h1>
      <div className="flex flex-col md:flex-row mx-auto w-full p-2 bg-neutral-100 mt-10">
        <p className="text-neutral-600 text-left my-6  mx-auto md:mx-10 mx-6">
          Khyber Petroleum (Pvt.) Ltd. has been established as a Petroleum
          company in Pakistan. Our traditional business model is based on the
          accomplishment of fuel supply nationwide consistent of top quality and
          services that exceeds our customers’ expectations. Encouraged by the
          substantial growth of our company we are to diversify our product and
          services; we are now introducing a new concept in retailing through
          our own retail network of Petrol Pumps. There is a great need for
          certified business partners in the near future to meet the growing
          demand of Lubricants, Engineering consultant and ongoing Supply from
          numerous venders.
        </p>
        <Image
          src="/company.png"
          alt="company overview"
          className="flex items-center p-6"
          width={480}
          height={384}
        />
      </div>
    </div>
  );
}
