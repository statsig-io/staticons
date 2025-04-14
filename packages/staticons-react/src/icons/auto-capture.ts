
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.652 2.502A2.152 2.152 0 0 0 2.5 4.654v2.998a.652.652 0 0 0 1.304 0V4.654c0-.468.38-.848.848-.848h2.99a.652.652 0 0 0 0-1.304h-2.99Zm7.698 0a.652.652 0 1 0 0 1.304h2.998c.468 0 .848.38.848.848v2.998a.652.652 0 1 0 1.304 0V4.654a2.152 2.152 0 0 0-2.152-2.152H12.35Zm-8.546 9.854a.652.652 0 1 0-1.304 0v2.991c0 1.189.964 2.153 2.152 2.153h2.99a.652.652 0 0 0 0-1.305h-2.99a.848.848 0 0 1-.848-.848v-2.99Zm13.696 0a.652.652 0 0 0-1.304 0v2.991c0 .469-.38.848-.848.848H12.35a.652.652 0 0 0 0 1.305h2.998a2.152 2.152 0 0 0 2.152-2.153v-2.99ZM12.27 10a2.27 2.27 0 1 1-4.54 0 2.27 2.27 0 0 1 4.54 0Zm1.304 0a3.574 3.574 0 1 1-7.148 0 3.574 3.574 0 0 1 7.148 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutoCapture
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NTIgMi41MDJBMi4xNTIgMi4xNTIgMCAwIDAgMi41IDQuNjU0djIuOTk4YS42NTIuNjUyIDAgMCAwIDEuMzA0IDBWNC42NTRjMC0uNDY4LjM4LS44NDguODQ4LS44NDhoMi45OWEuNjUyLjY1MiAwIDAgMCAwLTEuMzA0aC0yLjk5Wm03LjY5OCAwYS42NTIuNjUyIDAgMSAwIDAgMS4zMDRoMi45OThjLjQ2OCAwIC44NDguMzguODQ4Ljg0OHYyLjk5OGEuNjUyLjY1MiAwIDEgMCAxLjMwNCAwVjQuNjU0YTIuMTUyIDIuMTUyIDAgMCAwLTIuMTUyLTIuMTUySDEyLjM1Wm0tOC41NDYgOS44NTRhLjY1Mi42NTIgMCAxIDAtMS4zMDQgMHYyLjk5MWMwIDEuMTg5Ljk2NCAyLjE1MyAyLjE1MiAyLjE1M2gyLjk5YS42NTIuNjUyIDAgMCAwIDAtMS4zMDVoLTIuOTlhLjg0OC44NDggMCAwIDEtLjg0OC0uODQ4di0yLjk5Wm0xMy42OTYgMGEuNjUyLjY1MiAwIDAgMC0xLjMwNCAwdjIuOTkxYzAgLjQ2OS0uMzguODQ4LS44NDguODQ4SDEyLjM1YS42NTIuNjUyIDAgMCAwIDAgMS4zMDVoMi45OThhMi4xNTIgMi4xNTIgMCAwIDAgMi4xNTItMi4xNTN2LTIuOTlaTTEyLjI3IDEwYTIuMjcgMi4yNyAwIDEgMS00LjU0IDAgMi4yNyAyLjI3IDAgMCAxIDQuNTQgMFptMS4zMDQgMGEzLjU3NCAzLjU3NCAwIDEgMS03LjE0OCAwIDMuNTc0IDMuNTc0IDAgMCAxIDcuMTQ4IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutoCapture = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-auto-capture',
        'staticon-AutoCapture',
        className
      ),
      ...props,
    })
);
AutoCapture.displayName = 'AutoCapture'

export default AutoCapture;
