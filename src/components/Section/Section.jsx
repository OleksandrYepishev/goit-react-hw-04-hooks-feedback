import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Title } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      {children}
    </Fragment>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
