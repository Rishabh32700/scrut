import React, { useState } from "react";
import "./app.css";
function App() {
  const [arrData, setArrData] = useState([
    {
      id: 1,
      Vendor: "Rishabh",
      Vendor_Code: "324567",
      PO: "4504567638",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "35,000",
      Qty_Ordered: "250 kg",
      Qty_Shipped: "300,000",
      GR_Quality: "300,000",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 2,
      Vendor: "Akhil",
      Vendor_Code: "324568",
      PO: "4504567639",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "36,000",
      Qty_Ordered: "270 kg",
      Qty_Shipped: "500,000",
      GR_Quality: "500,000",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 3,
      Vendor: "Rinney",
      Vendor_Code: "324569",
      PO: "4504567640",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "37,000",
      Qty_Ordered: "290 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 4,
      Vendor: "John",
      Vendor_Code: "324570",
      PO: "4504567641",
      PO_Line: "2",
      Description: "CSIT Department",
      PO_Value: "38,000",
      Qty_Ordered: "350 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 5,
      Vendor: "Sam",
      Vendor_Code: "324571",
      PO: "4504567642",
      PO_Line: "2",
      Description: "ME Department",
      PO_Value: "535,000",
      Qty_Ordered: "50 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 6,
      Vendor: "Rishabh",
      Vendor_Code: "324567",
      PO: "4504567638",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "35,000",
      Qty_Ordered: "250 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 7,
      Vendor: "Akhil",
      Vendor_Code: "324568",
      PO: "4504567639",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "36,000",
      Qty_Ordered: "270 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 8,
      Vendor: "jonna",
      Vendor_Code: "324572",
      PO: "4504567645",
      PO_Line: "2",
      Description: "ECE Department",
      PO_Value: "350,000",
      Qty_Ordered: "300 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 9,
      Vendor: "vasco",
      Vendor_Code: "324573",
      PO: "4504567646",
      PO_Line: "1",
      Description: "IT Department",
      PO_Value: "700,000",
      Qty_Ordered: "350 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 10,
      Vendor: "Rishabh",
      Vendor_Code: "324574",
      PO: "4504567638",
      PO_Line: "1",
      Description: "CSE Department",
      PO_Value: "35,000",
      Qty_Ordered: "250 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    {
      id: 11,
      Vendor: "demo",
      Vendor_Code: "324575",
      PO: "4504567647",
      PO_Line: "1",
      Description: "CSIT Department",
      PO_Value: "67,000",
      Qty_Ordered: "200 kg",
      Qty_Shipped: "-",
      GR_Quality: "-",
      UOM: "EA",
      Due_Date: "26/05/2022",
      Committed_Date: "28/05/2022",
    },
    
  ]);

  function onChangeHandle(e) {
    console.log("e.target.value", e.target.value);
    if (e.target.value === "") {
      window.location.reload(true);
      const tempArr = arrData;
      setArrData(tempArr);
      return;
    }
    const searchResult = arrData.filter(
      (item) =>
        item.Vendor.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        item.Vendor_Code.toLowerCase().startsWith(e.target.value.toLowerCase())||
        item.Description.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setArrData(searchResult);
  }

  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="header">
            <div className="header__container">
              <div className="navbar">
                <span className="navbar__heading">Riversys</span>
                <ul className="menu">
                  <li className="menu__item">Purchase Order</li>
                  <li className="menu__item">Dashboard</li>
                  <li className="menu__item">Reports</li>
                  <li className="menu__item">RFQ</li>
                  <li className="menu__item">Invoice</li>
                </ul>
                <div className="profile__section">
                  <div className="profile__pic">
                    <span>A</span>
                  </div>
                  <div className="name">
                    <span>Aayush GC</span>
                  </div>
                </div>
              </div>
              <div className="subheader">
                <div className="subheader__left">
                  <span>Purchase Orders</span>
                </div>
                <div className="subheader__right">
                  <div className="last__sync">
                    <span className="last__sync__heading">Last ERP sync: </span>
                    <span className="last__sync__day__date">
                      Fri, May 08, 2020 |{" "}
                    </span>
                    <span className="last__sync__time"> 10:30:33 AM IST |</span>
                  </div>
                  <div className="re__sync">
                    <span className="re__sync__heading">Re-Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main__body">
            <div className="main__body__container">
              <div className="sub__content__in__main__body">
                <div className="upper__sub__content">
                  <div className="tags">
                    <ul className="tags__container">
                      <li>
                        <span>20</span>Response Awaited
                      </li>
                      <li>
                        <span>20</span>Accepted
                      </li>
                      <li>
                        <span>20</span>Rejected
                      </li>
                      <li>
                        <span>20</span>Review Requested
                      </li>
                      <li>
                        <span>20</span>GRN Done
                      </li>
                      <li>
                        <span>20</span>Delayed
                      </li>
                    </ul>
                  </div>
                  <input className="searchBar" placeholder="search here" type="text" onChange={onChangeHandle} />
                  <div className="export">
                    {/* <span>Export </span> */}
                  </div>
                </div>
                <div className="lower__sub__content">
                  <div className="po__action">PO Actions</div>
                  <div className="dropdown__container">
                    <label class="dropdown">
                      <div class="dd-button">Status: All</div>
                      <input type="checkbox" class="dd-input" id="test" />
                      <ul class="dd-menu">
                        <li>Action</li>
                        <li>Another action</li>
                        <li>Something else here</li>
                      </ul>
                    </label>
                    <label class="dropdown">
                      <div class="dd-button">2000 Packaging</div>
                      <input type="checkbox" class="dd-input" id="test" />
                      <ul class="dd-menu">
                        <li>Action</li>
                        <li>Another action</li>
                        <li>Something else here</li>
                      </ul>
                    </label>
                    <label class="dropdown">
                      <div class="dd-button">Dropdown</div>
                      <input type="checkbox" class="dd-input" id="test" />
                      <ul class="dd-menu">
                        <li>Action</li>
                        <li>Another action</li>
                        <li>Something else here</li>
                      </ul>
                    </label>
                    <div
                      id="datepicker"
                      class="input-group date"
                      data-date-format="mm-dd-yyyy"
                    >
                      <input class="form-control" type="text" readonly />
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table">
                <table>
                  <tr>
                    <th>S. No.</th>
                    <th>Vendor</th>
                    <th>Vendor Code</th>
                    <th>PO#</th>
                    <th>PO Line</th>
                    <th>Description</th>
                    <th>PO Value - INR</th>
                    <th>Qty Ordered</th>
                    <th>Qty Shipped</th>
                    <th>GR Quality</th>
                    <th>UOM</th>
                    <th>Due Date</th>
                    <th>Committed Date</th>
                  </tr>

                  {arrData.map((item) => {
                    return (
                      <tr>
                        <td>
                          {item.id}
                        </td>
                        <td>
                          {item.Vendor}
                        </td>
                        <td>
                          {item.Vendor_Code}
                        </td>
                        <td>
                          {item.PO}
                        </td>
                        <td>
                          {item.PO_Line}
                        </td>
                        <td>
                          {item.Description}
                        </td>
                        <td>
                          {item.PO_Value}
                        </td>
                        <td>
                          {item.Qty_Ordered}
                        </td>
                        <td>
                          {item.Qty_Shipped}
                        </td>
                        <td>
                          {item.GR_Quality}
                        </td>
                        <td>
                          {item.UOM}
                        </td>
                        <td>
                          {item.Due_Date}
                        </td>
                        <td>
                          {item.Committed_Date}
                        </td>
 
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
