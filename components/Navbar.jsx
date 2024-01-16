import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center rounded-md bg-lime-500 px-8 py-3">
      <Link className="text-lime-50 text-xl font-bold" href="/">Task List</Link>
      <Link className="bg-lime-700 hover:bg-lime-800 p-2 rounded-md text-lime-50" href="/addtopic">Add Topic</Link>
    </nav>
  );
}