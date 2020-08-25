import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.css";

const randomIntegerFromInterval = (min, max) => {
  const red = Math.floor(Math.random() * (max - min + 1) + min);
  const green = Math.floor(Math.random() * (max - min + 1) + min);
  const blue = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${red},${green},${blue})`;
};

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = randomIntegerFromInterval(0, 255);
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: randomColor }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistics;
