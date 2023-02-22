import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex w-full h-full"> 
            <div className="fixed top-0 flex items-center justify-between w-full bg-cyan-900 text-white h-[50px] px-10">
                <div className="flex cursor-pointer">
                    <img src="https://media.licdn.com/dms/image/C560BAQF8Yyc_VaS8cg/company-logo_200_200/0/1591612931760?e=2147483647&v=beta&t=mrJCfBWw2W7dkpHfRiYoTGz3kmbs97YjCBQ4f_Mc7XY" width={30} className="rounded-full" alt="" />
                </div>
                <div>
                <Link to={'/'} href="" className="mx-4 hover:text-gray-200 duration-200">Employee</Link>
                <Link to={'/position'} href="" className="mx-4 hover:text-gray-200 duration-200">Position</Link>
                <Link to={'/department'} href="" className="mx-4 hover:text-gray-200 duration-200">Department</Link>
                </div>
                <div className="cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" width={30} alt="" />
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default MainLayout;