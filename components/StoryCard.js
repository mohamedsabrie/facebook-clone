import Image from 'next/image';
function StoryCard({name, src, profile}) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-48 lg:w-32 mx-1 cursor-pointer hover:animate-pulse group " >
            <div className="flex items-center justify-center opacity-0 lg:opacity-100 absolute top-3 left-3 z-20 border-4 border-blue-500 rounded-full ">
                <Image src={profile}
            width={30}
            height={30}
            className=" rounded-full"
            
            /> 
            </div>
            <div className=" transition transform duration-200 group-hover:scale-[1.03] w-full h-full absolute top-0 left-0 z-10 ">
                <Image
            src={src}

            layout="fill"
            className="rounded-full lg:rounded-lg object-cover filter   brightness-75"
            /> 
            </div>
            <div className=" hidden lg:block absolute bottom-2 left-2 z-20 text-white font-semibold">
                <p>{name}</p>
            </div>
           
            
            
        </div>
    )
}

export default StoryCard
