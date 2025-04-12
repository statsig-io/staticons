
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 .75c.345 0 .625.28.625.625v7.666l2.98-2.94a.635.635 0 0 1 .89 0 .615.615 0 0 1 0 .878l-3.338 3.293c-.64.63-1.675.63-2.314 0L3.505 6.98a.615.615 0 0 1 0-.878.635.635 0 0 1 .89 0l2.98 2.94V1.375c0-.345.28-.625.625-.625ZM3.126 13.501a.625.625 0 0 1-.625-.625V8.973a.625.625 0 0 0-1.25 0v3.903c0 1.036.84 1.875 1.875 1.875h9.748c1.035 0 1.875-.84 1.875-1.875V8.973a.625.625 0 1 0-1.25 0v3.903c0 .345-.28.625-.625.625H3.126Z","clip-rule":"evenodd"}]]

/**
 * @component @name Download
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAuNzVjLjM0NSAwIC42MjUuMjguNjI1LjYyNXY3LjY2NmwyLjk4LTIuOTRhLjYzNS42MzUgMCAwIDEgLjg5IDAgLjYxNS42MTUgMCAwIDEgMCAuODc4bC0zLjMzOCAzLjI5M2MtLjY0LjYzLTEuNjc1LjYzLTIuMzE0IDBMMy41MDUgNi45OGEuNjE1LjYxNSAwIDAgMSAwLS44NzguNjM1LjYzNSAwIDAgMSAuODkgMGwyLjk4IDIuOTRWMS4zNzVjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVaTTMuMTI2IDEzLjUwMWEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWOC45NzNhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjMuOTAzYzAgMS4wMzYuODQgMS44NzUgMS44NzUgMS44NzVoOS43NDhjMS4wMzUgMCAxLjg3NS0uODQgMS44NzUtMS44NzVWOC45NzNhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjMuOTAzYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDMuMTI2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Download = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-download',
        'staticon-Download',
        className
      ),
      ...props,
    })
);
Download.displayName = 'Download'

export default Download;
