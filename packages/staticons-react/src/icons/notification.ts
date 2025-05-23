
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.5 13.486a3 3 0 0 1 .505-1.665l.71-1.065a1.5 1.5 0 0 0 .247-.702l.237-2.72a5.845 5.845 0 0 1 11.646.001l.239 2.735c.02.244.102.48.235.685l.698 1.077a3 3 0 0 1 .483 1.632v.138a2 2 0 0 1-2 2h-2.116c-.299 1.44-1.795 2.4-3.384 2.4s-3.085-.96-3.384-2.4H4.5a2 2 0 0 1-2-2v-.116Zm10.905.866H4.5a.75.75 0 0 1-.75-.75v-.116c0-.346.102-.684.294-.971l.711-1.065a2.75 2.75 0 0 0 .452-1.288l.238-2.719a4.595 4.595 0 0 1 9.155 0l.238 2.736c.04.448.188.88.432 1.256l.698 1.077c.184.284.282.614.282.952v.138a.75.75 0 0 1-.75.75h-2.095Zm-5.475 1.25c.277.622 1.029 1.15 2.07 1.15s1.793-.528 2.07-1.15H7.93Z","clip-rule":"evenodd"}]]

/**
 * @component @name Notification
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDEzLjQ4NmEzIDMgMCAwIDEgLjUwNS0xLjY2NWwuNzEtMS4wNjVhMS41IDEuNSAwIDAgMCAuMjQ3LS43MDJsLjIzNy0yLjcyYTUuODQ1IDUuODQ1IDAgMCAxIDExLjY0Ni4wMDFsLjIzOSAyLjczNWMuMDIuMjQ0LjEwMi40OC4yMzUuNjg1bC42OTggMS4wNzdhMyAzIDAgMCAxIC40ODMgMS42MzJ2LjEzOGEyIDIgMCAwIDEtMiAyaC0yLjExNmMtLjI5OSAxLjQ0LTEuNzk1IDIuNC0zLjM4NCAyLjRzLTMuMDg1LS45Ni0zLjM4NC0yLjRINC41YTIgMiAwIDAgMS0yLTJ2LS4xMTZabTEwLjkwNS44NjZINC41YS43NS43NSAwIDAgMS0uNzUtLjc1di0uMTE2YzAtLjM0Ni4xMDItLjY4NC4yOTQtLjk3MWwuNzExLTEuMDY1YTIuNzUgMi43NSAwIDAgMCAuNDUyLTEuMjg4bC4yMzgtMi43MTlhNC41OTUgNC41OTUgMCAwIDEgOS4xNTUgMGwuMjM4IDIuNzM2Yy4wNC40NDguMTg4Ljg4LjQzMiAxLjI1NmwuNjk4IDEuMDc3Yy4xODQuMjg0LjI4Mi42MTQuMjgyLjk1MnYuMTM4YS43NS43NSAwIDAgMS0uNzUuNzVoLTIuMDk1Wm0tNS40NzUgMS4yNWMuMjc3LjYyMiAxLjAyOSAxLjE1IDIuMDcgMS4xNXMxLjc5My0uNTI4IDIuMDctMS4xNUg3LjkzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
