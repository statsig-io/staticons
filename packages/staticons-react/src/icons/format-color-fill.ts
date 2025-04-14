
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.526 2.707a1.988 1.988 0 0 1 2.812 0l.78.78 7.165 7.165a.775.775 0 0 1-.53 1.323L14.695 12a.209.209 0 0 0-.142.061l-4.484 4.484c-.83.83-2.175.83-3.005 0l-4.442-4.441a2.125 2.125 0 0 1 0-3.005l3.242-3.242-.338-.338a1.988 1.988 0 0 1 0-2.812Zm1.222 2.266L7.792 3.93l-.338-.338A.738.738 0 1 0 6.41 4.635l.338.338Zm1.928-.16L7.19 6.299 5.524 7.965c1.182.001 2.44.477 3.418 1.642.718.856 1.394 1.456 2.13 1.733.702.264 1.544.264 2.678-.267a.62.62 0 0 1 .072-.028c.229-.173.505-.276.794-.292l-5.94-5.94Zm-5.17 5.17.026-.026a.63.63 0 0 0 .048-.04c.939-.883 3.026-1.15 4.405.493.758.904 1.603 1.707 2.647 2.1.46.173.943.26 1.452.253L9.185 15.66a.875.875 0 0 1-1.237 0l-4.442-4.44a.875.875 0 0 1 0-1.237Zm13.296 3.468c.433.757 1.089 1.98 1.179 2.659.132 1-.432 1.766-1.357 1.766s-1.49-.765-1.357-1.766c.1-.757.747-1.92 1.177-2.66a.206.206 0 0 1 .358 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorFill
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MjYgMi43MDdhMS45ODggMS45ODggMCAwIDEgMi44MTIgMGwuNzguNzggNy4xNjUgNy4xNjVhLjc3NS43NzUgMCAwIDEtLjUzIDEuMzIzTDE0LjY5NSAxMmEuMjA5LjIwOSAwIDAgMC0uMTQyLjA2MWwtNC40ODQgNC40ODRjLS44My44My0yLjE3NS44My0zLjAwNSAwbC00LjQ0Mi00LjQ0MWEyLjEyNSAyLjEyNSAwIDAgMSAwLTMuMDA1bDMuMjQyLTMuMjQyLS4zMzgtLjMzOGExLjk4OCAxLjk4OCAwIDAgMSAwLTIuODEyWm0xLjIyMiAyLjI2Nkw3Ljc5MiAzLjkzbC0uMzM4LS4zMzhBLjczOC43MzggMCAxIDAgNi40MSA0LjYzNWwuMzM4LjMzOFptMS45MjgtLjE2TDcuMTkgNi4yOTkgNS41MjQgNy45NjVjMS4xODIuMDAxIDIuNDQuNDc3IDMuNDE4IDEuNjQyLjcxOC44NTYgMS4zOTQgMS40NTYgMi4xMyAxLjczMy43MDIuMjY0IDEuNTQ0LjI2NCAyLjY3OC0uMjY3YS42Mi42MiAwIDAgMSAuMDcyLS4wMjhjLjIyOS0uMTczLjUwNS0uMjc2Ljc5NC0uMjkybC01Ljk0LTUuOTRabS01LjE3IDUuMTcuMDI2LS4wMjZhLjYzLjYzIDAgMCAwIC4wNDgtLjA0Yy45MzktLjg4MyAzLjAyNi0xLjE1IDQuNDA1LjQ5My43NTguOTA0IDEuNjAzIDEuNzA3IDIuNjQ3IDIuMS40Ni4xNzMuOTQzLjI2IDEuNDUyLjI1M0w5LjE4NSAxNS42NmEuODc1Ljg3NSAwIDAgMS0xLjIzNyAwbC00LjQ0Mi00LjQ0YS44NzUuODc1IDAgMCAxIDAtMS4yMzdabTEzLjI5NiAzLjQ2OGMuNDMzLjc1NyAxLjA4OSAxLjk4IDEuMTc5IDIuNjU5LjEzMiAxLS40MzIgMS43NjYtMS4zNTcgMS43NjZzLTEuNDktLjc2NS0xLjM1Ny0xLjc2NmMuMS0uNzU3Ljc0Ny0xLjkyIDEuMTc3LTIuNjZhLjIwNi4yMDYgMCAwIDEgLjM1OCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorFill = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-fill',
        'staticon-FormatColorFill',
        className
      ),
      ...props,
    })
);
FormatColorFill.displayName = 'FormatColorFill'

export default FormatColorFill;
