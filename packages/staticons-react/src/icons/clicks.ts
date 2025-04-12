
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.003 4.507A4.368 4.368 0 1 0 4.416 9.77a.625.625 0 0 1-.739 1.009 5.618 5.618 0 1 1 8.473-6.772.625.625 0 1 1-1.147.499Z"}],["path",{"fill":"#000","d":"M3.884 5.282a3.31 3.31 0 0 1 6.1-.473.625.625 0 1 1-1.115.564A2.06 2.06 0 1 0 5.682 7.86a.625.625 0 0 1-.818.945 3.31 3.31 0 0 1-.98-3.523Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.167 10.702c.863.644.424 2.015-.653 2.037l-2.171.043a.386.386 0 0 0-.323.186l-1.123 1.858c-.557.922-1.964.617-2.09-.452l-.708-6.029C6.958 7.14 8.326 6.35 9.3 7.075l4.868 3.627Zm-1.027.794L8.552 8.077a.133.133 0 0 0-.211.123l.667 5.681.942-1.56c.29-.48.807-.778 1.368-.789l1.822-.036Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clicks
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjAwMyA0LjUwN0E0LjM2OCA0LjM2OCAwIDEgMCA0LjQxNiA5Ljc3YS42MjUuNjI1IDAgMCAxLS43MzkgMS4wMDkgNS42MTggNS42MTggMCAxIDEgOC40NzMtNi43NzIuNjI1LjYyNSAwIDEgMS0xLjE0Ny40OTlaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTMuODg0IDUuMjgyYTMuMzEgMy4zMSAwIDAgMSA2LjEtLjQ3My42MjUuNjI1IDAgMSAxLTEuMTE1LjU2NEEyLjA2IDIuMDYgMCAxIDAgNS42ODIgNy44NmEuNjI1LjYyNSAwIDAgMS0uODE4Ljk0NSAzLjMxIDMuMzEgMCAwIDEtLjk4LTMuNTIzWiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjE2NyAxMC43MDJjLjg2My42NDQuNDI0IDIuMDE1LS42NTMgMi4wMzdsLTIuMTcxLjA0M2EuMzg2LjM4NiAwIDAgMC0uMzIzLjE4NmwtMS4xMjMgMS44NThjLS41NTcuOTIyLTEuOTY0LjYxNy0yLjA5LS40NTJsLS43MDgtNi4wMjlDNi45NTggNy4xNCA4LjMyNiA2LjM1IDkuMyA3LjA3NWw0Ljg2OCAzLjYyN1ptLTEuMDI3Ljc5NEw4LjU1MiA4LjA3N2EuMTMzLjEzMyAwIDAgMC0uMjExLjEyM2wuNjY3IDUuNjgxLjk0Mi0xLjU2Yy4yOS0uNDguODA3LS43NzggMS4zNjgtLjc4OWwxLjgyMi0uMDM2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clicks = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clicks',
        'staticon-Clicks',
        className
      ),
      ...props,
    })
);
Clicks.displayName = 'Clicks'

export default Clicks;
