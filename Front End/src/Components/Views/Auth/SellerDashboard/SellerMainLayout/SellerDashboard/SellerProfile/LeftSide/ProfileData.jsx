import { FaRegEdit } from 'react-icons/fa'

const ProfileData = ({ status, userInfo }) => {
    return (
        <div className="px-0 md:px-5 py-2">

            <div className="flex justify-between text-sm flex-col gap-2 p-4 rounded-md shadow-md relative">
                {/* Edit Icon */}
                <span className="">
                    <FaRegEdit className="absolute cursor-pointer text-2xl text-yellow-400 rounded hover:shadow-yellow-500/50 right-2 top-2" />
                </span>

                {/* User Information */}
                <div className="flex flex-col gap-2 space-y-1 p-2">
                    <span><span className="font-semibold">Name</span> : Ashik</span>
                    <span><span className="font-semibold">Email</span> : ashik@gmail.com</span>
                    <span><span className="font-semibold">Role</span> : seller</span>
                    <span><span className="font-semibold">Status</span> : active</span>
                    <span><span className="font-semibold">Payment Account</span> :
                        <span className={`px-2 py-1 font-semibold rounded text-white capitalize m-1
                            ${status === "active" ? "bg-green-500" : "bg-red-500 cursor-pointer "}`}>
                            {status === "active" ? "Pending" : "Click Active"}
                        </span>
                    </span>
                </div>
            </div>

            {/* Form to Edit User Info */}
            <div className='px-0  py-2'>
                {
                    userInfo ?

                        (
                            <div className="flex justify-between text-sm flex-col gap-2 p-4 rounded-md shadow-md relative">
                                {/* Edit Icon */}
                                <span className="">
                                    <FaRegEdit className="absolute cursor-pointer text-2xl text-yellow-400 rounded hover:shadow-yellow-500/50 right-2 top-2" />
                                </span>

                                {/* User Information */}
                                <div className="flex flex-col gap-2 space-y-1 p-2">
                                    <span><span className="font-semibold">Shop Name</span> : Ashik Shop</span>
                                    <span><span className="font-semibold">Division Name</span> : Khulna</span>
                                    <span><span className="font-semibold">District Name</span> : KUET</span>
                                    <span><span className="font-semibold">SUB-District</span> : khulna</span>
                                </div>
                            </div>
                        )

                        :

                        (
                            <form className="shadow-md bg-gray-300 p-4 rounded-md">
                                <div className='flex flex-col w-full gap-3'>
                                    {/* Edit shopName */}
                                    <label htmlFor="shop_name" className="font-semibold">Shop Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        defaultValue={userInfo.shopName || ''}
                                        className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                                    />

                                    {/* Edit Email */}
                                    <label htmlFor="division" className="font-semibold">Division Name</label>
                                    <input
                                        type="text"
                                        id="division"
                                        name="division"
                                        defaultValue={userInfo.divison || ''}
                                        className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                                    />

                                    {/* district name */}
                                    <label htmlFor="district" className="font-semibold">District Name</label>
                                    <input
                                        type="text"
                                        id="district"
                                        name="district"
                                        defaultValue={userInfo.district || ''}
                                        className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                                    />

                                    {/* subdistrict name */}
                                    <label htmlFor="district" className="font-semibold">District Name</label>
                                    <input
                                        type="text"
                                        id="subDistrict"
                                        name="subDistrict"
                                        defaultValue={userInfo.subDistrict || ''}
                                        className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                                    />

                                    <div>
                                        <button className='w-full btn btn-sm btn-primary mt-4 capitalize'>Save Changes</button>
                                    </div>

                                </div>
                            </form>
                        )
                }
            </div>
        </div>
    )
}

export default ProfileData;
