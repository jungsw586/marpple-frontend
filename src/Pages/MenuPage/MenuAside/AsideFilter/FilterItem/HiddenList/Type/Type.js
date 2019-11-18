import React, { Component } from "react";
import ItmeDATA from "DATA/ItemDATA";
import FilterItem from "../../FilterItem";

export class Brand extends Component {
  render() {
    const newArr = [];
    const finalArr = [];
    ItmeDATA.map(el => newArr.push(el.type));
    newArr.map(el => {
      for (let i = 0; i < newArr.length; i++) {
        if (!finalArr.includes(newArr[i])) {
          finalArr.push(newArr[i]);
        }
      }
      return finalArr;
    });

    const typeList = finalArr.map(el => <FilterItem name={el} />);
    const { selectMode, active } = this.props;
    return (
      <>
        <li className="filter-body-li" onClick={selectMode}>
          상품타입
          <div className={active ? "arrow up" : "arrow down"}></div>
        </li>
        <div className={active ? "hidden-filter block" : "hidden-filter none"}>
          <ul>{typeList}</ul>
        </div>
      </>
    );
  }
}

export default Brand;
