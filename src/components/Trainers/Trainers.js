/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section css={styles} >
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
         Now a lot of the urn, so that the fear of it, the economic consequences are great. But the pain
        <br />
        of the cartoon itself, it's just a warm mass of consequences.
      </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Bret D. Bowers"
        desc=""
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Hector T. Daigl"
        desc=""
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Power Trainer"
        name="Paul D. Newman"
        desc=""
        img={TrainerThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
