import Image from "next/image";
export default function HSE() {
  return (
    <div className="mt-20 px-6 grid sm:grid-cols-2 gap-7 py-20 max-w-[1080px] mx-auto w-full">      
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
