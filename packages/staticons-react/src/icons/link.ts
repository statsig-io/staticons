
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M6.259 17.762a4.255 4.255 0 0 1 0-6.017l.933-.933A.751.751 0 0 0 6.13 9.75l-.933.933a5.757 5.757 0 0 0 8.141 8.141l.933-.933a.75.75 0 0 0-1.062-1.062l-.933.933a4.255 4.255 0 0 1-6.017 0ZM9.75 6.13a.75.75 0 0 0 1.062 1.061l.933-.933a4.255 4.255 0 0 1 6.018 6.018l-.933.933a.75.75 0 1 0 1.062 1.062l.933-.933a5.757 5.757 0 0 0-8.142-8.142l-.933.933Z"}],["path",{"fill":"#000","d":"M9.15 13.808a.751.751 0 0 0 1.063 1.062l4.656-4.657a.75.75 0 0 0-1.062-1.062l-4.656 4.657Z"}]]

/**
 * @component @name Link
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMjU5IDE3Ljc2MmE0LjI1NSA0LjI1NSAwIDAgMSAwLTYuMDE3bC45MzMtLjkzM0EuNzUxLjc1MSAwIDAgMCA2LjEzIDkuNzVsLS45MzMuOTMzYTUuNzU3IDUuNzU3IDAgMCAwIDguMTQxIDguMTQxbC45MzMtLjkzM2EuNzUuNzUgMCAwIDAtMS4wNjItMS4wNjJsLS45MzMuOTMzYTQuMjU1IDQuMjU1IDAgMCAxLTYuMDE3IDBaTTkuNzUgNi4xM2EuNzUuNzUgMCAwIDAgMS4wNjIgMS4wNjFsLjkzMy0uOTMzYTQuMjU1IDQuMjU1IDAgMCAxIDYuMDE4IDYuMDE4bC0uOTMzLjkzM2EuNzUuNzUgMCAxIDAgMS4wNjIgMS4wNjJsLjkzMy0uOTMzYTUuNzU3IDUuNzU3IDAgMCAwLTguMTQyLTguMTQybC0uOTMzLjkzM1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNOS4xNSAxMy44MDhhLjc1MS43NTEgMCAwIDAgMS4wNjMgMS4wNjJsNC42NTYtNC42NTdhLjc1Ljc1IDAgMCAwLTEuMDYyLTEuMDYybC00LjY1NiA0LjY1N1oiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Link = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link',
        'staticon-Link',
        className
      ),
      ...props,
    })
);
Link.displayName = 'Link'

export default Link;
