import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./style.css";
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";


const ArmorLinearProgress = withStyles({
  root: {
    height: "1rem"
  },
  colorPrimary: {
    backgroundColor: '#a3b1ff',
  },
  barColorPrimary: {
    backgroundColor: '#3d5afe',
  },

})(LinearProgress);
const HealthLinearProgress = withStyles({
  root: {
    height: "1rem",
  },
  colorPrimary: {
    backgroundColor: '#f6685e',
  },
  barColorPrimary: {
    backgroundColor: '#f44336',
  },

})(LinearProgress);

export default function HealthArmorBars(props) {
    const {health, armor, totalHealth, totalArmor} = useSelector(state => state[props.character])
    // going to need 
    return (
      <div className="bars">
        <ArmorLinearProgress
        variant="determinate"
        value={`${Math.round(armor / totalArmor * 100)}`}
        />
        <HealthLinearProgress
        variant="determinate"
        value={`${Math.round(health / totalHealth * 100)}`}
        />
      </div>
    );
}
 