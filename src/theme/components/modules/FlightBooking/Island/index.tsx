import { useState } from 'react';

export default function FlightBookingTips() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const tipsData = [
    {
      title: "Best Time to Book Flights",
      subtitle: "Save up to 40% with smart timing",
      content: (
        <div className="dropdownContent">
          <div className="tipSection">
            <h4>Domestic Flights</h4>
            <ul>
              <li>Book 2-4 weeks in advance</li>
              <li>Tuesday afternoons = lowest prices</li>
              <li>Avoid booking on weekends</li>
            </ul>
          </div>
          <div className="tipSection">
            <h4>International Flights</h4>
            <ul>
              <li>Book 6-8 weeks ahead</li>
              <li>Mid-week departures cheaper</li>
              <li>Off-season = best deals</li>
            </ul>
          </div>
          <div className="proTip">
            <strong>Pro Tip:</strong> Compare airlines on our platform to find the best combination of price, timing, and convenience for your travel needs!
          </div>
        </div>
      )
    },
    {
      title: "Baggage Allowance Guide",
      subtitle: "Avoid unexpected fees",
      content: (
        <div className="dropdownContent">
          <div className="tipSection">
            <h4>✈️ Computicket Advantage</h4>
            <p>All tickets purchased through us include checked baggage! No surprise fees - your 20kg checked bag is already included in the price.</p>
          </div>
          <div className="tipSection">
            <h4>Standard Allowances</h4>
            <div className="allowanceGrid">
              <div>
                <h5>Carry-on</h5>
                <p>7kg • 56x36x23cm</p>
              </div>
              <div>
                <h5>Checked Bag</h5>
                <p>20kg • Economy class</p>
                <p>✓ Included with us!</p>
              </div>
            </div>
          </div>
          <div className="tipSection">
            <h4>Prohibited Items</h4>
            <ul>
              <li>Liquids over 100ml (carry-on)</li>
              <li>Sharp objects and tools</li>
              <li>Flammable substances</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Airport Arrival Times",
      subtitle: "Never miss your flight",
      content: (
        <div className="dropdownContent">
          <div className="arrivalGrid">
            <div>
              <h4>Domestic Flights</h4>
              <p className="timeHighlight">90 min before departure</p>
            </div>
            <div>
              <h4>International</h4>
              <p className="timeHighlight">2-3 hrs before departure</p>
            </div>
          </div>
          <div className="tipSection">
            <h4>Quick Check-in Tips</h4>
            <ul>
              <li>Check-in online 24hrs before</li>
              <li>Download boarding pass to phone</li>
              <li>Use self-service kiosks</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Travel Documents",
      subtitle: "Required documentation",
      content: (
        <div className="dropdownContent">
          <div className="tipSection">
            <h4>Required Documents</h4>
            <ul>
              <li>Valid ID/Passport (check expiry)</li>
              <li>Boarding pass (digital or printed)</li>
              <li>Visa (international travel)</li>
            </ul>
          </div>
          <div className="tipSection">
            <h4>Important Reminder</h4>
            <p>Keep digital and physical copies of all documents. Check passport validity - many countries require 6+ months remaining.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="tipsContainer">
      {tipsData.map((tip, index) => (
        <div key={index} className="tipCard">
          <div 
            className="tipHeader" 
            onClick={() => toggleDropdown(index)}
          >
            <h3>{tip.title}</h3>
            <p>{tip.subtitle}</p>
            <span className={`arrow ${activeDropdown === index ? 'up' : 'down'}`}></span>
          </div>
          {activeDropdown === index && (
            <div className="tipBody">
              {tip.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}