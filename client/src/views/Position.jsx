import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePosition, getPosition } from "../stores/actionCreator";

const Position = () => {
    const dispatcher = useDispatch();
    const { positions } = useSelector(state => state.positions)
    useEffect(() => {
        dispatcher(getPosition())
    }, [])

    const handleDelete = (id) => {
        dispatcher(deletePosition(id))
    }
    return (
        <div className="w-full pt-[80px] flex flex-col items-center justify-center">
            <div className="w-[80%] flex justify-between items-center my-[10px]">
                <p className="text-3xl font-bold">Position</p>
                <Link to={'/add-position'} className="px-4 py-[8px] bg-cyan-900 rounded-xl hover:bg-cyan-700 duration-200 text-white">Add Position</Link>
            </div>
            <table className="w-[80%]">
                <thead>
                    <tr>
                        <th className="px-2 py-2 border-b-2">No</th>
                        <th className="px-8 py-2 border-b-2">Name</th>
                        <th className="px-8 py-2 border-b-2">Departemen</th>
                        <th className="px-8 py-2 border-b-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position, index) => {
                        return (
                            <tr key={index} className="">
                                <td className="px-8 py-2 border-b">{index + 1}</td>
                                <td className="px-8 py-2 border-b">{position.nama_jabatan}</td>
                                <td className="px-8 py-2 border-b">{position.Department.nama_department}</td>
                                <td className="px-8 py-2 border-b flex justify-center">
                                    <button onClick={() => handleDelete(position.id)} href="" className="px-2 text-red-800 hover:text-red-400">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Position;