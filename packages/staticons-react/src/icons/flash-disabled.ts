
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m5.8 4.92 2.154-2.74.006 4.002a1.09 1.09 0 0 0 1.09 1.087l4.004-.003c.022 0 .032.005.038.01a.077.077 0 0 1 .026.03.077.077 0 0 1 .008.039.065.065 0 0 1-.016.035l-2.134 2.714L5.8 4.92Zm-1.666.096L.932 1.814a.623.623 0 0 1 .881-.881L4.91 4.03l2.35-2.987C7.897.23 9.202.68 9.203 1.714L9.21 6.02l3.843-.003c1.103 0 1.72 1.27 1.04 2.137l-2.227 2.831 3.202 3.202a.623.623 0 1 1-.881.88l-3.096-3.095-2.348 2.985c-.639.813-1.945.36-1.944-.674l.004-4.298H2.946c-1.103 0-1.72-1.27-1.038-2.137l2.226-2.832Zm6.066 6.066-2.15 2.736.003-3.994a1.09 1.09 0 0 0-1.089-1.09H2.946a.064.064 0 0 1-.038-.009.076.076 0 0 1-.026-.03.076.076 0 0 1-.008-.039c0-.007.003-.019.016-.036l2.135-2.714 5.175 5.176Z","clip-rule":"evenodd"}]]

/**
 * @component @name FlashDisabled
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNS44IDQuOTIgMi4xNTQtMi43NC4wMDYgNC4wMDJhMS4wOSAxLjA5IDAgMCAwIDEuMDkgMS4wODdsNC4wMDQtLjAwM2MuMDIyIDAgLjAzMi4wMDUuMDM4LjAxYS4wNzcuMDc3IDAgMCAxIC4wMjYuMDMuMDc3LjA3NyAwIDAgMSAuMDA4LjAzOS4wNjUuMDY1IDAgMCAxLS4wMTYuMDM1bC0yLjEzNCAyLjcxNEw1LjggNC45MlptLTEuNjY2LjA5NkwuOTMyIDEuODE0YS42MjMuNjIzIDAgMCAxIC44ODEtLjg4MUw0LjkxIDQuMDNsMi4zNS0yLjk4N0M3Ljg5Ny4yMyA5LjIwMi42OCA5LjIwMyAxLjcxNEw5LjIxIDYuMDJsMy44NDMtLjAwM2MxLjEwMyAwIDEuNzIgMS4yNyAxLjA0IDIuMTM3bC0yLjIyNyAyLjgzMSAzLjIwMiAzLjIwMmEuNjIzLjYyMyAwIDEgMS0uODgxLjg4bC0zLjA5Ni0zLjA5NS0yLjM0OCAyLjk4NWMtLjYzOS44MTMtMS45NDUuMzYtMS45NDQtLjY3NGwuMDA0LTQuMjk4SDIuOTQ2Yy0xLjEwMyAwLTEuNzItMS4yNy0xLjAzOC0yLjEzN2wyLjIyNi0yLjgzMlptNi4wNjYgNi4wNjYtMi4xNSAyLjczNi4wMDMtMy45OTRhMS4wOSAxLjA5IDAgMCAwLTEuMDg5LTEuMDlIMi45NDZhLjA2NC4wNjQgMCAwIDEtLjAzOC0uMDA5LjA3Ni4wNzYgMCAwIDEtLjAyNi0uMDMuMDc2LjA3NiAwIDAgMS0uMDA4LS4wMzljMC0uMDA3LjAwMy0uMDE5LjAxNi0uMDM2bDIuMTM1LTIuNzE0IDUuMTc1IDUuMTc2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FlashDisabled = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash-disabled',
        'staticon-FlashDisabled',
        className
      ),
      ...props,
    })
);
FlashDisabled.displayName = 'FlashDisabled'

export default FlashDisabled;
