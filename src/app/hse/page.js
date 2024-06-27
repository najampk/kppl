import Image from "next/image";
import Head from "next/head";
export default function HSE() {
  return (
    <div className="mt-20 px-6 grid sm:grid-cols-2 gap-7 py-20 max-w-[1080px] mx-auto w-full">      
     <Head>
        <title>HSE | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Learn about Health, Safety, and Environment (HSE) practices at Khyber Petroleum Pvt Ltd., and how we ensure the protection and well-being of our employees, customers, and the environment." />
        <meta name="keywords" content="Khyber Petroleum, HSE, Health Safety Environment, Oil Marketing, Environmental Protection, Sustainable Practices" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="HSE | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Discover our HSE policies and how we manage health, safety, and environmental risks at Khyber Petroleum Pvt Ltd." />
        <meta property="og:image" content="/HSE.png" />
        <meta property="og:url" content="https://www.kppl.pk/hse" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HSE | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Explore Khyber Petroleum's approach to managing Health, Safety, and Environment (HSE) in our operations." />
        <meta name="twitter:image" content="/HSE.png" />
      </Head>
      <div>
        <p className="text-neutral-600 text-justify">
        Health, Safety, and Environment (HSE) are critical components in the oil marketing industry, ensuring the protection and well-being of employees, customers, and the environment. The industry is operations pose significant health risks, such as exposure to hazardous substances and ergonomic challenges, making occupational health programs and medical surveillance essential. Safety is paramount, necessitating the identification and mitigation of hazards like spills, fires, and equipment failures through stringent protocols, regular training, and emergency preparedness. Incident reporting and thorough investigations help prevent future occurrences.
        </p> 
        <p className="indent-8 mt-3 text-neutral-600 text-justify"> Environmental protection is equally crucial, requiring comprehensive impact assessments and pollution control measures to safeguard soil, water, and air quality. Sustainable practices, including energy efficiency and renewable energy adoption, help reduce the industry is carbon footprint. Engaging with local communities and maintaining transparency in environmental reporting bolster these efforts. By adhering to regulatory frameworks and industry best practices, oil marketing companies can effectively manage HSE risks, ensuring a safer and more sustainable operation.
        </p>
      </div>
      <div>
        <Image
          src="/HSE.png"
          alt=""
          width={505}
          height={454}
          className="h-full px-6"
        />
      </div>
    </div>
  );
}
