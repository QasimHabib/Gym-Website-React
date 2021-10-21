/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles}  id="about">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="When you're at the gym feeling like you'll never be one of those people who look like they've been at it their entire lives, remember that they all started somewhere."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="When you're at the gym feeling like you'll never be one of those people who look like they've been at it their entire lives, remember that they all started somewhere."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
