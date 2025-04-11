
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.846 10.2a.75.75 0 0 0 1.06-1.06l-4.022-4.024a1.25 1.25 0 0 0-1.768 0L7.093 9.14a.75.75 0 0 0 1.06 1.061L12 6.354l3.846 3.846Zm-7.693 3.6a.75.75 0 1 0-1.06 1.06l4.023 4.024a1.25 1.25 0 0 0 1.768 0l4.023-4.023a.75.75 0 0 0-1.061-1.061L12 17.646 8.153 13.8Z","clip-rule":"evenodd"}]]

/**
 * @component @name UnfoldMore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuODQ2IDEwLjJhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNmwtNC4wMjItNC4wMjRhMS4yNSAxLjI1IDAgMCAwLTEuNzY4IDBMNy4wOTMgOS4xNGEuNzUuNzUgMCAwIDAgMS4wNiAxLjA2MUwxMiA2LjM1NGwzLjg0NiAzLjg0NlptLTcuNjkzIDMuNmEuNzUuNzUgMCAxIDAtMS4wNiAxLjA2bDQuMDIzIDQuMDI0YTEuMjUgMS4yNSAwIDAgMCAxLjc2OCAwbDQuMDIzLTQuMDIzYS43NS43NSAwIDAgMC0xLjA2MS0xLjA2MUwxMiAxNy42NDYgOC4xNTMgMTMuOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UnfoldMore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-unfold-more',
        'staticon-UnfoldMore',
        className
      ),
      ...props,
    })
);
UnfoldMore.displayName = 'UnfoldMore'

export default UnfoldMore;
