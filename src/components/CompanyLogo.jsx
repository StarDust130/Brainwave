
import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50  ">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem] transform transition-transform hover:scale-105 cursor-none" 
          >
            <img
              src={logo}
              width={134}
              height={28}
              className="pointer-events-none "
              alt="companyLogo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CompanyLogo;
