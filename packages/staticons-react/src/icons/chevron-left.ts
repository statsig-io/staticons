
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.792 17.759a.75.75 0 0 1-1.06.042l-5.375-4.964a1.14 1.14 0 0 1 0-1.675L13.732 6.2a.75.75 0 1 1 1.018 1.1L9.661 12l5.089 4.7a.75.75 0 0 1 .042 1.059Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzkyIDE3Ljc1OWEuNzUuNzUgMCAwIDEtMS4wNi4wNDJsLTUuMzc1LTQuOTY0YTEuMTQgMS4xNCAwIDAgMSAwLTEuNjc1TDEzLjczMiA2LjJhLjc1Ljc1IDAgMSAxIDEuMDE4IDEuMUw5LjY2MSAxMmw1LjA4OSA0LjdhLjc1Ljc1IDAgMCAxIC4wNDIgMS4wNTlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-left',
        'staticon-ChevronLeft',
        className
      ),
      ...props,
    })
);
ChevronLeft.displayName = 'ChevronLeft'

export default ChevronLeft;
