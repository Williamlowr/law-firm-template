import Image from "next/image";
import profile from "../../public/img/profile.jpg";
export default function Profile() {
  return (
    <div className="lg:mx-28  lg:flex ">
      <Image
        src={profile}
        alt="Banner Image"
        width={400}
        height={300}
        className="rounded-lg"
      />
      <div className="lg:ml-8 lg:w-2/4 max-sm:text-center max-sm:p-4">
        <h1 className="text-4xl font-extrabold">
          WELCOME TO <br /> FAMILY LAWYER GROUP
        </h1>
        <h2 className="text-stone-500">
          {" "}
          TEXAS DIVORCE AND FAMILY LAW ATTORNTES{" "}
        </h2>
        <hr className="my-4 border-2 " />
        <p>
          If you are going through the process of a divorce , a dispute over
          child custody , or any other family law matter, our team at Denver
          Family Lawyers can serve you. For more than 20 years, our accomplished
          family law attorney has provided aggressive representation in both
          litigation and mediation. When you need an experienced attorney who
          will work with you to serve the interest of you and your family, you
          can turn to our staff.
        </p>
        <p>
          While many attorneys might be focused on a legal matter as quickly as
          possible, our divorce attorney in Denver, CO is committed to ensuring
          that each of our clients receives compassionate, aggressive, and
          personalized legal services.
        </p>
      </div>
    </div>
  );
}
