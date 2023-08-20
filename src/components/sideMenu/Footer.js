import { Typography } from "antd";


const Footer = () => {
    return(
        <>
            <div className="footer">
                <Typography.Link href="tel:+123456789">123456789</Typography.Link>
                <Typography.Link href="https://www.google.com" target={"_blank"}>Terms & Conditions</Typography.Link>
                <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
            </div>
            
        </>
    )
}
export default Footer;