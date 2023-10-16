import React ,{useState} from "react";
import { ProductsData } from "../Data";

export const Products = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <div className="container text-center pb-3 ">
      <div className="row align-items-start gy-3 product-main-container">
        <div className="col-12">
          <div className="container">
            <div className="row text-center">
              <div className="col-6 text-start">Product Sells</div>
              <div className="col-3">
                <div className="form-inline">
                  <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search..." />
                  </form>
                </div>
              </div>
              <div className="col-3">
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
          <div className="container">
            <div className="row text-center product-headings">
              <div className="col-6 text-start">Product Name</div>
              <div className="col-2">Stock</div>
              <div className="col-2">Price</div>
              <div className="col-2">Total Sales</div>
            </div>
          </div>
        </div>


        {/* <div className="col-12">
          <div className="container">
            <div className="row text-start align-items-center">
              <div className="col-6">
                <div className="container p-0">
                  <div className="row align-items-center">
                    <div className="col-3 product-img-container">
                      <img src="https://www.ytechb.com/wp-content/uploads/2022/08/Windows-365-Wallpapers.webp" alt="product" className="product-img" />
                    </div>
                    <div className="col-9">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-12">
                            <p className="product-title">Abstract 3d</p><br />
                          </div>
                          <div className="col-12">
                            <p className="product-subtitle">Sub</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">32 in stock</div>
              <div className="col-2"><b>$ 45.00</b></div>
              <div className="col-2">20</div>
            </div>
          </div>
        </div> */}


        {ProductsData.map((item) => (
          <div className="col-12" key={item.id}>
            <div className="container">
              <div className="row text-center align-items-center">
                <div className="col-6">
                  <div className="container p-0">
                    <div className="row align-items-center text-start">
                      <div className="col-3 product-img-container">
                        <img src={item.productImg} alt="product" className="product-img" />
                      </div>
                      <div className="col-9">
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-12">
                              <p className="product-title">{item.productName}</p><br />
                            </div>
                            <div className="col-12">
                              <p className="product-subtitle">{item.desc}</p>
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
    </div>
  );
};