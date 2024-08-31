import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return <div className="p-2">
        <Link href={'/'}>
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={20}
                priority
            />
            {/* <h2>Aloha</h2> */}
        </Link>
    </div>;
}

export default Logo;