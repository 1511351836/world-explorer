import React from "react";
import '../css/query.css'
class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <div className="SideBar">
                <a className="block-min-01" href="/src/html/all-books.html">
                    <div> 个人中心</div>
                </a>
                <a className="block-min-02" href="/src/html/chart.html">
                    <div>患者信息</div>
                </a>
                <a className="block-min-03" href="/src/index/wsgh.html">
                    <div>管理预约</div>
                </a>
                <a className="block-min-04" href="/src/html/my_profile.html">
                    <div>支付信息</div>
                </a>
            </div>
        )
    }
}
export default SideBar;