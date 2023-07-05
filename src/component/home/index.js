import React from "react";
import { Wrap, WrapHome } from "./index.styled";
import Header from "../header";
import { LEFT, RIGHT } from "../../data/dataListItem";

const Home = ({
  listItem,
  title,
  desp,
  iconBtn,
  valueBtn,
  nameOffice,
  timeTransaction,
}) => {
  const handleExit = () => {
    console.log('handleExit');
  }
  const handleClickItem = () => {
    console.log('handleClickItem');

  }
  return (
    <Wrap>
      <Header nameOffice={nameOffice} timeTransaction={timeTransaction} />
      <WrapHome>
        <div className="header">
          <div className="header-title">{title}</div>
          <div className="header-desp">{desp}</div>
        </div>
        <div className="content">
          {listItem.map((item, index) => (
            <div className="content-item" key={index} onClick={handleClickItem}>
              {item.position === LEFT && (
                <div className="content-item-left general">
                  <div>{item.icon}</div>
                  <div>{item.value}</div>
                </div>
              )}
              {item.position === RIGHT && (
                <div className="content-item-right general">
                  <div>{item.value}</div>
                  <div>{item.icon}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      <div className="btn" onClick={handleExit}>
        <div>{iconBtn}</div>
        <span>{valueBtn}</span>
      </div>
      </WrapHome>
    </Wrap>
  );
};

export default Home;
