import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const copyText = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        console.log([...passwordArray, form])
    }

    const deletePassword = (id) => {
        console.log("Deleting password with id:", id);
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        // localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        // console.log([...passwordArray, form])
    }

    const editPassword = (id) => {
        console.log("editing password with id:", id);
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        // localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        // console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="mycontainer">
                <h1 className="text-4xl font-bold py-2 border border-white text-center"> <span className="py-2 border border-white text-green-500">&lt;</span>
                    Pass<span className="py-2 border border-white text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 py-2 border border-white text-lg text-center">Your own Password Manager</p>

                <div className="py-2 border border-white text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
                    <div className="flex w-full gap-8">
                        <input value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />
                            <span className='absolute right-[3px] top-[6px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className="px-2" width={35} src="icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 rounded-full px-8 py-2 w-fit hover:bg-green-300 border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save</button>

                </div>
                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className="bg-green-800 py-2 border border-white text-white">
                            <tr>
                                <th className="py-2">Site</th>
                                <th className="py-2">Username</th>
                                <th className="py-2">Password</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-100">
                            {passwordArray.map((item, index) => {
                                return <tr key={index} className="hover:bg-green-200 transition-all duration-300">
                                    <td className="flex items-center justify-center py-2 border border-white text-center">
                                        <div className="flex justify-center items-center">
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconCopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", }} src="https://cdn.lordicon.com/fjvfsqea.json" trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="items-center py-2 border border-white text-center">
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className='lordiconCopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", }} src="https://cdn.lordicon.com/fjvfsqea.json" trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white text-center">
                                        <div className="flex justify-center items-center">
                                            <span>{item.password}</span>
                                            <div className='lordiconCopy size-7 cursor-pointer ' onClick={() => { copyText(item.password) }}>
                                                <lord-icon style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", }} src="https://cdn.lordicon.com/fjvfsqea.json" trigger="hover"></lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white text-center">
                                        <span className='cursor-pointer mx-2' onClick={() => {editPassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-2' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="morph"
                                                state="morph-trash-in"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager 