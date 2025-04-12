
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.129 2.976c0 1.092.885 1.977 1.977 1.977H12.4a1.977 1.977 0 1 0 0-3.954h-2.293A1.977 1.977 0 0 0 8.13 2.976Zm1.977.727a.727.727 0 1 1 0-1.454H12.4a.727.727 0 1 1 0 1.454h-2.293ZM8.13 8c0 1.092.885 1.977 1.977 1.977H12.4a1.977 1.977 0 1 0 0-3.955h-2.293A1.977 1.977 0 0 0 8.13 8Zm1.977.727a.727.727 0 1 1 0-1.455H12.4a.727.727 0 1 1 0 1.455h-2.293Zm0 6.273a1.977 1.977 0 1 1 0-3.954H12.4a1.977 1.977 0 1 1 0 3.954h-2.293Zm-.727-1.977c0 .402.325.727.727.727H12.4a.727.727 0 0 0 0-1.454h-2.293a.727.727 0 0 0-.727.727ZM2.249 2.352a.625.625 0 0 0 0 1.25h4.042a.625.625 0 1 0 0-1.25H2.249Zm-.625 5.647c0-.345.28-.625.625-.625h4.042a.625.625 0 1 1 0 1.25H2.249A.625.625 0 0 1 1.624 8Zm.625 4.4a.625.625 0 1 0 0 1.25h4.042a.625.625 0 1 0 0-1.25H2.249Z","clip-rule":"evenodd"}]]

/**
 * @component @name EnvironmentView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xMjkgMi45NzZjMCAxLjA5Mi44ODUgMS45NzcgMS45NzcgMS45NzdIMTIuNGExLjk3NyAxLjk3NyAwIDEgMCAwLTMuOTU0aC0yLjI5M0ExLjk3NyAxLjk3NyAwIDAgMCA4LjEzIDIuOTc2Wm0xLjk3Ny43MjdhLjcyNy43MjcgMCAxIDEgMC0xLjQ1NEgxMi40YS43MjcuNzI3IDAgMSAxIDAgMS40NTRoLTIuMjkzWk04LjEzIDhjMCAxLjA5Mi44ODUgMS45NzcgMS45NzcgMS45NzdIMTIuNGExLjk3NyAxLjk3NyAwIDEgMCAwLTMuOTU1aC0yLjI5M0ExLjk3NyAxLjk3NyAwIDAgMCA4LjEzIDhabTEuOTc3LjcyN2EuNzI3LjcyNyAwIDEgMSAwLTEuNDU1SDEyLjRhLjcyNy43MjcgMCAxIDEgMCAxLjQ1NWgtMi4yOTNabTAgNi4yNzNhMS45NzcgMS45NzcgMCAxIDEgMC0zLjk1NEgxMi40YTEuOTc3IDEuOTc3IDAgMSAxIDAgMy45NTRoLTIuMjkzWm0tLjcyNy0xLjk3N2MwIC40MDIuMzI1LjcyNy43MjcuNzI3SDEyLjRhLjcyNy43MjcgMCAwIDAgMC0xLjQ1NGgtMi4yOTNhLjcyNy43MjcgMCAwIDAtLjcyNy43MjdaTTIuMjQ5IDIuMzUyYS42MjUuNjI1IDAgMCAwIDAgMS4yNWg0LjA0MmEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi4yNDlabS0uNjI1IDUuNjQ3YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDQuMDQyYS42MjUuNjI1IDAgMSAxIDAgMS4yNUgyLjI0OUEuNjI1LjYyNSAwIDAgMSAxLjYyNCA4Wm0uNjI1IDQuNGEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNC4wNDJhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDIuMjQ5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EnvironmentView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-environment-view',
        'staticon-EnvironmentView',
        className
      ),
      ...props,
    })
);
EnvironmentView.displayName = 'EnvironmentView'

export default EnvironmentView;
