import { ShopFilled } from "@ant-design/icons";
import { HomeFilled } from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate()
    return(
        <>
           <div className="sidebar">
                <Menu
                    style={{
                        minHeight:"600px"
                    }}
                    onClick={(item) => {
                        navigate(item.key)
                    }}
                    items={[
                        {
                            label:"Dashboard",
                            key:"/",
                            icon:<HomeFilled/>
                        },
                        {
                            label:"Inventory",
                            key:"/Inventory",
                            icon:<HomeFilled/>
                        },
                        {
                            label:"Orders",
                            key:"/orders",
                            icon:<HomeFilled/>
                        },
                        {
                            label:"Customers",
                            key:"/Customers",
                            icon:<HomeFilled/>
                        }
                    ]}
                >

                </Menu>
            </div>
        </>
    )
}
export default Sidebar;