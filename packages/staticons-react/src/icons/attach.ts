
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M6.018 2.307C6.996.724 9.116.157 10.753 1.04c1.637.883 2.172 2.882 1.194 4.465l-3.878 6.277a2.143 2.143 0 0 1-2.806.75 1.86 1.86 0 0 1-.708-2.646l3.926-6.355a.67.67 0 0 1 .878-.235.582.582 0 0 1 .221.828L5.654 10.48a.696.696 0 0 0 .265.99.802.802 0 0 0 1.05-.28l3.879-6.278a1.974 1.974 0 0 0-.752-2.809 2.274 2.274 0 0 0-2.978.797l-3.83 6.2c-1.013 1.64-.46 3.712 1.237 4.627 1.697.915 3.894.328 4.907-1.312l3.878-6.277a.67.67 0 0 1 .878-.235.582.582 0 0 1 .221.828l-3.878 6.277c-1.375 2.227-4.358 3.025-6.662 1.782-2.304-1.243-3.056-4.056-1.68-6.284l3.83-6.2Z"}]]

/**
 * @component @name Attach
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMDE4IDIuMzA3QzYuOTk2LjcyNCA5LjExNi4xNTcgMTAuNzUzIDEuMDRjMS42MzcuODgzIDIuMTcyIDIuODgyIDEuMTk0IDQuNDY1bC0zLjg3OCA2LjI3N2EyLjE0MyAyLjE0MyAwIDAgMS0yLjgwNi43NSAxLjg2IDEuODYgMCAwIDEtLjcwOC0yLjY0NmwzLjkyNi02LjM1NWEuNjcuNjcgMCAwIDEgLjg3OC0uMjM1LjU4Mi41ODIgMCAwIDEgLjIyMS44MjhMNS42NTQgMTAuNDhhLjY5Ni42OTYgMCAwIDAgLjI2NS45OS44MDIuODAyIDAgMCAwIDEuMDUtLjI4bDMuODc5LTYuMjc4YTEuOTc0IDEuOTc0IDAgMCAwLS43NTItMi44MDkgMi4yNzQgMi4yNzQgMCAwIDAtMi45NzguNzk3bC0zLjgzIDYuMmMtMS4wMTMgMS42NC0uNDYgMy43MTIgMS4yMzcgNC42MjcgMS42OTcuOTE1IDMuODk0LjMyOCA0LjkwNy0xLjMxMmwzLjg3OC02LjI3N2EuNjcuNjcgMCAwIDEgLjg3OC0uMjM1LjU4Mi41ODIgMCAwIDEgLjIyMS44MjhsLTMuODc4IDYuMjc3Yy0xLjM3NSAyLjIyNy00LjM1OCAzLjAyNS02LjY2MiAxLjc4Mi0yLjMwNC0xLjI0My0zLjA1Ni00LjA1Ni0xLjY4LTYuMjg0bDMuODMtNi4yWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Attach = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-attach',
        'staticon-Attach',
        className
      ),
      ...props,
    })
);
Attach.displayName = 'Attach'

export default Attach;
