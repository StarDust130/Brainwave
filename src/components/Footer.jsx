import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className={"!px-0 !py-10"}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col  ">
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear} All Right Reserved by{" "}
          <a
            className="font-bold  hover:text-yellow-500"
            href="https://github.com/StarDust130"
            target="_blank"
          >
            StarDust🌟
          </a>
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={"https://github.com/StarDust130"}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 transation-colors rounded-full bg-n-8 hover:bg-n-7"
              >
                <img
                  src={social.iconUrl}
                  width={20}
                  height={20}
                  alt={social.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
export default Footer;
