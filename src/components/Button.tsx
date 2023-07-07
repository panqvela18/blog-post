export default function Button({ text }: { text: string }) {
  return (
    <button className="px-12 py-4 bg-yellow text-black font-bold">
      {text}
    </button>
  );
}
