import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee, getEmployees } from "../stores/actionCreator";


const Home = () => {
    const dispatcher = useDispatch()
    const { employees } = useSelector( state => state.employees )
    useEffect(() => {
        dispatcher(getEmployees())
    }, []);

    const buttonEmployee = (id) => {
        dispatcher(deleteEmployee(id))
    }
    
    return (
        <div className="w-full pt-[80px] flex flex-col items-center justify-center">
            <div className="w-[80%] flex justify-between items-center my-[10px]">
                <p className="text-3xl font-bold">Employee</p>
                <Link to={'/add-employee'} className="px-4 py-[8px] bg-cyan-900 rounded-xl hover:bg-cyan-700 duration-200 text-white">Add Employee</Link>
            </div>
            <table className="w-[80%]">
                <thead>
                    <tr>
                        <th className="px-2 py-2 border-b-2">No</th>
                        <th className="px-8 py-2 border-b-2">Name</th>
                        <th className="px-8 py-2 border-b-2">Age</th>
                        <th className="px-8 py-2 border-b-2">Gender</th>
                        <th className="px-8 py-2 border-b-2">Date of Birth</th>
                        <th className="px-8 py-2 border-b-2">Address</th>
                        <th className="px-8 py-2 border-b-2">Position</th>
                        <th className="px-8 py-2 border-b-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => {
                        return (
                            <tr key={index} className="">
                                <td className="px-8 py-2 border-b">{index + 1}</td>
                                <td className="px-8 py-2 border-b">{employee.nama}</td>
                                <td className="px-8 py-2 border-b">{employee.age}</td>
                                <td className="px-8 py-2 border-b">{employee.gender}</td>
                                <td className="px-8 py-2 border-b">{employee.tanggal_lahir.slice(0,10)}</td>
                                <td className="px-8 py-2 border-b">{employee.alamat}</td>
                                <td className="px-8 py-2 border-b">{employee.Position.nama_jabatan}</td>
                                <td className="px-8 py-2 border-b ">
                                    <Link to={`/${employee.id}`} href="" className="px-2 text-blue-800 hover:text-blue-400">Edit</Link>
                                    <button onClick={() => buttonEmployee(employee.id)} href="" className="px-2 text-red-800 hover:text-red-400">Delete</button>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;