
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.248 13.16c0 .601-.487 1.089-1.088 1.089h-1.454a1.089 1.089 0 0 1-1.088-1.089V2.84c0-.6.487-1.088 1.088-1.088h1.454c.601 0 1.088.487 1.088 1.088v10.32ZM11.869 13h1.13V6.537h-1.13v6.462Zm0-7.712V3.002h1.13v2.285h-1.13ZM4.295 14.25a1.09 1.09 0 0 0 1.089-1.089V6.66c0-.602-.488-1.089-1.089-1.089H2.84c-.6 0-1.088.487-1.088 1.089v6.501c0 .601.487 1.089 1.088 1.089h1.454ZM4.134 13H3.002v-2.653h1.13V13ZM3.002 6.82v2.276h1.13V6.82h-1.13Zm4.43 6.179V8.824h1.131v4.175h-1.13Zm1.131-7.713v2.288h-1.13V5.286h1.13Zm.162 8.963c.6 0 1.088-.488 1.088-1.089V5.124c0-.6-.487-1.088-1.088-1.088H7.27c-.601 0-1.089.487-1.089 1.088v8.036a1.09 1.09 0 0 0 1.089 1.089h1.454Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMjQ4IDEzLjE2YzAgLjYwMS0uNDg3IDEuMDg5LTEuMDg4IDEuMDg5aC0xLjQ1NGExLjA4OSAxLjA4OSAwIDAgMS0xLjA4OC0xLjA4OVYyLjg0YzAtLjYuNDg3LTEuMDg4IDEuMDg4LTEuMDg4aDEuNDU0Yy42MDEgMCAxLjA4OC40ODcgMS4wODggMS4wODh2MTAuMzJaTTExLjg2OSAxM2gxLjEzVjYuNTM3aC0xLjEzdjYuNDYyWm0wLTcuNzEyVjMuMDAyaDEuMTN2Mi4yODVoLTEuMTNaTTQuMjk1IDE0LjI1YTEuMDkgMS4wOSAwIDAgMCAxLjA4OS0xLjA4OVY2LjY2YzAtLjYwMi0uNDg4LTEuMDg5LTEuMDg5LTEuMDg5SDIuODRjLS42IDAtMS4wODguNDg3LTEuMDg4IDEuMDg5djYuNTAxYzAgLjYwMS40ODcgMS4wODkgMS4wODggMS4wODloMS40NTRaTTQuMTM0IDEzSDMuMDAydi0yLjY1M2gxLjEzVjEzWk0zLjAwMiA2LjgydjIuMjc2aDEuMTNWNi44MmgtMS4xM1ptNC40MyA2LjE3OVY4LjgyNGgxLjEzMXY0LjE3NWgtMS4xM1ptMS4xMzEtNy43MTN2Mi4yODhoLTEuMTNWNS4yODZoMS4xM1ptLjE2MiA4Ljk2M2MuNiAwIDEuMDg4LS40ODggMS4wODgtMS4wODlWNS4xMjRjMC0uNi0uNDg3LTEuMDg4LTEuMDg4LTEuMDg4SDcuMjdjLS42MDEgMC0xLjA4OS40ODctMS4wODkgMS4wODh2OC4wMzZhMS4wOSAxLjA5IDAgMCAwIDEuMDg5IDEuMDg5aDEuNDU0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StackedBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-stacked-bar',
        'staticon-StackedBar',
        className
      ),
      ...props,
    })
);
StackedBar.displayName = 'StackedBar'

export default StackedBar;
