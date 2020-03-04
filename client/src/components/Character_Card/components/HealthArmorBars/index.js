import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./style.css";
import { withStyles } from '@material-ui/core/styles';

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
    // going to need 
    return (
      <div className="bars">
        <ArmorLinearProgress
        variant="determinate"
        value={`${Math.round(props.armor / props.totalArmor * 100)}`}
        />
        <HealthLinearProgress
        variant="determinate"
        value={`${Math.round(props.health / props.totalHealth * 100)}`}
        />
      </div>
    );
}
 