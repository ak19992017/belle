'use client'
import Link from "next/link";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropdownMenu = () => {
    return <div className="h-full p-2 flex gap-2 items-center ">
        <Tabs />
        <Link href='/about' className="hover:bg-amber-500 p-2 hover:text-white rounded-md">About</Link>
        <Link href='/users' className="hover:bg-amber-500 p-2 hover:text-white rounded-md">Users</Link>
        <Button title='Sign In' />
    </div>;
}

export default DropdownMenu;

const Products = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                {PRODUCTDETAILS.map(t => <Link href={t.link}>
                    <Image src={t.imgUrl} width={100} height={100} className="mb-2 h-14 w-full rounded object-cover" alt="Placeholder image" />
                    <h4 className="mb-0.5 text-sm font-medium">{t.title}</h4>
                    <p className="text-xs text-neutral-400">{t.desc}</p>
                </Link>
                )}
            </div>
            <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
                <span>View more</span>
                <FiArrowRight />
            </button>
        </div>
    );
};

const TABS = [
    {
        title: 'Products',
        Component: Products,
        id: 1
    },
    {
        title: 'Blogs',
        Component: Products,
        id: 2
    },
]

const PRODUCTDETAILS = [
    {
        title: 'Aloha',
        link: '/aloha',
        desc: 'An open-source, cross-platform note-taking application',
        imgUrl: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        title: 'Mitsu',
        link: '/mitsu',
        desc: 'A resource for exploring salary expectations & find job opportunities',
        imgUrl: 'https://images.pexels.com/photos/15851686/pexels-photo-15851686/free-photo-of-pink-flowers-against-a-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        title: 'WikiSearch',
        link: '/wikisearch',
        desc: 'Search Wikipidia with ease',
        imgUrl: 'https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=600'
        
    },
]

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <div onMouseLeave={() => handleSetSelected(null)} className="relative flex h-fit gap-2">
            {TABS.map((t) => {
                return (
                    <button key={t.id} id={`shift-tab-${t.id}`} onMouseEnter={() => handleSetSelected(t.id)} onClick={() => handleSetSelected(t.id)} className='flex items-center gap-1 hover:bg-amber-500 p-2 hover:text-white rounded-md'>
                        <span>{t.title}</span>
                        <FiChevronDown className={`transition-transform ${selected === t.id ? "rotate-180" : ""}`} />
                    </button>
                );
            })}
            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Content = ({ selected, dir }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");
            if (!hoveredTab || !overlayContent) return;
            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
            setLeft(tabCenter);
        }
    };

    return (
        <motion.div id="overlay-content" initial={{ opacity: 0, y: 8, }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg bg-white p-4">
            <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
            <motion.span style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }} animate={{ left }} transition={{ duration: 0.25, ease: "easeInOut" }} className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white" />
            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0, }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};
