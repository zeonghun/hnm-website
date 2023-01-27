import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "스포츠", "Sale", "지속가능성"];
  return (
    <div>
      <div className="login-button">
        <div className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>로그인</div>
      </div>
      <div className="logo-img">
        <img width={150} src="https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품 검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
