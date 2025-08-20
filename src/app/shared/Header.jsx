import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-center gap-4  items-center p-4 bg-gray-800 text-white">
      <Link className="hover:underline" href="/">Home</Link>
      <Link className="hover:underline" href="/passages">Passages</Link>
    </nav>
  );
}
