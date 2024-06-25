import Image from "next/image"
export default function Our_vision(){
    return(
        <>
            <div className="flex flex-col gap-6 sm:mx-auto mx-4">
              <div className="w-full">
                <Image
                  src="/our-vision-kppl-pk-300x300.png"
                  alt="our vision"
                  className="justify-center mx-auto"
                  width={153}
                  height={156}
                />
              </div>
              <p className="mx-auto text-center text-neutral-500 mx-2">
                To make a valuable contribution in the Petroleum Industry of
                Pakistan, through a profitable Venture, by providing an
                effective platform to the Pakistani Human Resource for gainful
                employment, opportunity in training, self development and
                personal growth, which leads to self actualization and
                enhancement of self esteem.
              </p>
            </div>
        </>
    )
}