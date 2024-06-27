import Our_vision from "../components/ourVision";
import Head from "next/head";
export default function Vision() {
  return (
    <div className="mt-20 py-20 sm:w-[40%] mx-auto mx-4">
      <Head>
        <title>Our Vision | Khyber Petroleum Pvt Ltd.</title>
        <meta
          name="description"
          content="Discover the vision of Khyber Petroleum Pvt Ltd. and learn about our commitment to leading the petroleum industry with innovation, sustainability, and excellence."
        />
        <meta
          name="keywords"
          content="Khyber Petroleum, Our Vision, Petroleum Industry, Innovation, Sustainability, Excellence"
        />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta
          property="og:title"
          content="Our Vision | Khyber Petroleum Pvt Ltd."
        />
        <meta
          property="og:description"
          content="Explore the forward-thinking vision of Khyber Petroleum Pvt Ltd., focusing on innovation and sustainable growth in the petroleum sector."
        />
        <meta property="og:image" content="/vision.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/our-vision" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Vision | Khyber Petroleum Pvt Ltd."
        />
        <meta
          name="twitter:description"
          content="Learn about Khyber Petroleum Pvt Ltd.'s vision to drive the future of the petroleum industry with a focus on sustainability and excellence."
        />
        <meta name="twitter:image" content="/vision.jpg" />
      </Head>
      <Our_vision />
    </div>
  );
}
