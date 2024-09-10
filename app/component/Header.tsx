import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 z-50 bg-white flex h-16 w-screen px-10 justify-between items-center border-b-2 border-neutral-950">
            <Logo />
            <DropdownMenu />
        </div>
    );
}

export default Header;