
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M15.123 3.001c1.036 0 1.875.84 1.875 1.875v2.598a.625.625 0 1 1-1.25 0V4.876a.625.625 0 0 0-.625-.625h-2.59a.625.625 0 1 1 0-1.25h2.59Zm-10.247.001c-1.036 0-1.875.84-1.875 1.875v2.59a.625.625 0 1 0 1.25 0v-2.59c0-.345.28-.625.625-.625h2.598a.625.625 0 0 0 0-1.25H4.876Zm10.248 13.995a1.874 1.874 0 0 0 1.875-1.874v-2.591a.625.625 0 0 0-1.25 0v2.59c0 .346-.28.626-.625.626h-2.599a.625.625 0 1 0 0 1.25h2.599ZM3.001 15.124c0 1.036.84 1.875 1.875 1.875h2.591a.625.625 0 0 0 0-1.25h-2.59a.625.625 0 0 1-.626-.625v-2.599a.625.625 0 1 0-1.25 0v2.599Z"}]]

/**
 * @component @name FullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE1LjEyMyAzLjAwMWMxLjAzNiAwIDEuODc1Ljg0IDEuODc1IDEuODc1djIuNTk4YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY0Ljg3NmEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVoLTIuNTlhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDIuNTlabS0xMC4yNDcuMDAxYy0xLjAzNiAwLTEuODc1Ljg0LTEuODc1IDEuODc1djIuNTlhLjYyNS42MjUgMCAxIDAgMS4yNSAwdi0yLjU5YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDIuNTk4YS42MjUuNjI1IDAgMCAwIDAtMS4yNUg0Ljg3NlptMTAuMjQ4IDEzLjk5NWExLjg3NCAxLjg3NCAwIDAgMCAxLjg3NS0xLjg3NHYtMi41OTFhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjIuNTljMCAuMzQ2LS4yOC42MjYtLjYyNS42MjZoLTIuNTk5YS42MjUuNjI1IDAgMSAwIDAgMS4yNWgyLjU5OVpNMy4wMDEgMTUuMTI0YzAgMS4wMzYuODQgMS44NzUgMS44NzUgMS44NzVoMi41OTFhLjYyNS42MjUgMCAwIDAgMC0xLjI1aC0yLjU5YS42MjUuNjI1IDAgMCAxLS42MjYtLjYyNXYtMi41OTlhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjIuNTk5WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FullScreen = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-full-screen',
        'staticon-FullScreen',
        className
      ),
      ...props,
    })
);
FullScreen.displayName = 'FullScreen'

export default FullScreen;
