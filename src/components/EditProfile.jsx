import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editUserAPI } from '../server/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import serverURL from '../server/serverURL'

function EditProfile() {
    const [userDetails, setUserDetails] = useState({
        id: "", username: "", password: "", role: "", bio: "", picture: ""
    })
    const [existingPicture, setExistingPicture] = useState("")
    const [preview, setPreview] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio })
            setExistingPicture(user.picture)
        }
    }, [])

    const handleUploadPicture = (imgFile) => {
        setUserDetails({ ...userDetails, picture: imgFile })
        const url = URL.createObjectURL(imgFile)
        setPreview(url)
    }

    const checkPasswordMatch = (data) => {
        setConfirmPassword(data)
        userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
    }


    const handleProfileUpdate = async () => {
        const { username, password, bio, role, id, picture } = userDetails
        if (!username || !password || !bio || !confirmPassword) {
            toast.info("Please fill the form completely!!!")
        } else {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    'Authorization': `Bearer ${token}`
                }
                const reqBody = new FormData()
                for (let key in userDetails) {
                    if (key != "picture") {
                        reqBody.append(key, userDetails[key])
                    } else {
                        preview ? reqBody.append("picture", picture) : reqBody.append("picture", existingPicture)
                    }
                }
                const result = await editUserAPI(userDetails.id, reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success("Profile updated successfully...Please login with new password!!!")
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000)
                } else {
                    console.log(result);
                    toast.error("Something went wrong!!!")
                }
            }
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            {/* BACKDROP */}
            <div
                onClick={() => setShowEdit(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></div>

            {/* MODAL */}
            <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-8 z-10">

                <h2 className="text-xl font-bold mb-6 text-center">
                    Edit Profile
                </h2>

                {/* image */}
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="uploadImg">
                        <input onChange={e => handleUploadPicture(e.target.files[0])} type="file" id='uploadImg' hidden />
                        {
                            existingPicture ?
                                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : existingPicture.startsWith("https://lh3.googleusercontent.com/") ? existingPicture : `${serverURL}/uploads/${existingPicture}`} alt="profile" />
                                :
                                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : "https://static.vecteezy.com/system/resources/previews/020/213/738/non_2x/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"} alt="profile" />
                        }
                    </label>
                </div>

                {/* USERNAME */}
                <div className="mb-4">
                    <label className="text-sm font-medium">Username</label>
                    <input
                        value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                        className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>
                {/* PASSWORD */}
                <div className="mb-4">
                    <label className="text-sm font-medium">New Password</label>
                    <input
                        value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
                        className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>
                {/* CONFIRM PASSWORD */}
                <div className="mb-2">
                    <label className="text-sm font-medium">Confirm Password</label>
                    <input
                        value={confirmPassword} onChange={e => checkPasswordMatch(e.target.value)}
                        className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>
                {
                    !passwordMatch && <div className="mb-3 w-full ps-2 text-red-600 text-xs">
                        *Confirm password must match with new password
                    </div>
                }

                {/* BIO */}
                <div className="mb-6">
                    <label className="text-sm font-medium">Bio</label>
                    <textarea
                        rows="3"
                        value={userDetails.bio} onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })}
                        className="w-full mt-2 px-4 py-3 rounded-xl border resize-none focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                        Tell people about yourself
                    </p>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowEdit(false)}
                        className="flex-1 py-3 rounded-xl border hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleProfileUpdate}
                        className={passwordMatch?'flex-1 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition':'flex-1 py-3 rounded-xl bg-gray-500 text-gray-800 transition'}
                    >
                        Save
                    </button>
                </div>
            </div>
            {/* toast */}
                  <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        </div>
    )
}

export default EditProfile