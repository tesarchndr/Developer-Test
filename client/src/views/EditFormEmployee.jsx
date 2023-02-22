import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDepartments, getOneEmployee, getPosition, updateEmployee } from "../stores/actionCreator";
import { useNavigate, useParams } from "react-router-dom"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const EditFormEmployee = () => {
    const {id} = useParams()
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const { departments } = useSelector(state => state.departments)
    const { positions } = useSelector(state => state.positions)
    const { employee } = useSelector(state => state.employees)
    const [ newEmployee, setNewEmployee ] = useState({
        nama: '',
        age: '',
        gender: 'L',
        tanggal_lahir: '',
        alamat: '',
        id_department: '',
        id_jabatan: ''
    })
    const [ newPosition, setNewPosition ] = useState([])
    
    useEffect(() => {
        dispatcher(getDepartments())
        dispatcher(getPosition())
        dispatcher(getOneEmployee(id))
    }, [])

    useEffect(() => {
        setNewEmployee({
            nama: employee.nama,
            age: employee.age,
            gender: employee.gender,
            tanggal_lahir: employee.tanggal_lahir,
            alamat: employee.alamat,
            id_department: employee.Position?.id_department,
            id_jabatan: employee.Position?.id
        })
        const filterPosition = positions.filter(position => {
            return position?.id_department == employee.Position?.id_department
        })
        setNewPosition(filterPosition)
    }, [employee])

    useEffect(() => {
        const filterPosition = positions.filter(position => {
            return position.id_department == newEmployee.id_department
        })
        setNewEmployee({
            ...newEmployee,
            id_jabatan: filterPosition[0]?.id
        })
        setNewPosition(filterPosition)
    }, [newEmployee.id_department])

    const clickAddForm = (e) => {
        if (isNaN(+newEmployee.age)) {
            console.log ('harus angka');
        }
        e.preventDefault()
        dispatcher(updateEmployee(newEmployee, id))
        .then (res => {
            navigate('/')
        })
    }
    return (
        <div className="w-full pt-[80px] flex justify-center">
            <div className="w-[50%] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Add Employee</h1>
                </div>
                <form action="" className="w-[70%]">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold">Nama :</label>
                        <input type="text" name="name" id="name" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                nama: event.target.value
                            })
                        }}
                        defaultValue={newEmployee.nama}/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="age" className="mb-2 font-semibold">Age :</label>
                        <input type="text" name="name" id="name" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                age: event.target.value
                            })
                        }}
                        defaultValue={newEmployee.age}/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="date" className="mb-2 font-semibold">Tanggal Lahir :</label>
                        <input type="date" name="date" id="date" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                tanggal_lahir: event.target.value
                            })
                        }}
                        defaultValue={newEmployee.tanggal_lahir.slice(0,10)}/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="address" className="mb-2 font-semibold">Alamat :</label>
                        <textarea name="address" id="address" cols="30" rows="10" className="px-4 py-[5px] h-[100px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                alamat: event.target.value
                            })
                        }}
                        defaultValue={newEmployee.alamat}></textarea>
                    </div>
                    <div className="mt-2">
                        <label className="mb-2 mr-6 font-semibold">Jenis Kelamin :</label>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={newEmployee.gender}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="P" control={<Radio size="small"/>} label="Perempuan"  className="text-[7px]" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                gender: 'P'
                            })
                        }}/>
                        <FormControlLabel value="L" control={<Radio size="small"/>} label="Laki-Laki" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                gender: 'L'
                            })
                        }}/>
                    </RadioGroup>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="position" className="mb-2 font-semibold">Departemen :</label>
                        <select name="position" id="position" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                id_department: event.target.value
                            })
                        }}>
                            {departments.map(department => {
                                return (
                                    <option key={department.id} value={department.id} selected={department.id == newEmployee.id_department ? 'selected' : ''}>{department.nama_department}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="position" className="mb-2 font-semibold">Jabatan :</label>
                        <select name="position" id="position" className="px-4 py-[5px] border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-900" onChange={(event)=>{
                            setNewEmployee({
                                ...newEmployee,
                                id_jabatan: event.target.value
                            })
                        }}>
                            {newPosition?.map(position => {
                                console.log(position);
                                return (
                                    <option key={position.id} value={position.id} selected={position.id == newEmployee.id_jabatan ? 'selected' : ''}>{position.nama_jabatan} </option>
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
    )
}

export default EditFormEmployee