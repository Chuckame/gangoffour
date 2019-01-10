import React from "react";
import $ from "jQuery";

const imgBase = "/img/cards";
const imgs = {};
function addImg(name) {
  imgs[name] = `${imgBase}/${name}.png`;
}
addImg("1-multicolor");
addImg("1-green");
addImg("2-green");
addImg("3-green");
addImg("4-green");
addImg("6-green");
addImg("7-green");
addImg("10-green");
addImg("1-yellow");
addImg("2-yellow");
addImg("3-yellow");
addImg("4-yellow");
addImg("6-yellow");
addImg("7-yellow");
addImg("1-red");
addImg("2-red");
addImg("3-red");
addImg("4-red");
addImg("5-red");
addImg("6-red");
addImg("7-red");
addImg("8-red");
addImg("9-red");
addImg("10-red");
addImg("phoenix-green");
addImg("phoenix-yellow");
addImg("dragon");
addImg("back");

const InnerImg = ({ path }) => {
  return (
    <div
      className="inner-card img"
      style={{
        backgroundImage: `url(${path})`
      }}
    />
  );
};

const InnerNumber = ({ num, color }) => {
  return (
    <div className={"inner-card fake-card " + color}>
      <span className="middle">{num}</span>
      <span className="top left">&nbsp;{num}</span>
      <span className="top right">{num}&nbsp;</span>
      <span className="down left mirror">{num}&nbsp;</span>
      <span className="down right mirror">&nbsp;{num}</span>
    </div>
  );
};

class Card extends React.Component {
  render() {
    const { card } = this.props;
    var img;
    if (card.isHidden) {
      img = imgs[`back`];
    } else if (card.isDragon) {
      img = imgs["dragon"];
    } else if (card.isPhoenix && card.color) {
      img = imgs[`phoenix-${card.color}`];
    } else if (card.num && card.color) {
      img = imgs[`${card.num}-${card.color}`];
    }
    return (
      <div className="card">
        {img ? (
          <InnerImg path={img} />
        ) : (
          <InnerNumber num={card.num} color={card.color} />
        )}
      </div>
    );
  }
}

export default Card;
