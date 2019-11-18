import React, { Component } from "react";
import ItmeDATA from "DATA/ItemDATA";
import FilterItem from "../../FilterItem";

export class Brand extends Component {
  render() {
    const newArr = [];
    const finalArr = [];
    ItmeDATA.map(el => newArr.push(el.sex));
    newArr.map(el => {
      for (let i = 0; i < newArr.length; i++) {
        if (!finalArr.includes(newArr[i])) {
          finalArr.push(newArr[i]);
        }
      }
      return finalArr;
    });

    const styleList = finalArr.map(el => <FilterItem name={el} />);
    const { selectMode, active } = this.props;
    return (
      <>
        <li className="filter-body-li" onClick={selectMode}>
          스타일
          <div className={active ? "arrow up" : "arrow down"}></div>
        </li>
        <div className={active ? "hidden-filter block" : "hidden-filter none"}>
          <ul>{styleList}</ul>
        </div>
      </>
    );
  }
}

export default Brand;
