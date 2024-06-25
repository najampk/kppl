import Image from "next/image";
export default function Management() {
  return (
    <div className="mt-20 py-20 max-w-[1080px] mx-auto w-full">
      <h1 className="text-left uppercase  sm:text-2xl text-xl font-bold text-slate-900 my-4">
      Directors KPPL Pvt Ltd.
      </h1>
      <ul className="list-disc list-inside space-y-2">
      <li className="text-lg text-gray-700 hover:text-gray-900">Mr. Abrar Jillani</li>
      <li className="text-lg text-gray-700 hover:text-gray-900">Mr. Sohail Ahmed Naseem</li>
    </ul>
      
    </div>
  );
}
