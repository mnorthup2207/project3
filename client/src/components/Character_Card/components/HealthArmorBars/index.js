import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./style.css";
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { red, indigo } from '@material-ui/core/colors'


const ArmorLinearProgress = withStyles({
  root: {
    height: "1rem"
  },
  colorPrimary: {
    backgroundColor: indigo[100],
  },
  barColorPrimary: {
    backgroundColor: indigo[500],
  },

})(LinearProgress);
const HealthLinearProgress = withStyles({
  root: {
    height: "1rem",
  },
  colorPrimary: {
    backgroundColor: red[50],
  },
  barColorPrimary: {
    backgroundColor: red[500],
  },

})(LinearProgress);

export default function HealthArmorBars(props) {
    const {health, armor, totalHealth, totalArmor} = useSelector(state => state[props.character])
    // going to need 
    return (
      <div className="bars">
        <ArmorLinearProgress
        variant="determinate"
        value={`${Math.round(parseInt(armor) / parseInt(totalArmor) * 100)}`}
        />
        <HealthLinearProgress
        variant="determinate"
        value={`${Math.round(parseInt(health) / parseInt(totalHealth) * 100)}`}
        />
      </div>
    );
}
 