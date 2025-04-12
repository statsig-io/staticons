
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.125 2.749c0-.345.28-.625.625-.625h4.52v2.822c0 .898.727 1.625 1.625 1.625h2.98v6.68c0 .345-.28.625-.626.625h-8.5a.625.625 0 0 1-.624-.625V2.749Zm9.38 2.572L9.52 2.442v2.504c0 .208.168.375.376.375h2.61ZM3.75.874c-1.036 0-1.875.84-1.875 1.875v10.502c0 1.036.839 1.875 1.875 1.875h8.5c1.035 0 1.874-.84 1.874-1.875V5.943c0-.51-.206-.996-.573-1.35L10.24 1.4A1.875 1.875 0 0 0 8.937.874H3.75Zm5.137 7.573a.657.657 0 0 1 .902 0l1.644 1.576a.595.595 0 0 1 0 .866l-1.644 1.576a.657.657 0 0 1-.902 0 .594.594 0 0 1 0-.865l1.192-1.144-1.192-1.144a.594.594 0 0 1 0-.865Zm-2.678 0a.657.657 0 0 1 .903 0 .594.594 0 0 1 0 .865l-1.193 1.144L7.112 11.6a.594.594 0 0 1 0 .865.657.657 0 0 1-.903 0l-1.643-1.576a.594.594 0 0 1 0-.866l1.643-1.576Z","clip-rule":"evenodd"}]]

/**
 * @component @name SdkDocs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4xMjUgMi43NDljMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNC41MnYyLjgyMmMwIC44OTguNzI3IDEuNjI1IDEuNjI1IDEuNjI1aDIuOTh2Ni42OGMwIC4zNDUtLjI4LjYyNS0uNjI2LjYyNWgtOC41YS42MjUuNjI1IDAgMCAxLS42MjQtLjYyNVYyLjc0OVptOS4zOCAyLjU3Mkw5LjUyIDIuNDQydjIuNTA0YzAgLjIwOC4xNjguMzc1LjM3Ni4zNzVoMi42MVpNMy43NS44NzRjLTEuMDM2IDAtMS44NzUuODQtMS44NzUgMS44NzV2MTAuNTAyYzAgMS4wMzYuODM5IDEuODc1IDEuODc1IDEuODc1aDguNWMxLjAzNSAwIDEuODc0LS44NCAxLjg3NC0xLjg3NVY1Ljk0M2MwLS41MS0uMjA2LS45OTYtLjU3My0xLjM1TDEwLjI0IDEuNEExLjg3NSAxLjg3NSAwIDAgMCA4LjkzNy44NzRIMy43NVptNS4xMzcgNy41NzNhLjY1Ny42NTcgMCAwIDEgLjkwMiAwbDEuNjQ0IDEuNTc2YS41OTUuNTk1IDAgMCAxIDAgLjg2NmwtMS42NDQgMS41NzZhLjY1Ny42NTcgMCAwIDEtLjkwMiAwIC41OTQuNTk0IDAgMCAxIDAtLjg2NWwxLjE5Mi0xLjE0NC0xLjE5Mi0xLjE0NGEuNTk0LjU5NCAwIDAgMSAwLS44NjVabS0yLjY3OCAwYS42NTcuNjU3IDAgMCAxIC45MDMgMCAuNTk0LjU5NCAwIDAgMSAwIC44NjVsLTEuMTkzIDEuMTQ0TDcuMTEyIDExLjZhLjU5NC41OTQgMCAwIDEgMCAuODY1LjY1Ny42NTcgMCAwIDEtLjkwMyAwbC0xLjY0My0xLjU3NmEuNTk0LjU5NCAwIDAgMSAwLS44NjZsMS42NDMtMS41NzZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SdkDocs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sdk-docs',
        'staticon-SdkDocs',
        className
      ),
      ...props,
    })
);
SdkDocs.displayName = 'SdkDocs'

export default SdkDocs;
