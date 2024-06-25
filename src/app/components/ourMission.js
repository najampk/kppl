import Image from "next/image"
export default function Our_Mission(){
    return(
        <>
            <div className="flex flex-col mx-4 gap-6">
              <div className="w-full">
                <Image
                  src="/our-mission-_-300x300.png"
                  alt="our mission"
                  className="justify-center mx-auto"
                  width={153}
                  height={156}
                />{" "}
              </div>
              <p className="text-center text-neutral-500 mx-2">
                To provide Environmentally Friendly Quality Products and
                Services, to the consumers at competitive prices, through state
                of the art facilities at the retail, reseller and industrial
                level.
              </p>
            </div>
        </>
    )
}