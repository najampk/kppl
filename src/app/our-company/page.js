import Image from "next/image";
export default function Company() {
  return (
    <div className="mt-20 py-20 max-w-[1080px] mx-auto w-full">
      <h1 className="text-left uppercase md:text-3xl sm:text-2xl text-xl font-bold text-slate-900 my-4">
        COMPANY OVERVIEW
      </h1>
      <div className="flex flex-col md:flex-row mx-auto w-full p-2 bg-neutral-100 mt-10">
      <p className="text-neutral-600 text-left my-6  mx-auto md:mx-10 mx-6">
        Khyber Petroleum (Pvt.) Ltd. has been established as a Petroleum company
        in Pakistan. Our traditional business model is based on the
        accomplishment of fuel supply nationwide consistent of top quality and
        services that exceeds our customers’ expectations. Encouraged by the
        substantial growth of our company we are to diversify our product and
        services; we are now introducing a new concept in retailing through our
        own retail network of Petrol Pumps. There is a great need for certified
        business partners in the near future to meet the growing demand of
        Lubricants, Engineering consultant and ongoing Supply from numerous
        venders.
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
