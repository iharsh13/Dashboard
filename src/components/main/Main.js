import "./Main.css";
import hello from "../../assets/hello.svg";
import graph from "../../assets/graph.png";
import histogram from "../../assets/histogram.png";
// import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
    {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div className="upper">
                <span className="about">
                  Total Income
                  <i class="fa fa-ellipsis-h income" aria-hidden="true"></i>
                </span>
                <span className="value">$124,563.00</span>
                <div className="stats">+6.9%</div>
                <div className="pb">
                  <div className="factor">s</div>
                </div>
                <span className="dull">Yearly Goal</span>
              </div>
              <div className="lower">
                <span className="about">
                  New Users
                  <i class="fa fa-ellipsis-h income" aria-hidden="true"></i>
                </span>
                <span className="value">94.2%</span>
                <div className="stats">+6.9%</div>
                <br />
                <br />
                <img src={histogram} alt="graph" />
              </div>
            </div>
            {/* <Chart /> */}
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Balance</h1>
              </div>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <span className="about">Earnings</span>
                <span className="value">43.41%</span>
                <div className="stats">+2.5%</div>
              </div>

              <div className="card2">
                <span className="about">Sales Value</span>
                <span className="value">$95,422</span>
                <div className="stats">+13.5%</div>
                
              </div>
              
            </div>
            <img src={graph} alt="" />
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
        <div className="Main_Header">
          <h5>Recent Transactions</h5>
          <p>Incoming </p>
          <p>Invoices </p>
        </div>
        <div className="sub_container_bottom">
          <div className="items light">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="demo1">Invoice ID</span>
            <span className="demo2">Date</span>
            <span className="demo3">Description</span>
            <span className="demo4">Status</span>
            <span className="demo5">Description</span>
          </div>
          <div className="items dark">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="name">MO63592DR3</span>
            <span className="date">08.04.2021</span>
            <span className="code">Code 5928MD01</span>
            <div className="success">Completed</div>
            <span className="desc">$2500.00</span>
          </div>
          <div className="items light">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="name">MO63592DR3</span>
            <span className="date">08.04.2021</span>
            <span className="code">Code 5928MD01</span>
            <div className="success">Completed</div>
            <span className="desc">$2500.00</span>
          </div>
          <div className="items dark">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="name">MO63592DR3</span>
            <span className="date">08.04.2021</span>
            <span className="code">Code 5928MD01</span>
            <div className="success">Completed</div>
            <span className="desc">$2500.00</span>
          </div>
          <div className="items light">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="name">MO63592DR3</span>
            <span className="date">08.04.2021</span>
            <span className="code">Code 5928MD01</span>
            <div className="success">Completed</div>
            <span className="desc">$2500.00</span>
          </div>
          <div className="items dark">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <span className="name">MO63592DR3</span>
            <span className="date">08.04.2021</span>
            <span className="code">Code 5928MD01</span>
            <div className="success">Completed</div>
            <span className="desc">$2500.00</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
