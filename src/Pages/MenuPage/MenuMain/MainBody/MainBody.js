import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemDATA from "DATA/ItemDATA";
import ProductItem from "./ProductItem";
import "./MainBody.scss";

export class MainBody extends Component {
  render() {
    const itemList = ItemDATA.map(el => (
      <ProductItem
        key={el.item_id}
        name={el.name}
        brand={el.brand}
        image={el.main_image}
        color={el.color}
        size={el.size}
        price={el.price}
        sex={el.sex}
        type={el.type}
        goCustomizePage={() => this.props.history.push("/customize")}
      />
    ));
    return <div className="product-list-body">{itemList}</div>;
  }
}

export default withRouter(MainBody);
