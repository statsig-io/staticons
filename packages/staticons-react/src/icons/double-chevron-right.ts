
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.55 12.334a.625.625 0 1 1-.849-.918L7.401 8 3.7 4.584a.625.625 0 1 1 .849-.918L8.41 7.232a1.045 1.045 0 0 1 0 1.536l-3.86 3.566Zm3.752 0a.625.625 0 1 1-.848-.918L11.153 8l-3.7-3.416a.625.625 0 1 1 .849-.918l3.862 3.566a1.045 1.045 0 0 1 0 1.536l-3.862 3.566Z","clip-rule":"evenodd"}]]

/**
 * @component @name DoubleChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC41NSAxMi4zMzRhLjYyNS42MjUgMCAxIDEtLjg0OS0uOTE4TDcuNDAxIDggMy43IDQuNTg0YS42MjUuNjI1IDAgMSAxIC44NDktLjkxOEw4LjQxIDcuMjMyYTEuMDQ1IDEuMDQ1IDAgMCAxIDAgMS41MzZsLTMuODYgMy41NjZabTMuNzUyIDBhLjYyNS42MjUgMCAxIDEtLjg0OC0uOTE4TDExLjE1MyA4bC0zLjctMy40MTZhLjYyNS42MjUgMCAxIDEgLjg0OS0uOTE4bDMuODYyIDMuNTY2YTEuMDQ1IDEuMDQ1IDAgMCAxIDAgMS41MzZsLTMuODYyIDMuNTY2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
