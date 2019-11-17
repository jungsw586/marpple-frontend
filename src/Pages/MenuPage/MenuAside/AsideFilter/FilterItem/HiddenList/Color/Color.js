import React, { Component } from "react";
import ItmeDATA from "DATA/ItemDATA";
import ColorFilterItem from "./ColorFilterItem";

export class Color extends Component {
  render() {
    const newArr = [];
    const everyArr = [];
    const finalArr = [];
    ItmeDATA.map(el => newArr.push(el.color));
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[i].length; j++) {
        everyArr.push(newArr[i][j]);
      }
    }
    everyArr.map(el => {
      for (let i = 0; i < everyArr.length; i++) {
        if (!finalArr.includes(everyArr[i])) {
          finalArr.push(everyArr[i]);
        }
      }
      return finalArr;
    });

    const colorList = finalArr.map(el => <ColorFilterItem name={el} />);
    const { selectMode, active } = this.props;
    return (
      <>
        <li className="filter-body-li" onClick={selectMode}>
          색상
          <div className={active ? "arrow up" : "arrow down"}></div>
        </li>
        <div className={active ? "hidden-filter block" : "hidden-filter none"}>
          <ul>{colorList}</ul>
        </div>
      </>
    );
  }
}

export default Color;
