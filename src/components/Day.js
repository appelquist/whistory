import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import Hour from "./Hour";

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
      showHours: !this.state.showHours,
    });
  }

  render() {
    const { data } = this.props;
    const { isHovering, showHours } = this.state;
    let direction = 0;
    if((Number(data.direction) + 180) > 359) {
      direction = Number(data.direction) - 180;
    } else {
      direction = Number(data.direction) + 180;
    }
    return (
      <>
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
              transform={{ rotate: data.direction }}
            />
          </div>
          <div className="DaysList-cell">{data.pressure}</div>
          <div className="DaysList-cell">{`${data.date.getDate()}/${
            data.date.getMonth() + 1
          }`}</div>
          <CSSTransition
            in={isHovering}
            timeout={200}
            classNames="hoursButton"
            unmountOnExit
          >
            <div
              onClick={this.handleClick}
              style={{ paddingTop: "0.5rem", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon="caret-down" size="lg" />
            </div>
          </CSSTransition>
        </div>
        {showHours && (
          <div className="Hour DaysList-row">
            <div className="DaysList-table">
              {data.hours.map((hour, i) => (
                <Hour data={hour} key={i} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Day;
