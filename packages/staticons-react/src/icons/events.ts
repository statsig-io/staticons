
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.832 4.274V3.127a.625.625 0 0 0-1.25 0v1.147H4.374A2.125 2.125 0 0 0 2.249 6.4v8.974c0 1.174.95 2.125 2.125 2.125h11.253a2.125 2.125 0 0 0 2.125-2.125V6.4a2.125 2.125 0 0 0-2.125-2.125h-1.229V3.127a.625.625 0 1 0-1.25 0v1.147H6.832Zm6.941 1.25H6.23a.634.634 0 0 1-.046 0h-1.81a.875.875 0 0 0-.875.875v1.284h13.003V6.399a.875.875 0 0 0-.875-.875h-1.854ZM3.5 15.375V8.932h13.003v6.44a.875.875 0 0 1-.875.875H4.374a.875.875 0 0 1-.875-.875Zm2.705-5.148c-.621 0-1.125.504-1.125 1.126v2.436c0 .622.504 1.126 1.125 1.126h2.437c.621 0 1.125-.504 1.125-1.126v-2.436c0-.622-.504-1.126-1.125-1.126H6.204Zm.126 3.437v-2.186h2.185v2.186H6.33Z","clip-rule":"evenodd"}]]

/**
 * @component @name Events
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi44MzIgNC4yNzRWMy4xMjdhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjEuMTQ3SDQuMzc0QTIuMTI1IDIuMTI1IDAgMCAwIDIuMjQ5IDYuNHY4Ljk3NGMwIDEuMTc0Ljk1IDIuMTI1IDIuMTI1IDIuMTI1aDExLjI1M2EyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY2LjRhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUtMi4xMjVoLTEuMjI5VjMuMTI3YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYxLjE0N0g2LjgzMlptNi45NDEgMS4yNUg2LjIzYS42MzQuNjM0IDAgMCAxLS4wNDYgMGgtMS44MWEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXYxLjI4NGgxMy4wMDNWNi4zOTlhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc1aC0xLjg1NFpNMy41IDE1LjM3NVY4LjkzMmgxMy4wMDN2Ni40NGEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUg0LjM3NGEuODc1Ljg3NSAwIDAgMS0uODc1LS44NzVabTIuNzA1LTUuMTQ4Yy0uNjIxIDAtMS4xMjUuNTA0LTEuMTI1IDEuMTI2djIuNDM2YzAgLjYyMi41MDQgMS4xMjYgMS4xMjUgMS4xMjZoMi40MzdjLjYyMSAwIDEuMTI1LS41MDQgMS4xMjUtMS4xMjZ2LTIuNDM2YzAtLjYyMi0uNTA0LTEuMTI2LTEuMTI1LTEuMTI2SDYuMjA0Wm0uMTI2IDMuNDM3di0yLjE4NmgyLjE4NXYyLjE4Nkg2LjMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Events = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-events',
        'staticon-Events',
        className
      ),
      ...props,
    })
);
Events.displayName = 'Events'

export default Events;
