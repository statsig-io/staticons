
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.614 17.801a.75.75 0 1 0 1.018-1.102L12.543 12l5.089-4.7a.75.75 0 0 0-1.018-1.102l-5.287 4.883a1.25 1.25 0 0 0 0 1.837l5.287 4.883Zm-4.799 0a.75.75 0 1 0 1.018-1.102L7.745 12l5.088-4.7a.75.75 0 1 0-1.018-1.102l-5.287 4.883a1.25 1.25 0 0 0 0 1.837l5.287 4.883Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNjE0IDE3LjgwMWEuNzUuNzUgMCAxIDAgMS4wMTgtMS4xMDJMMTIuNTQzIDEybDUuMDg5LTQuN2EuNzUuNzUgMCAwIDAtMS4wMTgtMS4xMDJsLTUuMjg3IDQuODgzYTEuMjUgMS4yNSAwIDAgMCAwIDEuODM3bDUuMjg3IDQuODgzWm0tNC43OTkgMGEuNzUuNzUgMCAxIDAgMS4wMTgtMS4xMDJMNy43NDUgMTJsNS4wODgtNC43YS43NS43NSAwIDEgMC0xLjAxOC0xLjEwMmwtNS4yODcgNC44ODNhMS4yNSAxLjI1IDAgMCAwIDAgMS44MzdsNS4yODcgNC44ODNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DoubleChevronLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-double-chevron-left',
        'staticon-DoubleChevronLeft',
        className
      ),
      ...props,
    })
);
DoubleChevronLeft.displayName = 'DoubleChevronLeft'

export default DoubleChevronLeft;
