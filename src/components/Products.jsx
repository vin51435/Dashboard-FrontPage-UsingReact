import React, { useState } from "react";
import { ProductsData } from "../Data";

export const Products = () => {

  const limitDescription = (text, limit) => {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ');
  };

  return (
    <div className="container-lg text-center pb-3 ">
      <div className="row align-items-start gy-3 product-main-container">
        <div className="col-12">
          <div className="container-lg">
            <div className="row text-center justify-content-evenly">
              <div className="col-5 text-start">Product Sells</div>
              <div className="col-4 col-md-3">
                <div className="form-inline">
                  <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search..." />
                  </form>
                </div>
              </div>
              <div className="col-3 col-md-3">
                <div class="btn-group shadow-0">
                  <button type="button" class="btn btn-light dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                    Last 30 days
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="container-lg">
            <div className="row text-center product-headings">
              <div className="col-6 text-start">Product Name</div>
              <div className="col-2">Stock</div>
              <div className="col-2">Price</div>
              <div className="col-2">Total Sales</div>
            </div>
          </div>
        </div>

        {ProductsData.map((item) => (
          <div className="col-12" key={item.id}>
            <div className="container-lg">
              <div className="row  text-center align-items-center">
                <div className="col-6">
                  <div className="container-lg p-0">
                    <div className="row align-items-center text-start">
                      <div className="col-6 col-xl-3 product-img-container">
                        <img src={item.productImg} alt="product" className="product-img" />
                      </div>
                      <div className="col-6 col-xl-9">
                        <div className="container-lg">
                          <div className="row align-items-center">
                            <div className="col-12">
                              <p className="product-title">{item.productName}</p><br />
                            </div>
                            <div className="col-12">
                              <p className="product-subtitle">{limitDescription(item.desc, 8)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">{item.inStock} in stock</div>
                <div className="col-2"><b>$ {item.price}</b></div>
                <div className="col-2">{item.totalSales}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="product-mobile-view container-sm">
        <div className="container-lg text-center w-100">
          <div className="row gy-3 align-items-start" >
            <div className="col-12 ">
              <div>Your Products</div>
            </div>
            {ProductsData.map((item) => (
              <div className="col-12 py-1 product-column-mob" key={item.id}>
                <div className="container-lg" >
                  <div className="row align-items-center">
                    <div className="col-4">
                      <img src={item.productImg} alt="product" className="product-img-mob" />
                    </div>
                    <div className="col-8 text-start">
                      <div className="container-lg">
                        <div className="row align-items-center">
                          <div className="col-12 product-name-mob">
                            <p>{item.productName}</p>
                          </div>
                          <div className="col-12 product-subtitle ">
                            <p>{limitDescription(item.desc, 5)}...</p>
                          </div>
                          <div className="col-4 product-details-mob">{item.inStock} in stock</div>
                          <div className="col-4 product-details-mob">Price: <b>${item.price}</b></div>
                          <div className="col-4 product-details-mob">Sales: {item.totalSales}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};