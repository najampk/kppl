import Image from "next/image";
import Head from "next/head";
export default function Investors_Relations() {
  return (
    <div className="py-20 mt-8 md:mt-2 max-w-[1080px] mx-auto w-full">
      <Head>
        <title>Investors Relations | Khyber Petroleum Pvt Ltd.</title>
        <meta
          name="description"
          content="Explore investment opportunities with Khyber Petroleum Pvt Ltd. We are seeking certified business partners to meet the growing demand for lubricants and engineering consultancy."
        />
        <meta
          name="keywords"
          content="Khyber Petroleum, Investors Relations, Investment Opportunities, Lubricants, Business Partners, Engineering Consultant"
        />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta
          property="og:title"
          content="Investors Relations | Khyber Petroleum Pvt Ltd."
        />
        <meta
          property="og:description"
          content="Join Khyber Petroleum Pvt Ltd. as a business partner to take advantage of growing investment opportunities in the oil and gas sector."
        />
        <meta property="og:image" content="/investor.png" />
        <meta
          property="og:url"
          content="https://www.kppl.pk/investors-relations"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Investors Relations | Khyber Petroleum Pvt Ltd."
        />
        <meta
          name="twitter:description"
          content="Explore how you can invest in Khyber Petroleum Pvt Ltd. and become a part of our expanding business network."
        />
        <meta name="twitter:image" content="/investor.png" />
      </Head>
      <Image
        src="/investor.png"
        alt="investor relations"
        width={1050}
        height={630}
        className="flex jusify0-center mx-auto"
      />
      <div className="my-20 max-w-[900px] w-full mx-auto">
        <p className="text-lg text-center text-gray-700 hover:text-gray-900 md:mx-10 mx-4">
          Investment opportunities are open. There is a great need for certified
          business partners in the near future to meet the growing demand of
          Lubricants, Engineering consultant and ongoing Supply from numerous
          venders.{" "}
        </p>
      </div>
    </div>
  );
}
