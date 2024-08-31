import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Header = () => {
    return (
        <div className="flex h-16 px-10 justify-between items-center">
            <Logo />
            <Navlinks />
        </div>
    );
}

export default Header;