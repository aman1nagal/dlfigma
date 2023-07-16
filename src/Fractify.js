import "./fractify.css";
import main from "../src/fractify/Frame 2.svg";
import arrow from "../src/fractify/Group 2.svg";
import play from "../src/fractify/Polygon 1.svg";


const Fractify = () => {
  return (
    <div className="fractify">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="unlock-wrapper">
                  <div className="unlock">Unlock</div>
                </div>
                <div className="frame-wrapper">
                  <div className="your-wrapper">
                    <div className="unlock">your</div>
                  </div>
                </div>
              </div>
              <div className="unlock-wrapper">
                <div className="unlock">online growth</div>
              </div>
              <div className="potential-parent">
                <div className="unlock">Potential</div>
                <div className="frame-wrapper1">
                  <div className="yes-wrapper">
                    <div className="yes">Yes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2">
              <div className="our-product-wrapper">
                <div className="unlock">Our Product</div>
              </div>
              <div className="polygon-wrapper">
                <img className="frame-child" alt="" src={play}/>
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="rectangle-parent">
              <div className="group-child" />
              <img
                className="casual-life-3d-boy-sitting-wit-icon"
                alt=""
                src={main}
              />
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="frame-parent3">
            <div className="group-container">
              <img className="frame-item" alt="" src={arrow} />
            </div>
            <div className="frame-parent4">
              <div className="drive-your-money-to-work-smart-wrapper">
                <div className="drive-your-money">
                  Drive your money to work smarter than others
                </div>
              </div>
              <div className="a-safe-and-secure-invesment-ne-wrapper">
                <div className="a-safe-and">
                  A safe and secure invesment nedd guided aproach with real time
                  analytics and risk analysis , we can help you to catch all at
                  once.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent5">
        <div className="group-parent">
          <div className="fr-ctify-parent">
            <div className="fr-ctify">Fractify</div>
          </div>
          <div className="frame-parent6">
            <div className="products-wrapper">
              <div className="unlock">Products</div>
            </div>
            <div className="products-wrapper">
              <div className="unlock">Invest</div>
            </div>
            <div className="products-wrapper">
              <div className="unlock">Community</div>
            </div>
            <div className="text-parent">
              <div className="unlock">{`        `}</div>
              <div className="unlock">{`About `}</div>
            </div>
          </div>
        </div>
        <div className="early-access-wrapper">
          <div className="unlock">Early Access</div>
        </div>
      </div>
      <div className="frame-parent7">
        <div className="unlock-wrapper">
          <div className="signup-now">{`Signup Now & Get`}</div>
        </div>
        <div className="frame-parent8">
          <div className="your-wrapper">
            <div className="wrapper">
              <div className="div">01</div>
            </div>
            <div className="frame-parent10">
              <div className="early-access-container">
                <div className="unlock">Early Access</div>
              </div>
              <div className="youll-be-priorities-from-the-wrapper">
                <div className="youll-be-priorities">
                  You’ll be priorities from the pool of millioins
                </div>
              </div>
            </div>
          </div>
          <div className="your-wrapper">
            <div className="wrapper">
              <div className="unlock">02</div>
            </div>
            <div className="frame-parent10">
              <div className="early-access-container">
                <div className="unlock">Zero Brokerage</div>
              </div>
              <div className="youll-be-priorities-from-the-wrapper">
                <div className="youll-be-priorities">
                  You’ll be priorities from the pool of millioins
                </div>
              </div>
            </div>
          </div>
          <div className="your-wrapper">
            <div className="wrapper">
              <div className="unlock">03</div>
            </div>
            <div className="frame-parent10">
              <div className="unlock-wrapper">
                <div className="unlock">Zero Processing charges</div>
              </div>
              <div className="youll-be-priorities-from-the-wrapper">
                <div className="youll-be-priorities">
                  You’ll be priorities from the pool of millioins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fractify;
