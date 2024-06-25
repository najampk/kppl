import Image from "next/image";
export default function Our_value() {
  return (
    <>
      <div className="my-10 pt-10 mx-4">
        <h1 className="uppercase text-center text-slate-900 text-2xl font-bold py-4">
          Our Value
        </h1>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="mx-auto">
            <Image
              src="/integrity-2.jpg"
              alt="integrity"
              className="rounded-full justify-center mx-auto my-4"
              width={85}
              height={85}
            />
            <h1 className="text-slate-900 text-2xl text-center my-2">Integrity</h1>
            <p className="text-slate-900 text-center">
              Forming one of the core pillars of our beliefs at Flow. We seek to
              hold ourselves accountable to the highest ethical standards
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/passion-1.jpg"
              alt="passion"
              className="rounded-full justify-center mx-auto my-4"
              width={85}
              height={85}
            />
            <h1 className="text-slate-900 text-2xl text-center my-2">Passion</h1>
            <p className="text-slate-900 text-center">
            We believe passion is at the heart of our company and consistently endeavor to move forward to innovate.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/ethics-1.jpg"
              alt="ethics"
              className="rounded-full justify-center mx-auto my-4"
              width={85}
              height={85}
            />
            <h1 className="text-slate-900 text-2xl text-center my-2">Ethics</h1>
            <p className="text-slate-900 text-center">
            Our principles of transparency, honesty and ethics is the basis of our identity which sets us apart.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/diversity.jpg"
              alt="diversity"
              className="rounded-full justify-center mx-auto my-4"
              width={85}
              height={85}
            />
            <h1 className="text-slate-900 text-2xl text-center my-2">Diversity</h1>
            <p className="text-slate-900 text-center">
            Diversity is not just a value; it is our driving force, fostering innovation and inclusivity in every aspect of our company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
