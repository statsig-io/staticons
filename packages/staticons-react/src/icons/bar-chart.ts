
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.256 2.624c0-.621.504-1.125 1.125-1.125h3.237c.622 0 1.125.504 1.125 1.125v2.288h3.131c.622 0 1.125.504 1.125 1.125v7.339c0 .621-.503 1.125-1.125 1.125H5.256V14.5h-3.13a1.125 1.125 0 0 1-1.125-1.125V8.828c0-.62.504-1.125 1.125-1.125h3.13V2.624Zm0 10.626V8.953H2.251v4.297h3.005Zm4.237 0H6.507V2.75h2.986v10.5Zm1.25 0V6.163h3.006v7.089h-3.005Z","clip-rule":"evenodd"}]]

/**
 * @component @name BarChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yNTYgMi42MjRjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgzLjIzN2MuNjIyIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1djIuMjg4aDMuMTMxYy42MjIgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjV2Ny4zMzljMCAuNjIxLS41MDMgMS4xMjUtMS4xMjUgMS4xMjVINS4yNTZWMTQuNWgtMy4xM2ExLjEyNSAxLjEyNSAwIDAgMS0xLjEyNS0xLjEyNVY4LjgyOGMwLS42Mi41MDQtMS4xMjUgMS4xMjUtMS4xMjVoMy4xM1YyLjYyNFptMCAxMC42MjZWOC45NTNIMi4yNTF2NC4yOTdoMy4wMDVabTQuMjM3IDBINi41MDdWMi43NWgyLjk4NnYxMC41Wm0xLjI1IDBWNi4xNjNoMy4wMDZ2Ny4wODloLTMuMDA1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const BarChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-bar-chart',
        'staticon-BarChart',
        className
      ),
      ...props,
    })
);
BarChart.displayName = 'BarChart'

export default BarChart;
