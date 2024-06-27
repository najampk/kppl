"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="bg-black h-full">
          <div className="flex md:flex-row flex-col gap-6 justify-evenly pt-10 mx-auto w-[80%]">
            <div className="md:w-[40%] flex flex-col gap-6">
              <div>
                <h1 className="text-white font-semibold text-2xl">
                  ABOUT KPPL
                </h1>
                <div className="bg-neutral-500 w-12 h-1 mt-2"></div>
              </div>
              <p className="text-white">
                To make a valuable contribution in the Petroleum Industry of
                Pakistan, through a profitable Venture, by providing an
                effective platform to the Pakistani Human Resource for gainful
                employment, opportunity in training, self development and
                personal growth, which leads to self actualization and
                enhancement of self esteem.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-white font-semibold text-2xl">CORPORATE</h1>
                <div className="bg-neutral-500 w-12 h-1 mt-2"></div>
              </div>
              <p className="text-white">
                <strong>OGRA License NO:</strong> OGRA-OIL-19-3/(140)/2017
                <br />
                <strong>INCORPORATION NO:</strong>0103725 NTN-7906713-6
                <br />
                <strong>GENERAL SALES TAX NO:</strong>3277876202342
                <br />
                LAHORE CHAMBER OF COMMERCE AND INDUSTRY’S<br/>
                MEMBERSHIP NO.108863-A
              </p>
            </div>{" "}
          </div>
          <div className="justify-center mx-auto w-full py-10">
            <Image
              src="/khyber-fotter-logo.png"
              alt="Khyber Petroleum"
              width={250}
              height={140}
              className="cursor-pointer justify-center mx-auto"
              title="Khyber Petroleum"
            />
          </div>
        </div>
        <div className="bg-neutral-800 h-full py-4">
          <ul className="flex flex-wrap w-full sm:mx-auto mx-2 text-sm justify-center md:gap-6 gap-3 py-2">
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/our-company">About</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href= "/management">Management</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/province-storage">Storage & Sites</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/hse">HSE</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/investors-relations">Invertor Realtions</Link>
            </li>
            <li className="text-neutral-400 uppercase hover:text-white">
              <Link href="/contact-us">cONTACT uS</Link>
            </li>            
          </ul>
          <div className="text-white text-center">Copyright 2024 ©<strong> Khyber Petroleum</strong> Pvt Ltd.</div>
        </div>
      </div>
    </>
  );
}
