function HeaderIcon({Icon, selected}) {
    return (
        <div className= {`flex items-center rounded-xl cursor-pointer md:hover:bg-gray-100 md:px-8 md:h-14 border-b-2 border-transparent  active:border-blue-500 text-gray-500 hover:text-blue-500 ${selected && 'text-blue-500'}`}>
            <Icon className="h-7" />
            
        </div>
    )
}

export default HeaderIcon
