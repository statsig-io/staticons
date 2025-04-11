
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.472 3.206a2.412 2.412 0 0 1 3.41 0l.951.95 8.622 8.622c.622.622.196 1.686-.683 1.707l-1.14.027a.25.25 0 0 0-.17.073l-5.348 5.348a2.75 2.75 0 0 1-3.89 0l-5.17-5.17a2.75 2.75 0 0 1 0-3.889l3.838-3.837-.42-.42a2.412 2.412 0 0 1 0-3.41Zm1.48 2.77 1.29-1.29-.42-.42a.912.912 0 1 0-1.29 1.29l.42.42Zm2.35-.229-1.819 1.82-2.05 2.05c1.446-.006 2.989.57 4.185 1.997.876 1.043 1.7 1.776 2.6 2.115.86.323 1.89.323 3.274-.325a.755.755 0 0 1 .087-.035 1.75 1.75 0 0 1 .99-.355l-7.266-7.267Zm-6.187 7.956a1.25 1.25 0 0 1-.062-1.7.74.74 0 0 0 .03-.028c1.15-1.08 3.7-1.406 5.386.603.924 1.1 1.953 2.078 3.221 2.555.57.214 1.166.32 1.796.307l-3.433 3.433a1.25 1.25 0 0 1-1.768 0l-5.17-5.17ZM20.288 16.1c.527.923 1.33 2.42 1.44 3.247.162 1.22-.526 2.153-1.654 2.153-1.127 0-1.815-.933-1.653-2.153.122-.924.914-2.346 1.438-3.248a.248.248 0 0 1 .43.001Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorFill
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi40NzIgMy4yMDZhMi40MTIgMi40MTIgMCAwIDEgMy40MSAwbC45NTEuOTUgOC42MjIgOC42MjJjLjYyMi42MjIuMTk2IDEuNjg2LS42ODMgMS43MDdsLTEuMTQuMDI3YS4yNS4yNSAwIDAgMC0uMTcuMDczbC01LjM0OCA1LjM0OGEyLjc1IDIuNzUgMCAwIDEtMy44OSAwbC01LjE3LTUuMTdhMi43NSAyLjc1IDAgMCAxIDAtMy44ODlsMy44MzgtMy44MzctLjQyLS40MmEyLjQxMiAyLjQxMiAwIDAgMSAwLTMuNDFabTEuNDggMi43NyAxLjI5LTEuMjktLjQyLS40MmEuOTEyLjkxMiAwIDEgMC0xLjI5IDEuMjlsLjQyLjQyWm0yLjM1LS4yMjktMS44MTkgMS44Mi0yLjA1IDIuMDVjMS40NDYtLjAwNiAyLjk4OS41NyA0LjE4NSAxLjk5Ny44NzYgMS4wNDMgMS43IDEuNzc2IDIuNiAyLjExNS44Ni4zMjMgMS44OS4zMjMgMy4yNzQtLjMyNWEuNzU1Ljc1NSAwIDAgMSAuMDg3LS4wMzUgMS43NSAxLjc1IDAgMCAxIC45OS0uMzU1bC03LjI2Ni03LjI2N1ptLTYuMTg3IDcuOTU2YTEuMjUgMS4yNSAwIDAgMS0uMDYyLTEuNy43NC43NCAwIDAgMCAuMDMtLjAyOGMxLjE1LTEuMDggMy43LTEuNDA2IDUuMzg2LjYwMy45MjQgMS4xIDEuOTUzIDIuMDc4IDMuMjIxIDIuNTU1LjU3LjIxNCAxLjE2Ni4zMiAxLjc5Ni4zMDdsLTMuNDMzIDMuNDMzYTEuMjUgMS4yNSAwIDAgMS0xLjc2OCAwbC01LjE3LTUuMTdaTTIwLjI4OCAxNi4xYy41MjcuOTIzIDEuMzMgMi40MiAxLjQ0IDMuMjQ3LjE2MiAxLjIyLS41MjYgMi4xNTMtMS42NTQgMi4xNTMtMS4xMjcgMC0xLjgxNS0uOTMzLTEuNjUzLTIuMTUzLjEyMi0uOTI0LjkxNC0yLjM0NiAxLjQzOC0zLjI0OGEuMjQ4LjI0OCAwIDAgMSAuNDMuMDAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorFill = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-fill',
        'staticon-FormatColorFill',
        className
      ),
      ...props,
    })
);
FormatColorFill.displayName = 'FormatColorFill'

export default FormatColorFill;
