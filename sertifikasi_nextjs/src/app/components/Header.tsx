export default function Header() {
    return (
        <>
            <div className="w-screen p-8 bg-slate-800 flex justify-between items-center">
                <div>
                    <p className="font-bold text-white text-lg">
                        VINCENT
                    </p>
                </div>
                <div>
                    <ul className="flex space-x-8">
                        <li className="font-bold text-white text-lg">
                            HOME
                        <div className="w-14 border-2 mb-8"/>
                        </li>
                        <li className="font-bold text-white text-lg">
                            TECHS
                        <div className="w-15 border-2 mb-8"/>
                        </li>
                        <li className="font-bold text-white text-lg">
                            BIOGRAPHY
                        <div className="w-26 border-2 mb-8"/> 
                        </li>
                        <li className="font-bold text-white text-lg">
                            CONTACTS
                        <div className="w-24 border-2 mb-8"/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}