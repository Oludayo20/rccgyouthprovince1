import Image from "next/image";
import { pastors } from "../../data/pastors";

const Footer: React.FC = () => {
  return (
    <div className="container w-full items-center justify-between relative z-10 md:p-12 p-2">
      <div className="flex items-center justify-between text-[#222222] w-full text-[3.5rem] mb-14">
        <h1>Meet Our Pastors</h1>
        <div className="border-b border-gray-400 w-[60%]"></div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastors.map((pst) => (
          <div
            className="relative w-full rounded-[2rem] overflow-hidden group"
            key={pst.id}
          >
            <Image
              src={pst.pic}
              alt={pst.name}
              width={100}
              height={100}
              className="h-auto w-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
              <h3 className="text-lg font-semibold">{pst.name}</h3>
              <p className="text-sm">{pst.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
