import React from "react";
import "./lsc/Process.css";
import congratulate from "./lsc/imag/congratulate.jpg";
class Process extends React.Component{
    render() {
        return(
          <div className="wrap">
              <div className="state-bar">
                  <colgroup>
                      <col/>
                      <col/>
                      <col/>
                  </colgroup>
                  <tbody>
                  <tr className="bar-nopay">
                      <td className="over">
                          <div className="circle" id="over-circle">
                              <div className="circle-text">1</div>
                          </div>
                          <div id="line1"/>
                      </td>
                      <td className="hl">
                          <div className="circle" id="hl-circle">
                              <div className="circle-text">2</div>
                          </div>
                          <div id="line2"/>
                      </td>
                      <td className="todo">
                          <div className="circle" id="todo-circle">
                              <div className="circle-text">3</div>
                          </div>
                      </td>
                  </tr>
                  <tr className="state">
                      <td className="over-text">挂号</td>
                      <td className="hl-text">口腔检查</td>
                      <td className="todo-text">设计正畸方案</td>
                  </tr>
                  <tr className="occupy-line">
                  </tr>
                  <tr className="bar-nopay" id="bar-nopay2">
                      <td className="over">
                          <div className="circle" id="todo-circle1">
                              <div className="circle-text">4</div>
                          </div>
                          <div id="line3"/>
                      </td>
                      <td className="hl">
                          <div className="circle" id="todo-circle2">
                              <div className="circle-text">5</div>
                          </div>
                          <div id="line4"/>
                      </td>
                      <td className="todo">
                          <div className="circle" id="todo-circle3">
                              <div className="circle-text">6</div>
                          </div>
                      </td>
                  </tr>
                  <tr className="state">
                      <td className="todo-text1">制作矫正器</td>
                      <td className="todo-text2">安装矫正器</td>
                      <td className="todo-text3">缴费</td>
                  </tr>
                  </tbody>
                   <img className="picture" src={congratulate} alt="picture"/>

              </div>
          </div>
        );
    }
}

export default Process;