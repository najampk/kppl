import Image from "next/image";
export default function Investors_Relations() {
  return (
    <div className="py-20 mt-8 md:mt-2 max-w-[1080px] mx-auto w-full">
      <Image
        src="/investor.png"
        alt="investor relations"
        width={1050}
        height={630}
        className="flex jusify0-center mx-auto"
      />
     <div className="my-20 max-w-[900px] w-full mx-auto">
        <p className="text-lg text-center text-gray-700 hover:text-gray-900 md:mx-10 mx-4">Investment opportunities are open. There is a great need for certified business partners in the near future to meet the growing demand of Lubricants, Engineering consultant and ongoing Supply from numerous venders. </p>
     </div>
      
    </div>
  );
}
