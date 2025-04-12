
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.368 8.958a1.125 1.125 0 0 0 0-1.916L7.15 4.448a1.125 1.125 0 0 0-1.714.958v5.188c0 .88.964 1.42 1.714.959l4.218-2.595ZM6.686 5.63 10.54 8l-3.854 2.37V5.63Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M.55 8a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0ZM1.8 8a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 0 0 1.8 8Z","clip-rule":"evenodd"}]]

/**
 * @component @name Run
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMzY4IDguOTU4YTEuMTI1IDEuMTI1IDAgMCAwIDAtMS45MTZMNy4xNSA0LjQ0OGExLjEyNSAxLjEyNSAwIDAgMC0xLjcxNC45NTh2NS4xODhjMCAuODguOTY0IDEuNDIgMS43MTQuOTU5bDQuMjE4LTIuNTk1Wk02LjY4NiA1LjYzIDEwLjU0IDhsLTMuODU0IDIuMzdWNS42M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS41NSA4YTcuNSA3LjUgMCAxIDAgMTUgMCA3LjUgNy41IDAgMCAwLTE1IDBaTTEuOCA4YTYuMjUgNi4yNSAwIDEgMCAxMi41IDBBNi4yNSA2LjI1IDAgMCAwIDEuOCA4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Run = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-run',
        'staticon-Run',
        className
      ),
      ...props,
    })
);
Run.displayName = 'Run'

export default Run;
