import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";
export default function Contact_us() {
  return (
    <div className="mt-20 px-6 grid sm:grid-cols-2 gap-5 py-20 max-w-[1080px] mx-auto w-full">
     <Head>
        <title>Contact Us | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Get in touch with Khyber Petroleum Pvt Ltd. for business inquiries, investment opportunities, and more. Our registered and head office addresses, email, and phone number are available for your convenience." />
        <meta name="keywords" content="Khyber Petroleum, Contact, Investment Opportunities, Lubricants, Engineering Consultant, Lahore" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="Contact Us | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Contact Khyber Petroleum Pvt Ltd. for business inquiries and investment opportunities in Lahore." />
        <meta property="og:image" content="/petrol.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Reach out to Khyber Petroleum Pvt Ltd. for business and investment opportunities." />
        <meta name="twitter:image" content="/petrol.jpg" />
      </Head>
      <div>
        <h1 className="text-left uppercase  sm:text-2xl text-xl font-bold text-slate-900 my-4">
          Khyber Petroleum Pvt Ltd.
        </h1>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-700 hover:text-gray-900">
            <strong>Registered Office:</strong> 22-J1 WAPDA Town Lahore
          </li>
          <li className="text-lg text-gray-700 hover:text-gray-900">
            <strong>Head Office:</strong> G-50 Johar Town Lahore
          </li>
          <li className="text-lg text-gray-700 hover:text-gray-900">
            <strong>E-mail:</strong>{" "}
            <span className="text-red-500 hover:text-yellow-600">
              {" "}
              Info@kppl.pk
            </span>
          </li>
          <li className="text-lg text-gray-700 hover:text-gray-900">
            <strong>Phone No: </strong>{" "}
            <span className="text-red-500 hover:text-yellow-600">
              {" "}
              0092345-8482135
            </span>
          </li>
        </ul>
        <div className="mt-10">
          <p className="text-lg text-gray-700 hover:text-gray-900 mr-20">
            Investment opportunities are open. There is a great need for
            certified business partners in the near future to meet the growing
            demand of Lubricants, Engineering consultant and ongoing Supply from
            numerous venders.{" "}
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="https://wa.me/923458482135?text=Assalam o Alaikum!"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-red-500 hover:bg-yellow-500 items-center text-center font-medium text-white rounded-lg"
          >
            Contact Us
          </Link>
        </div>
        <div className="relative flex space-x-2 mt-10 icon-style-fill">
          <div className="flex items-center justify-center p-3 w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="flex items-center justify-center p-2  w-9 h-9 rounded-full bg-blue-400 text-white hover:bg-blue-500">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="flex items-center justify-center p-2 w-9 h-9 rounded-full bg-gray-500 text-white hover:bg-gray-600">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="flex items-center justify-center p-2 w-9 h-9 rounded-full bg-red-600 text-white hover:bg-red-700">
            <FontAwesomeIcon icon={faPinterest} />
          </div>
          <div className="flex items-center justify-center p-2 w-9 h-9 rounded-full bg-blue-700 text-white hover:bg-blue-800">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/petrol.jpg"
          alt=""
          width={505}
          height={454}
          className="h-full"
        />
      </div>
    </div>
  );
}
