
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.375 20.376a2.75 2.75 0 0 1-2.75-2.75V6.374a2.75 2.75 0 0 1 2.75-2.75h7.93c.73 0 1.428.289 1.944.804l3.32 3.317a2.75 2.75 0 0 1 .806 1.945v7.936a2.75 2.75 0 0 1-2.75 2.75H6.375Zm-1.25-2.75c0 .69.56 1.25 1.25 1.25h.523V13.45c0-.967.783-1.75 1.75-1.75h6.715c.966 0 1.75.783 1.75 1.75v5.426h.512c.69 0 1.25-.56 1.25-1.25V9.69c0-.332-.132-.65-.366-.884l-3.32-3.317a1.25 1.25 0 0 0-.744-.358v2.245a1.75 1.75 0 0 1-1.75 1.75H8.648a1.75 1.75 0 0 1-1.75-1.75V5.124h-.523c-.69 0-1.25.56-1.25 1.25v11.252Zm10.488 1.25V13.45a.25.25 0 0 0-.25-.25H8.648a.25.25 0 0 0-.25.25v5.426h7.215ZM8.398 5.124h4.547v2.252a.25.25 0 0 1-.25.25H8.648a.25.25 0 0 1-.25-.25V5.124Z","clip-rule":"evenodd"}]]

/**
 * @component @name Save
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4zNzUgMjAuMzc2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi4zNzRhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWg3LjkzYy43MyAwIDEuNDI4LjI4OSAxLjk0NC44MDRsMy4zMiAzLjMxN2EyLjc1IDIuNzUgMCAwIDEgLjgwNiAxLjk0NXY3LjkzNmEyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMzc1Wm0tMS4yNS0yLjc1YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aC41MjNWMTMuNDVjMC0uOTY3Ljc4My0xLjc1IDEuNzUtMS43NWg2LjcxNWMuOTY2IDAgMS43NS43ODMgMS43NSAxLjc1djUuNDI2aC41MTJjLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1VjkuNjljMC0uMzMyLS4xMzItLjY1LS4zNjYtLjg4NGwtMy4zMi0zLjMxN2ExLjI1IDEuMjUgMCAwIDAtLjc0NC0uMzU4djIuMjQ1YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVIOC42NDhhMS43NSAxLjc1IDAgMCAxLTEuNzUtMS43NVY1LjEyNGgtLjUyM2MtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2MTEuMjUyWm0xMC40ODggMS4yNVYxMy40NWEuMjUuMjUgMCAwIDAtLjI1LS4yNUg4LjY0OGEuMjUuMjUgMCAwIDAtLjI1LjI1djUuNDI2aDcuMjE1Wk04LjM5OCA1LjEyNGg0LjU0N3YyLjI1MmEuMjUuMjUgMCAwIDEtLjI1LjI1SDguNjQ4YS4yNS4yNSAwIDAgMS0uMjUtLjI1VjUuMTI0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Save = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-save',
        'staticon-Save',
        className
      ),
      ...props,
    })
);
Save.displayName = 'Save'

export default Save;
