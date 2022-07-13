import {css} from 'lit';

const CalendarStyles = css`
  :host {
    display: block;
  }

  * {
    font-family: 'Montserrat', sans-serif !important;
    box-sizing: border-box;
  }

  .calendar {
    width: 496px;
    height: auto;
    border-radius: 8px;
  }

  .calendar.elevate {
    -webkit-box-shadow: 0 2px 16px rgb(0 0 0 / 15%);
    box-shadow: 0 2px 16px rgb(0 0 0 / 15%);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .calendar-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    border-top: 1.5px solid #eeeeee;
    padding: 0 12px;
  }

  .header {
    width: 240px;
    height: 56px;
    display: flex;
    align-items: center;
  }

  .header:nth-child(1) {
    padding: 0 32px 0 8px;
  }

  .header:nth-child(2) {
    padding: 0 8px 0 32px;
  }

  .month-container {
    display: flex;
    justify-content: space-between;
  }

  .month {
    width: 240px;
    height: auto;
  }

  .weekdays {
    width: 100%;
    padding: 0 6.4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .weekdays div {
    font-size: 0.75rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bebebe;
    width: 28px;
  }

  .clear-dates-btn,
  .done-btn {
    color: #eda075;
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .clear-dates-btn {
    padding: 0;
  }

  .done-btn {
    background-color: #eda075;
    color: #fff;
    border-radius: 0.3rem;
    height: 30px;
    width: 56px;
  }

  .selected-days-text {
    font-size: 0.75rem;
  }

  .nav-btn {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-top: 4px;
    cursor: pointer;
  }

  .header-month-year {
    font-size: 0.8rem;
    font-weight: 700;
    flex: 1;
    text-align: center;
  }

  .days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 3.2px;
  }

  .days div {
    font-size: 0.75rem;
    margin: 4.8px;
    width: 23.2px;
    height: 26.4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .last-month-days {
    cursor: default !important;
  }

  .past-date,
  .blur-date {
    color: #909090;
    opacity: 0.4;
    cursor: not-allowed !important;
  }

  .past-date.selected,
  .today.selected,
  .future-date.selected {
    background-color: #eda075;
    color: #fff;
    border-radius: 50%;
  }

  .future-date.selected-range {
    background-color: hsl(22, 50%, 95%);
    color: #000;
    border-radius: 50%;
  }
`;

export default CalendarStyles;
