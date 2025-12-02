export default function Cases() {
  const cases = [
    "Relocation",
    "Adoption",
    "Child Custody",
    "Child Support",
    "Divorce",
    "Father's Rights",
    "Grandparents Rights",
    "Legal Separation",
    "Marital & Premarital Agreements",
    "Maintenance",
    "Parenting Time",
    "Property Division",
  ];
  return (
    <div className=" bg-[#09061f] py-12">
      <div>
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold ">
            Divorce & Family Law - Cases We Handle
          </h1>
          <h2 className="text-lg text-stone-500 mt-4 font-semibold">
            Turn to us for help with any of the following:
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:mx-28">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-[#1c1a2f] p-4 text-center h-28 rounded-md hover:bg-[#2d2b48] transition "
            >
              <p className="text-white font-bold text-xl">{caseItem}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
