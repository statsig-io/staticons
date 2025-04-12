
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.633.502a.625.625 0 1 0 0 1.25h4.734a.625.625 0 1 0 0-1.25H5.633ZM1.637 3.036a.637.637 0 0 0 0 1.275h.4l.608 9.176a2.155 2.155 0 0 0 2.15 2.012h6.41c1.134 0 2.074-.88 2.15-2.012l.606-9.176h.402a.637.637 0 1 0 0-1.275H1.637ZM12.71 4.311H3.29l.602 9.093a.905.905 0 0 0 .903.845h6.41c.476 0 .87-.37.902-.845l.602-9.093ZM6.444 6.884c.345 0 .625.28.625.625v3.527a.625.625 0 0 1-1.25 0V7.509c0-.345.28-.625.625-.625Zm3.112 0c.345 0 .625.28.625.625v3.527a.625.625 0 0 1-1.25 0V7.509c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Delete
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS42MzMuNTAyYS42MjUuNjI1IDAgMSAwIDAgMS4yNWg0LjczNGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS42MzNaTTEuNjM3IDMuMDM2YS42MzcuNjM3IDAgMCAwIDAgMS4yNzVoLjRsLjYwOCA5LjE3NmEyLjE1NSAyLjE1NSAwIDAgMCAyLjE1IDIuMDEyaDYuNDFjMS4xMzQgMCAyLjA3NC0uODggMi4xNS0yLjAxMmwuNjA2LTkuMTc2aC40MDJhLjYzNy42MzcgMCAxIDAgMC0xLjI3NUgxLjYzN1pNMTIuNzEgNC4zMTFIMy4yOWwuNjAyIDkuMDkzYS45MDUuOTA1IDAgMCAwIC45MDMuODQ1aDYuNDFjLjQ3NiAwIC44Ny0uMzcuOTAyLS44NDVsLjYwMi05LjA5M1pNNi40NDQgNi44ODRjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYzLjUyN2EuNjI1LjYyNSAwIDAgMS0xLjI1IDBWNy41MDljMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVabTMuMTEyIDBjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYzLjUyN2EuNjI1LjYyNSAwIDAgMS0xLjI1IDBWNy41MDljMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Delete = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-delete',
        'staticon-Delete',
        className
      ),
      ...props,
    })
);
Delete.displayName = 'Delete'

export default Delete;
