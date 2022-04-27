import React from "react";
import '../css/basicBackground.css'
class PersonCenter extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {  const person=this.props.Person;
        return (
            <div className="ghxz-box">
                <div className="ghxz-01">
                    <h1>个人中心</h1>
                </div>
                <h4>个人信息</h4>
                <ul>
                    <li><img src={person.url}/></li>
                    <li><br/></li>
                    <li>姓名：{person.name}</li>
                    <li>年龄:{person.age}</li>
                    <li>所属科室：{person.keshi}</li>
                </ul>
            </div>
        )
    }
}
export default PersonCenter;