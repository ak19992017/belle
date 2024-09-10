import Image from "next/image";

const Landing = () => {
    return (
        <div>
            <div className="section" style={{ backgroundImage: "linear-gradient( 135deg, #FFF886 10%, #F072B6 100%)" }}>
                <h1>Hero</h1>
            </div>

            <div style={{ backgroundImage: "linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" }}
                className="section">
                <h1>Skills</h1>
                <p>Introduce with your</p>
            </div>

            <div style={{ backgroundImage: "linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)" }} className="section">
                <h1>Projects</h1>
                <p> List some good things</p>
            </div >
        </div>
    );
}

export default Landing;


