export default function SecondaryButton({ children }) {
  return (
    <button className="text-white uppercase border-4 w-fit py-2 px-6 font-semibold tracking-wider text-lg">
      {children}
    </button>
  );
}
