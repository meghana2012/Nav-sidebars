import { render } from "@testing-library/react";
import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";


const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        const allproducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const res = await response.json()
            console.log(res, "allproducts")
            setDataSource(res)
        }
        allproducts()
    }, [])
    return (
        <>
            <Space size={10} direction={"vertical"}>
                <Typography.Title level={2}>Dashboard</Typography.Title>
                <Table
                    columns={[
                        {
                            title:"Image",
                            dataIndex:"image",
                            render:(link) =>{
                                return <Avatar src={link}/>
                            }
                        },
                        {
                            title:"Title",
                            dataIndex:"title"
                        },
                        {
                            title:"Description",
                            dataIndex:"description"
                        },
                        {
                            title:"Price",
                            dataIndex:"price",
                            render:(value) => <span>${value}</span>
                        },
                        {
                            title:"Category",
                            dataIndex:"category"
                        },
                        {
                            title:"Rating",
                            dataIndex:"rating",
                            //render:(value) => {return [console.log(value.rate),<span>{value}</span>]}
                        }
                    ]}
                    dataSource={dataSource}
                >

                </Table>
            </Space>
        </>
    )
}
export default Dashboard;