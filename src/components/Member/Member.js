/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";

const Member = ({ text }) => (
  <section css={styles} >
    <h2>
      DON’T <span>THINK</span>, BEGIN <span>TODAY</span>!
    </h2>
    <p>
    As the main fear is the fear of the economic realities, for there is a classroom around the world. Time to start from
      <br /> the disease except the mourning.
    </p>
    <Button text="BECOME A MEMBER" />
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
