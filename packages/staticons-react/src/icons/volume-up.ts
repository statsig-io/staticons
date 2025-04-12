
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m5.986 5.206 2.119-1.947v9.425l-2.119-1.947a1.875 1.875 0 0 0-1.268-.494H2.376a.625.625 0 0 1-.625-.625V6.325c0-.345.28-.625.625-.625h2.342c.47 0 .923-.177 1.268-.494Zm3.369-2.231c0-.98-1.165-1.491-1.886-.829L5.14 4.285a.625.625 0 0 1-.423.165H2.376C1.34 4.45.501 5.29.501 6.325v3.293c0 1.036.84 1.875 1.875 1.875h2.342c.157 0 .307.059.423.165l2.328 2.139c.721.662 1.886.15 1.886-.829V2.975Zm1.538-.66a.625.625 0 0 1 .832-.3c2.134 1.003 3.776 3.13 3.776 5.98 0 2.85-1.642 4.978-3.776 5.98a.625.625 0 0 1-.532-1.131c1.738-.817 3.058-2.529 3.058-4.849 0-2.32-1.32-4.032-3.058-4.849a.625.625 0 0 1-.3-.831Zm-.521 3.178a.625.625 0 0 1 .822-.324c1.065.463 1.779 1.574 1.779 2.83 0 1.257-.714 2.368-1.779 2.831a.625.625 0 0 1-.498-1.146c.58-.252 1.027-.893 1.027-1.684 0-.791-.448-1.432-1.027-1.685a.625.625 0 0 1-.324-.822Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNS45ODYgNS4yMDYgMi4xMTktMS45NDd2OS40MjVsLTIuMTE5LTEuOTQ3YTEuODc1IDEuODc1IDAgMCAwLTEuMjY4LS40OTRIMi4zNzZhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1VjYuMzI1YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDIuMzQyYy40NyAwIC45MjMtLjE3NyAxLjI2OC0uNDk0Wm0zLjM2OS0yLjIzMWMwLS45OC0xLjE2NS0xLjQ5MS0xLjg4Ni0uODI5TDUuMTQgNC4yODVhLjYyNS42MjUgMCAwIDEtLjQyMy4xNjVIMi4zNzZDMS4zNCA0LjQ1LjUwMSA1LjI5LjUwMSA2LjMyNXYzLjI5M2MwIDEuMDM2Ljg0IDEuODc1IDEuODc1IDEuODc1aDIuMzQyYy4xNTcgMCAuMzA3LjA1OS40MjMuMTY1bDIuMzI4IDIuMTM5Yy43MjEuNjYyIDEuODg2LjE1IDEuODg2LS44MjlWMi45NzVabTEuNTM4LS42NmEuNjI1LjYyNSAwIDAgMSAuODMyLS4zYzIuMTM0IDEuMDAzIDMuNzc2IDMuMTMgMy43NzYgNS45OCAwIDIuODUtMS42NDIgNC45NzgtMy43NzYgNS45OGEuNjI1LjYyNSAwIDAgMS0uNTMyLTEuMTMxYzEuNzM4LS44MTcgMy4wNTgtMi41MjkgMy4wNTgtNC44NDkgMC0yLjMyLTEuMzItNC4wMzItMy4wNTgtNC44NDlhLjYyNS42MjUgMCAwIDEtLjMtLjgzMVptLS41MjEgMy4xNzhhLjYyNS42MjUgMCAwIDEgLjgyMi0uMzI0YzEuMDY1LjQ2MyAxLjc3OSAxLjU3NCAxLjc3OSAyLjgzIDAgMS4yNTctLjcxNCAyLjM2OC0xLjc3OSAyLjgzMWEuNjI1LjYyNSAwIDAgMS0uNDk4LTEuMTQ2Yy41OC0uMjUyIDEuMDI3LS44OTMgMS4wMjctMS42ODQgMC0uNzkxLS40NDgtMS40MzItMS4wMjctMS42ODVhLjYyNS42MjUgMCAwIDEtLjMyNC0uODIyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-up',
        'staticon-VolumeUp',
        className
      ),
      ...props,
    })
);
VolumeUp.displayName = 'VolumeUp'

export default VolumeUp;
