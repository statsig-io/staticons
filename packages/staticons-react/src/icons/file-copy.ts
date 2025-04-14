
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.701 2a2.125 2.125 0 0 0-2.125 2.125v.357h-.453a2.125 2.125 0 0 0-2.125 2.126v9.267C2.998 17.05 3.95 18 5.123 18H12.3a2.125 2.125 0 0 0 2.125-2.125v-.357h.453a2.125 2.125 0 0 0 2.125-2.125V7.702c0-.574-.233-1.124-.645-1.525l-3.683-3.576A2.125 2.125 0 0 0 11.194 2H7.7Zm6.723 12.268h.453a.875.875 0 0 0 .874-.875V7.702a.875.875 0 0 0-.265-.628l-3.683-3.576a.875.875 0 0 0-.61-.248H7.701a.875.875 0 0 0-.874.875v.357h1.788c.553 0 1.084.216 1.48.601L13.78 8.66c.412.4.645.95.645 1.524v4.084Zm-9.3-8.535a.875.875 0 0 0-.875.875v9.267c0 .483.391.875.874.875H12.3a.875.875 0 0 0 .874-.875V10.45h-3.27a1.625 1.625 0 0 1-1.625-1.625V5.733H5.123Zm4.404.542L12.54 9.2H9.903a.375.375 0 0 1-.375-.375v-2.55Z","clip-rule":"evenodd"}]]

/**
 * @component @name FileCopy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy43MDEgMmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNSAyLjEyNXYuMzU3aC0uNDUzYTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1IDIuMTI2djkuMjY3QzIuOTk4IDE3LjA1IDMuOTUgMTggNS4xMjMgMThIMTIuM2EyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNXYtLjM1N2guNDUzYTIuMTI1IDIuMTI1IDAgMCAwIDIuMTI1LTIuMTI1VjcuNzAyYzAtLjU3NC0uMjMzLTEuMTI0LS42NDUtMS41MjVsLTMuNjgzLTMuNTc2QTIuMTI1IDIuMTI1IDAgMCAwIDExLjE5NCAySDcuN1ptNi43MjMgMTIuMjY4aC40NTNhLjg3NS44NzUgMCAwIDAgLjg3NC0uODc1VjcuNzAyYS44NzUuODc1IDAgMCAwLS4yNjUtLjYyOGwtMy42ODMtMy41NzZhLjg3NS44NzUgMCAwIDAtLjYxLS4yNDhINy43MDFhLjg3NS44NzUgMCAwIDAtLjg3NC44NzV2LjM1N2gxLjc4OGMuNTUzIDAgMS4wODQuMjE2IDEuNDguNjAxTDEzLjc4IDguNjZjLjQxMi40LjY0NS45NS42NDUgMS41MjR2NC4wODRabS05LjMtOC41MzVhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2OS4yNjdjMCAuNDgzLjM5MS44NzUuODc0Ljg3NUgxMi4zYS44NzUuODc1IDAgMCAwIC44NzQtLjg3NVYxMC40NWgtMy4yN2ExLjYyNSAxLjYyNSAwIDAgMS0xLjYyNS0xLjYyNVY1LjczM0g1LjEyM1ptNC40MDQuNTQyTDEyLjU0IDkuMkg5LjkwM2EuMzc1LjM3NSAwIDAgMS0uMzc1LS4zNzV2LTIuNTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FileCopy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-file-copy',
        'staticon-FileCopy',
        className
      ),
      ...props,
    })
);
FileCopy.displayName = 'FileCopy'

export default FileCopy;
