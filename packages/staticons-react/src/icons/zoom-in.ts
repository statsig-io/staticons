
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.25 6.5a.75.75 0 0 1 .75.75v3.249h3.25a.75.75 0 0 1 0 1.5H12v3.25a.75.75 0 0 1-1.5 0V12H7.25a.75.75 0 0 1 0-1.5h3.25V7.25a.75.75 0 0 1 .75-.75Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.25 3.25a8 8 0 1 0 4.53 14.594l2.938 2.938a.75.75 0 0 0 1.061-1.06l-2.844-2.845A8 8 0 0 0 11.25 3.25Zm-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomIn
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjI1IDYuNWEuNzUuNzUgMCAwIDEgLjc1Ljc1djMuMjQ5aDMuMjVhLjc1Ljc1IDAgMCAxIDAgMS41SDEydjMuMjVhLjc1Ljc1IDAgMCAxLTEuNSAwVjEySDcuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDMuMjVWNy4yNWEuNzUuNzUgMCAwIDEgLjc1LS43NVoiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4yNSAzLjI1YTggOCAwIDEgMCA0LjUzIDE0LjU5NGwyLjkzOCAyLjkzOGEuNzUuNzUgMCAwIDAgMS4wNjEtMS4wNmwtMi44NDQtMi44NDVBOCA4IDAgMCAwIDExLjI1IDMuMjVabS02LjUgOGE2LjUgNi41IDAgMSAxIDEzIDAgNi41IDYuNSAwIDAgMS0xMyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomIn = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-in',
        'staticon-ZoomIn',
        className
      ),
      ...props,
    })
);
ZoomIn.displayName = 'ZoomIn'

export default ZoomIn;
