import React from "react";
import '../css/basicBackground.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
      </span>;

        return (
            <tr className="mail-min" >
                <td>{product.ID}
                </td>
                <td>{product.name}</td>
                <td>{product.ID_number}</td>
                <td>{product.cash1}</td>
                <td>{product.cash2}</td>
                <td>{product.sum}</td>
                <td>{product.paystate}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        // let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
        });

        return (
            <table className="mail-box">
                <thead>
                <tr className="main-title">
                    <th>
                        ID
                    </th>
                    <th>姓名</th>
                    <th>身份证号</th>
                    <th>诊疗费用（元）</th>
                    <th>药品费用（元）</th>
                    <th>合计</th>
                    <th>支付状态</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (

            <form>
                <div className="ghcx-01">
                    <div className="ghcx-01-01">请病人姓名：</div>
                    <input
                        className="ghcx-01-02"
                        type="text"
                        placeholder="Search..."
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </div>
            </form>

        );
    }
}

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default Pay;

