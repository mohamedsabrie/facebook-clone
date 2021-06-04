import Image from 'next/image';
function SidebarRow({Icon, title, image}) {
    return (
        <div className="hidden xs:flex items-center space-x-3 p-3 cursor-pointer rounded-md hover:bg-gray-200">
            {image ? (
             <Image
             className="rounded-full "
             src={image}
             height={30}
             width={30}
             layout="fixed"
             />
            ):(
              <Icon className="h-8 text-blue-500" />  
            )}
            



            <p className="hidden sm:inline-flex font-medium">{title}</p>

            
        </div>
    )
}

export default SidebarRow
