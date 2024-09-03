

export function AdminPackageCard ({senderName,timestamp,title,origin,dest}) {
   return(
    

                <div className="grid grid-cols-3 gap-6 border border-gray-400 p-4 rounded-md cursor-pointer mb-4">
                    <p className="col-span-2">
                        <span className="text-md text-gray-800">Johnson Wale</span>
                        <span  className="text-md text-gray-600">Create</span>
                        <span className="text-md text-gray-800">{title}</span>
                    </p>

                    <blockquote className="grid grid-cols-2 gap-4 border-gray-400 p-4 rounded-md">
                        <p className="flex flex-col gap-2 p-4 bg-gray-400 rounded-md">
                            <span className="text-gray-800 text-md">Origin</span>
                            <span className="text-gray-800 text-xl uppercase">{origin}</span>
                        </p>
                        <p className="flex flex-col gap-2 p-4 bg-gray-400 rounded-md">
                            <span className="text-gray-800 text-md ">Destination</span>
                            <span className="text-gray-800 text-xl uppercase">{dest}</span>
                        </p>
                    </blockquote>
                </div>
   ) 
}