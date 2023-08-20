import { Badge, Image, Space, Typography } from "antd";
import logo from "../../images/space.jpg"
import { BellFilled, MailOutlined } from "@ant-design/icons"


const Header = () => {
    return (
        <>
            <div className="header">
                <Image width={50} height={50} src={logo} />
                <Typography.Title>Dashboard</Typography.Title>
                <Space>
                    <Badge count={10}>
                        <MailOutlined style={{ fontSize: 25 }} />
                    </Badge>
                    <Badge count={3}>
                        <BellFilled style={{ fontSize: 25 }} />
                    </Badge>


                </Space>

            </div>
        </>
    )
}
export default Header;