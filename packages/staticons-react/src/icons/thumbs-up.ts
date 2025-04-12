
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.604 2.67c0-1.2-.684-2.031-1.556-2.245a1.692 1.692 0 0 0-1.274.179c-.4.238-.682.642-.788 1.154-.374 1.794-.939 2.74-1.488 3.66a48.1 48.1 0 0 0-.196.331c-.31.529-.612 1.091-.83 1.809-.22.718-.349 1.566-.349 2.672 0 2.958 2.397 5.397 5.366 5.397h6.042a1.778 1.778 0 0 0 1.444-2.814 1.773 1.773 0 0 0 .188-2.317 1.772 1.772 0 0 0 .184-2.296 1.778 1.778 0 0 0-1.248-3.043h-5.08a.49.49 0 0 1-.508-.52l.01-.16c.04-.595.083-1.262.083-1.807Zm2.214 6.041a.625.625 0 0 1 .015-1.25H13.1a.528.528 0 0 0 0-1.055H8.02c-1.001 0-1.821-.82-1.755-1.849l.01-.153c.04-.606.08-1.232.08-1.734 0-.698-.36-.971-.603-1.031a.445.445 0 0 0-.336.038c-.074.044-.164.136-.206.336-.417 2.004-1.075 3.105-1.637 4.045l-.192.323c-.292.498-.536.962-.713 1.542-.177.579-.294 1.3-.294 2.307 0 2.279 1.848 4.147 4.116 4.147h6.042a.528.528 0 0 0 .044-1.053H9.839a.625.625 0 1 1-.006-1.252h2.698c.027 0 .054 0 .08.002h.117a.528.528 0 0 0 0-1.056h-2.89a.625.625 0 1 1 .004-1.25h3.063a.528.528 0 0 0 0-1.056H9.818Z","clip-rule":"evenodd"}]]

/**
 * @component @name ThumbsUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42MDQgMi42N2MwLTEuMi0uNjg0LTIuMDMxLTEuNTU2LTIuMjQ1YTEuNjkyIDEuNjkyIDAgMCAwLTEuMjc0LjE3OWMtLjQuMjM4LS42ODIuNjQyLS43ODggMS4xNTQtLjM3NCAxLjc5NC0uOTM5IDIuNzQtMS40ODggMy42NmE0OC4xIDQ4LjEgMCAwIDAtLjE5Ni4zMzFjLS4zMS41MjktLjYxMiAxLjA5MS0uODMgMS44MDktLjIyLjcxOC0uMzQ5IDEuNTY2LS4zNDkgMi42NzIgMCAyLjk1OCAyLjM5NyA1LjM5NyA1LjM2NiA1LjM5N2g2LjA0MmExLjc3OCAxLjc3OCAwIDAgMCAxLjQ0NC0yLjgxNCAxLjc3MyAxLjc3MyAwIDAgMCAuMTg4LTIuMzE3IDEuNzcyIDEuNzcyIDAgMCAwIC4xODQtMi4yOTYgMS43NzggMS43NzggMCAwIDAtMS4yNDgtMy4wNDNoLTUuMDhhLjQ5LjQ5IDAgMCAxLS41MDgtLjUybC4wMS0uMTZjLjA0LS41OTUuMDgzLTEuMjYyLjA4My0xLjgwN1ptMi4yMTQgNi4wNDFhLjYyNS42MjUgMCAwIDEgLjAxNS0xLjI1SDEzLjFhLjUyOC41MjggMCAwIDAgMC0xLjA1NUg4LjAyYy0xLjAwMSAwLTEuODIxLS44Mi0xLjc1NS0xLjg0OWwuMDEtLjE1M2MuMDQtLjYwNi4wOC0xLjIzMi4wOC0xLjczNCAwLS42OTgtLjM2LS45NzEtLjYwMy0xLjAzMWEuNDQ1LjQ0NSAwIDAgMC0uMzM2LjAzOGMtLjA3NC4wNDQtLjE2NC4xMzYtLjIwNi4zMzYtLjQxNyAyLjAwNC0xLjA3NSAzLjEwNS0xLjYzNyA0LjA0NWwtLjE5Mi4zMjNjLS4yOTIuNDk4LS41MzYuOTYyLS43MTMgMS41NDItLjE3Ny41NzktLjI5NCAxLjMtLjI5NCAyLjMwNyAwIDIuMjc5IDEuODQ4IDQuMTQ3IDQuMTE2IDQuMTQ3aDYuMDQyYS41MjguNTI4IDAgMCAwIC4wNDQtMS4wNTNIOS44MzlhLjYyNS42MjUgMCAxIDEtLjAwNi0xLjI1MmgyLjY5OGMuMDI3IDAgLjA1NCAwIC4wOC4wMDJoLjExN2EuNTI4LjUyOCAwIDAgMCAwLTEuMDU2aC0yLjg5YS42MjUuNjI1IDAgMSAxIC4wMDQtMS4yNWgzLjA2M2EuNTI4LjUyOCAwIDAgMCAwLTEuMDU2SDkuODE4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ThumbsUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-thumbs-up',
        'staticon-ThumbsUp',
        className
      ),
      ...props,
    })
);
ThumbsUp.displayName = 'ThumbsUp'

export default ThumbsUp;
