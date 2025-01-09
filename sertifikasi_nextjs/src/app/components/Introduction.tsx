import Image from "next/image";

export default function Introduction() {
    return (
        <>
            <div className="w-screen h-[500px] bg-slate-800 p-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <p className=" bg-slate-800 text-white font-bold">
                                TEKNIK INFOMATIKA
                            </p>
                            <h2 className="font-bold text-xl text-[#79D7BE]">HELLO, MY NAME IS </h2>
                            <h2 className="font-bold text-7xl text-[#79D7BE]">VINCENT 林志华</h2>
                        </div>
                        <div className="my-8">
                            <p className="text-white max-w-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veritatis ipsam ut minima sapiente expedita in, laudantium aut amet totam, 
                                delectus illo ea est id necessitatibus nostrum unde natus impedit voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="relative w-96 h-96">
                        <Image
                                src={"/img/gambar.jpg"} 
                                alt="VINCENT 林志华" 
                                fill={true} 
                                priority={true} 
                            className="rounded-3xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}