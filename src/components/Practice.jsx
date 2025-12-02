/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Practice1 from "../../public/img/practice-1.jpg";
import drug from "../../public/img/drug.jpg";
import trffic from "../../public/img/traffic.webp";
import domestic from "../../public/img/domestic.webp";
export default function Practice() {
  return (
    <div className=" mt-12 bg-[#09061f] py-12">
      <div className="lg:mx-28 ">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-extrabold ">OUR PRACTICE AREAS</h1>
          <p className="text-stone-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Tenetur eligendi architecto voluptatibus aliquid quibusdam culpa.
          </p>
        </div>
        <div className="lg:flex justify-between max-sm:p-4">
          <div className="card lg:w-64 bg-base-100 hover:scale-105 duration-200">
            <div className="card-body">
              <h2 className="card-title">Bail & Warrants</h2>
              <p>
                A derivative that gives the holder the right, but not the
                obligation, to buy or sell a security at a certain price before
                expiration.
              </p>
            </div>
            <figure>
              <Image
                src={Practice1}
                alt="Banner Image"
                width={400}
                height={400}
                layout="responsive"
              />
            </figure>
          </div>
          <div className="card lg:w-64 bg-base-100 hover:scale-105 duration-200 max-sm:my-4">
            <div className="card-body">
              <h2 className="card-title">Domestic Crimes</h2>
              <p>
                A domestic crime is generally defined as an incident of violence
                that causes actual physical injury, or the imminent threat.
              </p>
            </div>
            <figure>
              <Image
                src={domestic}
                alt="Banner Image"
                width={400}
                height={400}
                // layout="responsive"
              />
            </figure>
          </div>
          <div className="card lg:w-64 bg-base-100 hover:scale-105 duration-200">
            <div className="card-body">
              <h2 className="card-title">Other Crimes</h2>
              <p>
                Other crimes can be anything from example to example. Filler text or filler text. Please contact us if you need any help with 
                things like this.{" "}
              </p>
            </div>
            <figure>
              <Image
                src={drug}
                alt="Banner Image"
                width={400}
                height={400}
                layout="responsive"
              />
            </figure>
          </div>
          <div className="card lg:w-64 bg-base-100 hover:scale-105 duration-200 max-sm:mt-4">
            <div className="card-body">
              <h2 className="card-title">Traffic Crimes</h2>
              <p>
                A traffic offense is generally considered a crime if it's
                punishable by imprisonment. Criminal traffic offenses are
                classified as either misdemeanors
              </p>
            </div>
            <figure>
              <Image
                src={trffic}
                alt="Banner Image"
                width={400}
                height={400}
                layout="responsive"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
