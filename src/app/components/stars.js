import React from "react";
import styles from "../../../styles/modules/stars.module.scss";
import StarIcon from "../icons/startIcon";

function Stars(props) {
  let rating = 0;

  if (props.stars) {
    rating =
      (((Math.round((props.stars * 10) / 5) * 5) / 10) * 20).toString() + "%";
  }

  return (
    <React.Fragment>
      <div className={styles.WrapperDiv}>
        <span className={styles.RatingSpan}>({props.stars || "N/A"})</span>
        <div className={styles.BackStarsDiv}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <div className={styles.FrontDiv} style={{ width: rating }}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stars;
