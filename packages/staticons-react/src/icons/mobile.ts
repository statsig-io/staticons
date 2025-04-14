
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.626 15.493V4.502a.875.875 0 0 0-.876-.875l-7.502.005a.875.875 0 0 0-.874.875v10.99c0 .484.392.876.876.876l7.502-.005a.875.875 0 0 0 .874-.875Zm1.25-10.991v10.99c0 1.174-.95 2.125-2.124 2.126l-7.502.005a2.125 2.125 0 0 1-2.126-2.125V4.507c0-1.173.95-2.125 2.124-2.125l7.502-.005c1.174 0 2.126.95 2.126 2.125Zm-3.724.811c0 .345-.28.625-.625.625H8.473a.625.625 0 1 1 0-1.25h3.054c.345 0 .625.28.625.625Zm-2.147 7.757a1.123 1.123 0 1 0 0 2.247 1.123 1.123 0 0 0 0-2.247Z","clip-rule":"evenodd"}]]

/**
 * @component @name Mobile
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjI2IDE1LjQ5M1Y0LjUwMmEuODc1Ljg3NSAwIDAgMC0uODc2LS44NzVsLTcuNTAyLjAwNWEuODc1Ljg3NSAwIDAgMC0uODc0Ljg3NXYxMC45OWMwIC40ODQuMzkyLjg3Ni44NzYuODc2bDcuNTAyLS4wMDVhLjg3NS44NzUgMCAwIDAgLjg3NC0uODc1Wm0xLjI1LTEwLjk5MXYxMC45OWMwIDEuMTc0LS45NSAyLjEyNS0yLjEyNCAyLjEyNmwtNy41MDIuMDA1YTIuMTI1IDIuMTI1IDAgMCAxLTIuMTI2LTIuMTI1VjQuNTA3YzAtMS4xNzMuOTUtMi4xMjUgMi4xMjQtMi4xMjVsNy41MDItLjAwNWMxLjE3NCAwIDIuMTI2Ljk1IDIuMTI2IDIuMTI1Wm0tMy43MjQuODExYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDguNDczYS42MjUuNjI1IDAgMSAxIDAtMS4yNWgzLjA1NGMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1Wm0tMi4xNDcgNy43NTdhMS4xMjMgMS4xMjMgMCAxIDAgMCAyLjI0NyAxLjEyMyAxLjEyMyAwIDAgMCAwLTIuMjQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Mobile = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-mobile',
        'staticon-Mobile',
        className
      ),
      ...props,
    })
);
Mobile.displayName = 'Mobile'

export default Mobile;
