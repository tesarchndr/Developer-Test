const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { Link } = require("react-router-dom");
const { getDepartments, deleteDepartment } = require("../stores/actionCreator");

const Department = () => {
    const dispatcher = useDispatch();
    const { departments } = useSelector(state => state.departments);

    useEffect(() => {
        dispatcher(getDepartments());
    }, []);

    const handleDelete = (id) => {
        dispatcher(deleteDepartment(id));
    }

    return (
        <div className="w-full pt-[80px] flex flex-col items-center justify-center">
        <div className="w-[50%] flex justify-between items-center my-[10px]">
            <p className="text-3xl font-bold">Department</p>
            <Link to={'/add-department'} className="px-4 py-[8px] bg-cyan-900 rounded-xl hover:bg-cyan-700 duration-200 text-white">Add Department</Link>
        </div>
        <table className="w-[50%]">
            <thead>
                <tr>
                    <th className="px-2 py-2 border-b-2">No</th>
                    <th className="px-8 py-2 border-b-2">Name</th>
                    <th className="px-8 py-2 border-b-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((department, index) => {
                    return (
                        <tr key={index} className="">
                            <td className="px-8 py-2 border-b">{index + 1}</td>
                            <td className="px-8 py-2 border-b">{department.nama_department}</td>
                            <td className="px-8 py-2 border-b flex justify-center">
                                <button onClick={() => handleDelete(department.id)} href="" className="px-2 text-red-800 hover:text-red-400">Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Department;