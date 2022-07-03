export default function PrimaryButton({ title, link }) {
  return (
    <button className="bg-[#544953] text-white uppercase font-thin tracking-wider md:text-lg text-sm px-6 py-2 w-fit">
      <a href={link}>{title}</a>
    </button>
  );
}
