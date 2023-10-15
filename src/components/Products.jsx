import React from "react";

export const Products = () => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-12">
          <div className="container">
            <div className="row text-start">
              <div className="col-6">Product Sells</div>
              <div className="col-3">Search</div>
              <div className="col-3">Drop down</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="container">
            <div className="row text-start">
              <div className="col-6">Product Name</div>
              <div className="col-2">Stock</div>
              <div className="col-2">Price</div>
              <div className="col-2">Total Sales</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="container">
            <div className="row text-start">
              <div className="col-6">
                <div>
                  <img src="https://www.ytechb.com/wp-content/uploads/2022/08/Windows-365-Wallpapers.webp" alt="product" className="product-img"/>
                  <p>Abstract 3d</p>
                  <p>Sub</p>
                </div>
              </div>
              <div className="col-2">32 in stock</div>
              <div className="col-2"><b>$ 45.00</b></div>
              <div className="col-2">20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};