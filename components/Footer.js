import PrimaryButton from "./ButtonPrimary";

export default function Footer() {
  return (
    <footer>
      <div className="flex uppercase font-light md:mx-24 md:my-16 my-8">
        <div className="basis-1/2 flex flex-col justify-between">
          <div className="title secondaryColor md:text-3xl text-xl pb-2">
            Get in Touch
          </div>
          <div className="md:text-base text-xs pb-2">
            <div>Phone: 979-695-8394</div>
            <div>Fax: 979-764-7999</div>
          </div>
          <PrimaryButton
            title="Email Us"
            link="mailto:info@elliscustomhomes.com"
          />
        </div>
        <div className="basis-1/2 flex flex-col items-end justify-evenly">
          <div className="title secondaryColor md:text-3xl text-xl pb-2">
            Connect
          </div>
          <div className="md:text-base text-xs pb-2 text-right">
            <div>4500 Carter Creek Pkwy</div>
            <div>Suite 106</div>
            <div>Bryan, Tx 77802</div>
          </div>
          <div className="flex">
            <a
              href="https://www.facebook.com/Ellis-Custom-Homes-LLC-101821225837600/"
              target="_blank"
            >
              <img className="md:h-7 h-5 pr-2" src="facebook_logo.png" />
            </a>
            <a
              href="http://www.houzz.com/pro/elliscustomhomesllc"
              target="_blank"
            >
              <img className="md:h-7 h-5" src="houzz_logo.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="font-thin text-[10px] w-full text-center">
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
