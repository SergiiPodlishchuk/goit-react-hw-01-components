import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const randomIntegerFromInterval = (min, max) => {
  const red = Math.floor(Math.random() * (max - min + 1) + min);
  const green = Math.floor(Math.random() * (max - min + 1) + min);
  const blue = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${red},${green},${blue})`;
};

function Statistics({ title, stats }) {
  const randomColor = randomIntegerFromInterval(0, 255);

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((format) => {
          const randomColor = randomIntegerFromInterval(0, 255);
          return (
            <li
              key={format.id}
              className={styles.item}
              style={{ backgroundColor: randomColor }}
            >
              <span className={styles.label}>{format.label}</span>
              <span className={styles.percentage}>{format.percentage}%</span>
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
