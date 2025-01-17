import TechCard from "./TechCard";

export default function Tech() {
    return(
        <>
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
            <h1 className="text-4xl text-white font-bold mb-4">TECHS</h1>
            <div className="w-32 border-2 mb-8"/>
                <div className="flex justify-center items-center w-full flex-wrap">
                    <TechCard imageURL="/img/C.png" alt="C++" techStack="C++"/>
                    <TechCard imageURL="/img/css.jpeg" alt="CSS" techStack="CSS"/>
                    <TechCard imageURL="/img/html.png" alt="HTML" techStack="HTML"/>
                </div>
            </div>
        </>
    )
}