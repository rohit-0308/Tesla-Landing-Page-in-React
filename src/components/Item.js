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
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
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
            <Buttons imp="primary" text={leftBtnLink} link={leftBtnLink} />
            {twoButtons && (
              <Buttons imp='secondary' text={rightBtnText} link={rightBtnLink}/>
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
