import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { getHoursData } from '../services/data'

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      showHours: false,
      hoursData: [],
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseHover() {
    this.setState({
      isHovering: !this.state.isHovering,
    });
  }

  handleClick() {
    this.setState({
      showHours: true,
      hoursData: getHoursData(this.props.station),
    });
  }

  render() {
    const { data } = this.props;
    const { isHovering } = this.state;
    return (
      <div
        className="Day DaysList-row"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div className="DaysList-cell">{data.temperature}</div>
        <div className="DaysList-cell">{data.velocity}</div>
        <div className="DaysList-cell">
          <FontAwesomeIcon
            icon="arrow-up"
            transform={{ rotate: 180 + data.direction }}
          />
        </div>
        <div className="DaysList-cell">{data.pressure}</div>
        <div className="DaysList-cell">{data.date}</div>
        <div style={{width: "1rem"}}>
        <CSSTransition
          in={isHovering}
          timeout={200}
          classNames="hoursButton"
          unmountOnExit
        >
          <div  onClick={this.handleClick} style={{paddingTop: "0.5rem", cursor: "pointer" }}>
            <FontAwesomeIcon icon="caret-down" size="lg" />
          </div>
        </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Day;
