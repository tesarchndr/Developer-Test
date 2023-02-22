import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { createPosition, getDepartments } from "../stores/actionCreator"

const FormPosition = () => {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const [newPosition, setNewPosition] = useState({
        nama_jabatan: '',
        id_department: ''
    })
    const { departments } = useSelector(state => state.departments)
    useEffect(() => {
        dispatcher(getDepartments())
    }, [])

    const clickAddForm = (e) => {
        e.preventDefault()
        dispatcher(createPosition(newPosition))
        .then(() => {
            navigate('/position')
        })
    }

    return (
        <div className="w-full pt-[80px] flex justify-center">
            <div className="w-[50%] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Add Position</h1>
                </div>
                <form action="" className="w-[70%]">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold">Nama :</label>
                        <input type="text" name="name" id="name" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewPosition({
                                ...newPosition,
                                nama_jabatan: event.target.value
                            })
                        }}/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="position" className="mb-2 font-semibold">Departemen :</label>
                        <select name="position" id="position" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewPosition({
                                ...newPosition,
                                id_department: event.target.value
                            })
                        }}>
                            <option value="" disabled selected>Pilih Departemen</option>
                            {departments.map(department => {
                                return (
                                    <option key={department.id} value={department.id}>{department.nama_department}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex justify-center mt-4 w-full">
                        <button onClick={clickAddForm} className="w-full bg-cyan-900 hover:bg-cyan-700 text-white px-4 py-[5px] rounded-xl">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormPosition;