import Link from "next/link";

const Navlinks = () => {
    return <div className="h-full p-2 flex gap-2 items-center">
        <Link href='/about' className="hover:bg-green-400 p-2 hover:text-white">About</Link>
        <Link href='/users' className="hover:bg-green-500 p-2 hover:text-white">Users</Link>
        <Link href='/wikisearch' className="hover:bg-green-500 p-2 hover:text-white">WikiSearch</Link>
    </div>;
}

export default Navlinks;