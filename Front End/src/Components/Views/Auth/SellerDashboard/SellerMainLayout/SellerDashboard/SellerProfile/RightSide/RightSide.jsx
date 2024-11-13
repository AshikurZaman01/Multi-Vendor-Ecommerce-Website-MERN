
const RightSide = () => {
    return (
        <div>
            <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 shadow-lg rounded-md ">
                <form className="shadow-md bg-gray-300 p-4 rounded-md">

                    <div>
                        <h1 className="my-2 capitalize font-semibold text-blue-500">Change Password</h1>
                    </div>

                    <div className='flex flex-col w-full gap-3'>
                        {/* Edit email */}
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                        />

                        {/* Edit old password */}
                        <label htmlFor="oldPassword" className="font-semibold">Old Password</label>
                        <input
                            type="text"
                            id="oldPassword"
                            name="oldPassword"
                            className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                        />

                        {/* new password */}
                        <label htmlFor="newpassword" className="font-semibold">New Password</label>
                        <input
                            type="text"
                            id="newPassword"
                            name="newPassword"
                            className='px-4 py-2 border focus:border-indigo-500 rounded-md'
                        />


                        <div>
                            <button className='w-full btn btn-sm btn-primary mt-4 capitalize'>Save Changes</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default RightSide