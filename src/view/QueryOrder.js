import React from "react";
import "./lsc/QueryOrder.css";

class QueryOrder extends React.Component{
    render() {
        return(
          <div className="wrap">
              <div className="order-detail">
                  <table className="state-bar">
                      <colgroup>
                          <col/>
                          <col/>
                          <col/>
                      </colgroup>
                      <tbody>
                          <tr className="bar-nopay">
                              <td className="over" id="over-position">
                                  <div className="circle" id="over-circle">
                                      <div className="circle-text">1</div>
                                  </div>
                                  <div className="line1"/>
                              </td>
                              <td className="hl" id="hl-position">
                                  <div className="circle" id="hl-circle">
                                      <div className="circle-text">2</div>
                                  </div>
                                  <div className="line2"/>
                              </td>
                              <div className="todo" id="todo-position">
                                  <div className="circle" id="todo-circle">
                                      <div className="circle-text">3</div>
                                  </div>
                              </div>
                          </tr>
                          <tr className="state">
                              <td className="over">预约下单</td>
                              <td className="hl">待就诊</td>
                              <td className="todo">就诊评价</td>
                          </tr>
                          <tr className="time">
                              <td className="over">2022-03-08 18:29:06</td>
                              <td className="hl">2022-03-22&nbsp;9:00-12:00</td>
                              <td className="todo"/>
                          </tr>
                          <tr className="state3">
                              <td/>
                              <td>
                                  <div className="detail-tip">
                                      <div className="gi-s2">
                                          <p className="detail-tip-text">14天后去就诊</p>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <div className="s-height">
                      <span className="imag-wait"/>
                      <span className="s-margin">
                          <strong id="s-margin-text1">预约已成功，</strong>
                          <p id="s-margin-text2">请在指定时间去医院就诊</p>
                      </span>
                      <span className="tips">取号时请出示就诊人的相关证件哦，祝您早日康复！</span>
                      <div className="cancel">
                          <p className="cancel-text">如果您不想预约了，可以</p>
                          <a href="#" className="cancel-text-link">取消预约单</a>
                      </div>
                  </div>
                  <ul id="list">
                      <li className="title">订单信息</li>
                      <li className="li-style">
                          <span className="left-head">
                              预约医院：
                              <a href="#" className="link">东川路牙科医院</a>
                          </span>
                          <span className="left">门诊类型：专家</span>
                          <span>
                              <br/>
                              预约科室：
                              <a href="#" className="link">正畸科</a>
                          </span>
                          <span className="left">费用：20元(挂号费)</span>
                          <span>
                              <br/>
                              预约医生：
                              <a href="#" class="link">###</a>
                          </span>
                          <span className="left">支付状态：已线上支付/去医院支付</span>
                      </li>
                      <li className="title">取号信息</li>
                      <li className="li-style">
                          <span>
                              就诊日期：2022-03-22
                          </span>
                          <span className="left">
                              就诊地点：2F正畸科
                          </span>
                          <span>
                              <br/>
                               领号时间：8：00~8：30
                          </span>
                          <span className="left">就诊序号：1</span>
                      </li>
                      <li className="title">就诊信息</li>
                      <li className="li-style">
                          <span>
                              预约单号：202203081864156765
                          </span>
                          <span className="left">
                              下单时间：2022-03-08 18:29:06
                          </span>
                          <span>
                              <br/>
                              就诊人：###
                          </span>
                          <span className="left">证件号：*****************</span>
                          <span>
                              <br/>
                              联系电话：**********
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}

export default QueryOrder;