import PrimaryButton from "./ButtonPrimary";

export default function Footer() {
  return (
    <footer>
      {/* <footer className="bg-[#544953]"> */}
      <div className="flex font-light md:mx-24 mx-8 py-24">
        <div className="basis-1/2 flex flex-col justify-between">
          <div className="title secondaryColor uppercase font-extralight tracking-widest md:text-4xl text-base pb-2">
            Get in Touch
          </div>
          <div className="text-base font-thin pb-2">
            <div>Phone: 979-695-8394</div>
            <div>Fax: 979-764-7999</div>
          </div>
          <PrimaryButton
            title="Email Us"
            link="mailto:info@elliscustomhomes.com"
          />
        </div>
        <div className="basis-1/2 flex flex-col items-end justify-evenly">
          <div className="title secondaryColor uppercase font-extralight tracking-widest md:text-4xl text-base pb-2">
            Connect
          </div>
          <div className="text-base font-thin pb-2 text-right">
            <div>118 S. Main Street</div>
            <div>Suite A</div>
            <div>Bryan, TX 77803</div>
          </div>
          <div className="flex">
            <a
              href="https://www.facebook.com/Ellis-Custom-Homes-LLC-101821225837600/"
              target="_blank"
            >
              <img
                className="md:h-7 h-5 pr-2 opacity-75 hover:opacity-100"
                src="facebook_logo.png"
              />
            </a>
            <a
              href="http://www.houzz.com/pro/elliscustomhomesllc"
              target="_blank"
            >
              <img
                className="md:h-7 h-5 opacity-75 hover:opacity-100"
                src="houzz_logo.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="font-thin text-[10px] md:mx-24 mx-4 pb-[20px] tracking-wide">
        © Ellis Custom Homes. Site by{" "}
        <a
          className="underline decoration-from-font"
          href="http://www.meganparadowski.com"
        >
          Megan Paradowski
        </a>
        .
      </div>
    </footer>
  );
}
