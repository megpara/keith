import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute w-full z-10">
      <div className="md:m-10 m-8 flex">
        <div className="basis-1/2 title md:text-5xl text-3xl text-white">
          <Link href="/">EH</Link>
        </div>
        <div className="basis-1/2 flex flex-col items-end">
          <div className="group flex flex-col justify-between h-[25px] w-[35px] items-end">
            <span className="h-[2px] w-full bg-white" />
            <span className="h-[2px] w-[80%] group-hover:w-full bg-white" />
            <span className="h-[2px] w-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
