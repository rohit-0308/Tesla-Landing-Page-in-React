import React from "react";
import '../css/Item.css'
import Buttons from "./Buttons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnLink,
  leftBtnText,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
  last
}) => {
  return (
    <div className="item" style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
      <div className="item__container">
        <div className="item__text">
          <p>{title}</p>
          <div className="item__desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons">
            <Buttons imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Buttons imp='secondary' text={rightBtnText} link={rightBtnLink}/>
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon style={{ fontSize: 50 }} />
            </div>
          )}

          
        </div>
        {last && (
            <div className="footer">
              <p>Tesla ©️ 2021</p>
              <p>Privacy & Legal</p>
              <p>Contact</p>
              <p>Careers</p>
              <p>Get Newsletter</p>
              <p>News</p>
              <p>Forums</p>
              <p>Locations</p>
            </div>
          )}
      </div>
      
    </div>
  );
};

export default Item;
