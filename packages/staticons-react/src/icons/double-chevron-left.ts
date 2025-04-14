
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.951 14.834a.625.625 0 1 0 .848-.919L10.559 10l4.24-3.916a.625.625 0 0 0-.848-.918l-4.34 4.008a1.125 1.125 0 0 0 0 1.653l4.34 4.008Zm-4.25 0a.625.625 0 0 0 .848-.918L6.31 10l4.24-3.916a.625.625 0 1 0-.848-.919l-4.34 4.008a1.125 1.125 0 0 0 0 1.653l4.34 4.008Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTUxIDE0LjgzNGEuNjI1LjYyNSAwIDEgMCAuODQ4LS45MTlMMTAuNTU5IDEwbDQuMjQtMy45MTZhLjYyNS42MjUgMCAwIDAtLjg0OC0uOTE4bC00LjM0IDQuMDA4YTEuMTI1IDEuMTI1IDAgMCAwIDAgMS42NTNsNC4zNCA0LjAwOFptLTQuMjUgMGEuNjI1LjYyNSAwIDAgMCAuODQ4LS45MThMNi4zMSAxMGw0LjI0LTMuOTE2YS42MjUuNjI1IDAgMSAwLS44NDgtLjkxOWwtNC4zNCA0LjAwOGExLjEyNSAxLjEyNSAwIDAgMCAwIDEuNjUzbDQuMzQgNC4wMDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
