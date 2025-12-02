import Image from "next/image";
import React from "react";
import profile2 from "../../public/img/profile2.png";

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "He worked very diligently in a case of my grandchildren and the return of custody to their parents",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "The outcome was great. We are very pleased with our experience with Denver Family Lawyers.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment:
        "We are very pleased with our experience with Denver Family Lawyers. We would recommend them to anybody going through a divorce.",
    },
    {
      id: 4,
      name: "Bob Anderson",
      comment:
        "Bill helped during a very difficult time, they were always very open and willing to take on the issues, was very pleased that.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 max-sm:px-4">
      <h1 className="text-center text-4xl font-bold mb-8">What People Say</h1>
      <div className="lg:mx-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {testimonies.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-md shadow-md hover:scale-105 duration-200"
          >
            <div className="flex items-center mb-4">
              <div className="avatar ">
                <div className="w-16 rounded-full">
                  <Image
                    src={profile2}
                    width={"100"}
                    height={"100"}
                    alt="imagee"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold ml-2">{testimonial.name}</h3>
            </div>

            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
