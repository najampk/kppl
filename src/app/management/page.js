import Image from "next/image";
import Head from "next/head";
export default function Management() {
  return (
    <div className="mt-20 py-20 max-w-[1080px] mx-auto w-full">
      <Head>
        <title>Management | Khyber Petroleum Pvt Ltd.</title>
        <meta
          name="description"
          content="Meet the directors of Khyber Petroleum Pvt Ltd., Mr. Abrar Jillani and Mr. Sohail Ahmed Naseem, who lead our company with vision and expertise."
        />
        <meta
          name="keywords"
          content="Khyber Petroleum, Management, Directors, Abrar Jillani, Sohail Ahmed Naseem, Leadership"
        />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta
          property="og:title"
          content="Management | Khyber Petroleum Pvt Ltd."
        />
        <meta
          property="og:description"
          content="Get to know the leadership team at Khyber Petroleum Pvt Ltd. and their roles in guiding the company's success."
        />
        <meta property="og:image" content="/management.jpg" />
        <meta property="og:url" content="https://www.kppl.pk/management" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Management | Khyber Petroleum Pvt Ltd."
        />
        <meta
          name="twitter:description"
          content="Learn about the management team at Khyber Petroleum Pvt Ltd., including our directors Mr. Abrar Jillani and Mr. Sohail Ahmed Naseem."
        />
        <meta name="twitter:image" content="/management.jpg" />
      </Head>
      <h1 className="text-left uppercase  sm:text-2xl text-xl font-bold text-slate-900 my-4">
        Directors KPPL Pvt Ltd.
      </h1>
        
          
                        {/* <!-- Founder Message Homepage 1 --> */}
                        <div className="container w-full my-12 mx-auto md:px-6">
                          {/* <!-- Section: Design Block --> */}


                            <div className="grid xl:grid-cols-2 gap-x-6">


                            <section className="mb-8 text-center md:text-left">
                            <div
                              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                              
                              
                                <div className="w-full shrink-0 grow-0 basis-auto pt-10 ">

                                

                                      <div className="xl:w-80 xl:h-80 w-60 h-60 mx-auto rounded-full bg-cover" style={{backgroundImage:"url('sohail-ahmad-naseem-khyber-petroleum-owner.webp')"}}>

                                      </div>


                                  <div className="px-6 py-12 md:px-12 text-center">
                                    <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                    Sohail Ahmad Naseem 
                                    </h2>
                                     
                                  
                                    
                                    
                                  </div>
                                </div>
                            
                            </div>
                          </section>

                          <section className="mb-8 text-center md:text-left">
                            <div
                              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                              
                              
                                <div className="w-full shrink-0 grow-0 basis-auto pt-10 ">

                                

                                      <div className="xl:w-80 xl:h-80 w-60 h-60  mx-auto rounded-full bg-cover" style={{backgroundImage:"url('abrar-jilani-khyber-petroleum-director.webp')"}}>

                                      </div>


                                  <div className="px-6 py-12 md:px-12 text-center">
                                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                    Abrar Jilani
                                    </h2>
                                    
                                    
                                    
                                  </div>
                                </div>
                            
                            </div>
                          </section>
                          
                              </div>
                            </div>
    </div>
  );
}
