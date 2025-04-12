
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.45 12.334a.625.625 0 1 0 .849-.918L8.599 8l3.7-3.416a.625.625 0 0 0-.848-.918L7.588 7.232a1.045 1.045 0 0 0 0 1.536l3.861 3.566Zm-3.752 0a.625.625 0 1 0 .848-.918L4.847 8l3.7-3.416a.625.625 0 1 0-.849-.918L3.836 7.232a1.045 1.045 0 0 0 0 1.536l3.862 3.566Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDUgMTIuMzM0YS42MjUuNjI1IDAgMSAwIC44NDktLjkxOEw4LjU5OSA4bDMuNy0zLjQxNmEuNjI1LjYyNSAwIDAgMC0uODQ4LS45MThMNy41ODggNy4yMzJhMS4wNDUgMS4wNDUgMCAwIDAgMCAxLjUzNmwzLjg2MSAzLjU2NlptLTMuNzUyIDBhLjYyNS42MjUgMCAxIDAgLjg0OC0uOTE4TDQuODQ3IDhsMy43LTMuNDE2YS42MjUuNjI1IDAgMSAwLS44NDktLjkxOEwzLjgzNiA3LjIzMmExLjA0NSAxLjA0NSAwIDAgMCAwIDEuNTM2bDMuODYyIDMuNTY2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
