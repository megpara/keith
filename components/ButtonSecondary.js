import Link from "next/link";

export default function SecondaryButton({ title, link }) {
  return (
    <button className="text-white uppercase border-4 w-fit py-2 px-6 font-semibold tracking-wider text-lg">
      <Link href={link}>{title}</Link>
    </button>
  );
}
