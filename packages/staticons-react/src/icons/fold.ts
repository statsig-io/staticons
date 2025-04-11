
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.153 4.97a.75.75 0 0 0-1.06 1.06l4.023 4.023a1.25 1.25 0 0 0 1.768 0l4.023-4.023a.75.75 0 1 0-1.061-1.06L12 8.816 8.153 4.97Zm7.693 14.06a.75.75 0 0 0 1.06-1.06l-4.022-4.023a1.25 1.25 0 0 0-1.768 0L7.093 17.97a.75.75 0 0 0 1.06 1.06L12 15.184l3.846 3.846Z","clip-rule":"evenodd"}]]

/**
 * @component @name Fold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTMgNC45N2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDQuMDIzIDQuMDIzYTEuMjUgMS4yNSAwIDAgMCAxLjc2OCAwbDQuMDIzLTQuMDIzYS43NS43NSAwIDEgMC0xLjA2MS0xLjA2TDEyIDguODE2IDguMTUzIDQuOTdabTcuNjkzIDE0LjA2YS43NS43NSAwIDAgMCAxLjA2LTEuMDZsLTQuMDIyLTQuMDIzYTEuMjUgMS4yNSAwIDAgMC0xLjc2OCAwTDcuMDkzIDE3Ljk3YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMMTIgMTUuMTg0bDMuODQ2IDMuODQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Fold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-fold',
        'staticon-Fold',
        className
      ),
      ...props,
    })
);
Fold.displayName = 'Fold'

export default Fold;
