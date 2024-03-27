import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2   ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex  ">
          <img
            src={smallSphere}
            alt="smallSphere"
            className="relative z-1 "
            width={225}
            height={225}
          />

          <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-spin-slow">
            <img
              src={stars}
              alt="stars"
              className="w-full "
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title={"Pay once, use forever"}
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10 ">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b "
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};
export default Pricing;
