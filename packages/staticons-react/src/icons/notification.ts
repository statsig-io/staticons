
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M18.48 12.004c.029.325.137.64.315.914l.804 1.24A2.488 2.488 0 0 1 17.512 18h-1.838c-.366 1.522-1.996 2.5-3.674 2.5s-3.308-.978-3.674-2.5H6.474a2.474 2.474 0 0 1-2.057-3.849l.822-1.23a2 2 0 0 0 .33-.938l.243-2.79a6.235 6.235 0 0 1 12.423 0l.245 2.81Zm-11.417.11.244-2.791a4.735 4.735 0 0 1 9.434 0l.245 2.81a3.5 3.5 0 0 0 .55 1.602l.805 1.239a.988.988 0 0 1-.83 1.526H6.475a.974.974 0 0 1-.81-1.515l.823-1.232a3.5 3.5 0 0 0 .576-1.64ZM12 19c-1.012 0-1.732-.459-2.057-1h4.114c-.325.541-1.045 1-2.057 1Z","clip-rule":"evenodd"}]]

/**
 * @component @name Notification
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguNDggMTIuMDA0Yy4wMjkuMzI1LjEzNy42NC4zMTUuOTE0bC44MDQgMS4yNEEyLjQ4OCAyLjQ4OCAwIDAgMSAxNy41MTIgMThoLTEuODM4Yy0uMzY2IDEuNTIyLTEuOTk2IDIuNS0zLjY3NCAyLjVzLTMuMzA4LS45NzgtMy42NzQtMi41SDYuNDc0YTIuNDc0IDIuNDc0IDAgMCAxLTIuMDU3LTMuODQ5bC44MjItMS4yM2EyIDIgMCAwIDAgLjMzLS45MzhsLjI0My0yLjc5YTYuMjM1IDYuMjM1IDAgMCAxIDEyLjQyMyAwbC4yNDUgMi44MVptLTExLjQxNy4xMS4yNDQtMi43OTFhNC43MzUgNC43MzUgMCAwIDEgOS40MzQgMGwuMjQ1IDIuODFhMy41IDMuNSAwIDAgMCAuNTUgMS42MDJsLjgwNSAxLjIzOWEuOTg4Ljk4OCAwIDAgMS0uODMgMS41MjZINi40NzVhLjk3NC45NzQgMCAwIDEtLjgxLTEuNTE1bC44MjMtMS4yMzJhMy41IDMuNSAwIDAgMCAuNTc2LTEuNjRaTTEyIDE5Yy0xLjAxMiAwLTEuNzMyLS40NTktMi4wNTctMWg0LjExNGMtLjMyNS41NDEtMS4wNDUgMS0yLjA1NyAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Notification = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-notification',
        'staticon-Notification',
        className
      ),
      ...props,
    })
);
Notification.displayName = 'Notification'

export default Notification;
