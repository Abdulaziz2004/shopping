import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/Home.svg";
import { ReactComponent as BagIcon } from "../assets/Bag.svg";
import Slide from "react-reveal/Slide";

const Sidebar = () => {
  const navLinks = [
    { to: "/", icon: <HomeIcon /> },
    { to: "/bag", icon: <BagIcon /> },
  ];
  return (
    <Slide left>
    <Wrapper>
      <Slide left cascade>
          <ul>
            {navLinks.map(({ to, icon }) => (
              <li>
                <NavLink to={to}>{icon}</NavLink>
              </li>
            ))}
          </ul>
      </Slide>
    </Wrapper>
    </Slide> 
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
    ul {
      li {
        list-style: none;
        margin-bottom: 32px;

        a {
          padding: 8px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.active {
            background-color: #1a1f16;
            path {
              fill: white;
            }
          }
          path {
            fill: black;
          }
        }
      }
    }
`;
