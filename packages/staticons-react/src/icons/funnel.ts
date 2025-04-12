
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m2.363 2.124 4.195 6.053c.13.189.2.412.2.641v4.99l2.462-1.09V8.816c0-.23.07-.455.201-.644l4.215-6.048H2.363ZM1.2 2.64A1.125 1.125 0 0 1 2.124.874h11.751c.91 0 1.443 1.022.923 1.768L10.47 8.855v3.944c0 .445-.262.849-.669 1.029L7.09 15.029a1.125 1.125 0 0 1-1.58-1.028V8.857L1.198 2.64Z","clip-rule":"evenodd"}]]

/**
 * @component @name Funnel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMi4zNjMgMi4xMjQgNC4xOTUgNi4wNTNjLjEzLjE4OS4yLjQxMi4yLjY0MXY0Ljk5bDIuNDYyLTEuMDlWOC44MTZjMC0uMjMuMDctLjQ1NS4yMDEtLjY0NGw0LjIxNS02LjA0OEgyLjM2M1pNMS4yIDIuNjRBMS4xMjUgMS4xMjUgMCAwIDEgMi4xMjQuODc0aDExLjc1MWMuOTEgMCAxLjQ0MyAxLjAyMi45MjMgMS43NjhMMTAuNDcgOC44NTV2My45NDRjMCAuNDQ1LS4yNjIuODQ5LS42NjkgMS4wMjlMNy4wOSAxNS4wMjlhMS4xMjUgMS4xMjUgMCAwIDEtMS41OC0xLjAyOFY4Ljg1N0wxLjE5OCAyLjY0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Funnel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-funnel',
        'staticon-Funnel',
        className
      ),
      ...props,
    })
);
Funnel.displayName = 'Funnel'

export default Funnel;
