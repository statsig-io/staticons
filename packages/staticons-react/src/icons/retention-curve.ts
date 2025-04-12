
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.794 1.669c.345 0 .625.28.625.625v10.25c0 .344.28.624.625.624h11.252a.625.625 0 0 1 0 1.25H3.044a1.875 1.875 0 0 1-1.875-1.875V2.294c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.327 1.734c.345 0 .625.28.625.625 0 .917.002 1.983.142 3.043.14 1.062.414 2.071.923 2.886.66 1.057 1.697 1.669 3.07 2.017 1.389.353 3.06.42 4.913.42a.625.625 0 0 1 0 1.25c-1.854 0-3.666-.063-5.22-.458-1.571-.399-2.938-1.15-3.823-2.566-.642-1.028-.95-2.235-1.102-3.385-.152-1.153-.153-2.297-.153-3.207 0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name RetentionCurve
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS43OTQgMS42NjljLjM0NSAwIC42MjUuMjguNjI1LjYyNXYxMC4yNWMwIC4zNDQuMjguNjI0LjYyNS42MjRoMTEuMjUyYS42MjUuNjI1IDAgMCAxIDAgMS4yNUgzLjA0NGExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NVYyLjI5NGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzI3IDEuNzM0Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjUgMCAuOTE3LjAwMiAxLjk4My4xNDIgMy4wNDMuMTQgMS4wNjIuNDE0IDIuMDcxLjkyMyAyLjg4Ni42NiAxLjA1NyAxLjY5NyAxLjY2OSAzLjA3IDIuMDE3IDEuMzg5LjM1MyAzLjA2LjQyIDQuOTEzLjQyYS42MjUuNjI1IDAgMCAxIDAgMS4yNWMtMS44NTQgMC0zLjY2Ni0uMDYzLTUuMjItLjQ1OC0xLjU3MS0uMzk5LTIuOTM4LTEuMTUtMy44MjMtMi41NjYtLjY0Mi0xLjAyOC0uOTUtMi4yMzUtMS4xMDItMy4zODUtLjE1Mi0xLjE1My0uMTUzLTIuMjk3LS4xNTMtMy4yMDcgMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RetentionCurve = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention-curve',
        'staticon-RetentionCurve',
        className
      ),
      ...props,
    })
);
RetentionCurve.displayName = 'RetentionCurve'

export default RetentionCurve;
