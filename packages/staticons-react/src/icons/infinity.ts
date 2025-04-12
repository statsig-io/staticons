
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m9.956 7.001-1.09 1 1.09.998c.796.683 1.5 1.204 2.253 1.204 1.154 0 2.12-.97 2.12-2.203 0-1.233-.966-2.202-2.12-2.202-.752 0-1.457.52-2.253 1.203ZM8 8.795 9.17 9.87l.008.007.007.006c.745.639 1.77 1.492 3.024 1.492 1.834 0 3.291-1.527 3.291-3.374 0-1.846-1.457-3.374-3.29-3.374-1.254 0-2.28.853-3.025 1.492l-.007.007-.007.006L8 7.205 6.83 6.131l-.008-.006-.007-.007C6.07 5.48 5.045 4.626 3.79 4.626 1.957 4.626.5 6.154.5 8c0 1.847 1.457 3.374 3.29 3.374 1.254 0 2.28-.853 3.025-1.492l.007-.006.007-.007L8 8.795ZM7.133 8 6.044 9c-.795.681-1.5 1.203-2.253 1.203-1.154 0-2.12-.97-2.12-2.203 0-1.233.966-2.202 2.12-2.202.752 0 1.458.52 2.253 1.203l1.09 1Z","clip-rule":"evenodd"}]]

/**
 * @component @name Infinity
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtOS45NTYgNy4wMDEtMS4wOSAxIDEuMDkuOTk4Yy43OTYuNjgzIDEuNSAxLjIwNCAyLjI1MyAxLjIwNCAxLjE1NCAwIDIuMTItLjk3IDIuMTItMi4yMDMgMC0xLjIzMy0uOTY2LTIuMjAyLTIuMTItMi4yMDItLjc1MiAwLTEuNDU3LjUyLTIuMjUzIDEuMjAzWk04IDguNzk1IDkuMTcgOS44N2wuMDA4LjAwNy4wMDcuMDA2Yy43NDUuNjM5IDEuNzcgMS40OTIgMy4wMjQgMS40OTIgMS44MzQgMCAzLjI5MS0xLjUyNyAzLjI5MS0zLjM3NCAwLTEuODQ2LTEuNDU3LTMuMzc0LTMuMjktMy4zNzQtMS4yNTQgMC0yLjI4Ljg1My0zLjAyNSAxLjQ5MmwtLjAwNy4wMDctLjAwNy4wMDZMOCA3LjIwNSA2LjgzIDYuMTMxbC0uMDA4LS4wMDYtLjAwNy0uMDA3QzYuMDcgNS40OCA1LjA0NSA0LjYyNiAzLjc5IDQuNjI2IDEuOTU3IDQuNjI2LjUgNi4xNTQuNSA4YzAgMS44NDcgMS40NTcgMy4zNzQgMy4yOSAzLjM3NCAxLjI1NCAwIDIuMjgtLjg1MyAzLjAyNS0xLjQ5MmwuMDA3LS4wMDYuMDA3LS4wMDdMOCA4Ljc5NVpNNy4xMzMgOCA2LjA0NCA5Yy0uNzk1LjY4MS0xLjUgMS4yMDMtMi4yNTMgMS4yMDMtMS4xNTQgMC0yLjEyLS45Ny0yLjEyLTIuMjAzIDAtMS4yMzMuOTY2LTIuMjAyIDIuMTItMi4yMDIuNzUyIDAgMS40NTguNTIgMi4yNTMgMS4yMDNsMS4wOSAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Infinity = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-infinity',
        'staticon-Infinity',
        className
      ),
      ...props,
    })
);
Infinity.displayName = 'Infinity'

export default Infinity;
