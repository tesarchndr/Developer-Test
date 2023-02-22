import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../stores/actionCreator";

const FormDepartment = () => {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const [newDepartment, setNewDepartment] = useState({
        nama_department: ''
    })

    const clickAddForm = (e) => {
        e.preventDefault()
        dispatcher(createDepartment(newDepartment))
        .then(() => {
            navigate('/department')
        })
    }
    return (
        <div className="w-full pt-[80px] flex justify-center">
        <div className="w-[50%] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-2xl font-semibold mb-2">Add Department</h1>
            </div>
            <form action="" className="w-[70%]">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold">Nama :</label>
                    <input type="text" name="name" id="name" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                        setNewDepartment({
                            nama_department: event.target.value
                        })
                    }}/>
                </div>
                <div className="flex justify-center mt-4 w-full">
                    <button onClick={clickAddForm} className="w-full bg-cyan-900 hover:bg-cyan-700 text-white px-4 py-[5px] rounded-xl">Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default FormDepartment