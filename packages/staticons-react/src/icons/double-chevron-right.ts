
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.438 14.834a.625.625 0 1 1-.848-.919L9.83 10 5.59 6.083a.625.625 0 1 1 .848-.918l4.34 4.008a1.125 1.125 0 0 1 0 1.653l-4.34 4.008Zm4.25 0a.625.625 0 0 1-.848-.918L14.08 10 9.84 6.084a.625.625 0 0 1 .848-.919l4.34 4.008a1.125 1.125 0 0 1 0 1.653l-4.34 4.008Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi40MzggMTQuODM0YS42MjUuNjI1IDAgMSAxLS44NDgtLjkxOUw5LjgzIDEwIDUuNTkgNi4wODNhLjYyNS42MjUgMCAxIDEgLjg0OC0uOTE4bDQuMzQgNC4wMDhhMS4xMjUgMS4xMjUgMCAwIDEgMCAxLjY1M2wtNC4zNCA0LjAwOFptNC4yNSAwYS42MjUuNjI1IDAgMCAxLS44NDgtLjkxOEwxNC4wOCAxMCA5Ljg0IDYuMDg0YS42MjUuNjI1IDAgMCAxIC44NDgtLjkxOWw0LjM0IDQuMDA4YTEuMTI1IDEuMTI1IDAgMCAxIDAgMS42NTNsLTQuMzQgNC4wMDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DoubleChevronRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-double-chevron-right',
        'staticon-DoubleChevronRight',
        className
      ),
      ...props,
    })
);
DoubleChevronRight.displayName = 'DoubleChevronRight'

export default DoubleChevronRight;
