import Image from "next/image";
import Head from "next/head";
export default function Management() {
  return (
    <div className="mt-20 py-20 max-w-[1080px] mx-auto w-full">
      <Head>
        <title>Management | Khyber Petroleum Pvt Ltd.</title>
        <meta
          name="description"
          content="Meet the directors of Khyber Petroleum Pvt Ltd., Mr. Abrar Jillani and Mr. Sohail Ahmed Naseem, who lead our company with vision and expertise."
        />
        <meta
          name="keywords"
          content="Khyber Petroleum, Management, Directors, Abrar Jillani, Sohail Ahmed Naseem, Leadership"
        />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta
          property="og:title"
          content="Management | Khyber Petroleum Pvt Ltd."
        />
        <meta
          property="og:description"
          content="Get to know the leadership team at Khyber Petroleum Pvt Ltd. and their roles in guiding the company's success."
        />
        <meta property="og:image" content="/management.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/management" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Management | Khyber Petroleum Pvt Ltd."
        />
        <meta
          name="twitter:description"
          content="Learn about the management team at Khyber Petroleum Pvt Ltd., including our directors Mr. Abrar Jillani and Mr. Sohail Ahmed Naseem."
        />
        <meta name="twitter:image" content="/management.jpg" />
      </Head>
      <h1 className="text-left uppercase  sm:text-2xl text-xl font-bold text-slate-900 my-4">
        Directors KPPL Pvt Ltd.
      </h1>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-lg text-gray-700 hover:text-gray-900">
          Mr. Abrar Jillani
        </li>
        <li className="text-lg text-gray-700 hover:text-gray-900">
          Mr. Sohail Ahmed Naseem
        </li>
      </ul>
    </div>
  );
}
