
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.665 1.998a.625.625 0 0 0 0-1.25H1.127a.625.625 0 0 0 0 1.25h.65v12.003h-.65a.625.625 0 0 0 0 1.25h2.538a.625.625 0 1 0 0-1.25h-.638V1.998h.638Zm5.979 8.068.62 1.549.62-1.55a2.5 2.5 0 0 1 1.392-1.392l1.549-.62-1.55-.62a2.5 2.5 0 0 1-1.392-1.392l-.62-1.549-.62 1.55a2.5 2.5 0 0 1-1.392 1.392l-1.549.62 1.55.619a2.5 2.5 0 0 1 1.392 1.393Zm2.4.464-.852 2.13c-.335.837-1.522.837-1.857 0l-.852-2.13a1.25 1.25 0 0 0-.696-.696l-2.13-.852c-.838-.335-.838-1.522 0-1.857l2.13-.852a1.25 1.25 0 0 0 .696-.696l.852-2.13c.335-.838 1.522-.838 1.857 0l.852 2.13c.127.317.378.57.696.696l2.13.852c.838.335.838 1.522 0 1.857l-2.13.852a1.25 1.25 0 0 0-.696.696Z","clip-rule":"evenodd"}]]

/**
 * @component @name PromptGenerator
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy42NjUgMS45OThhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDEuMTI3YS42MjUuNjI1IDAgMCAwIDAgMS4yNWguNjV2MTIuMDAzaC0uNjVhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDIuNTM4YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtLjYzOFYxLjk5OGguNjM4Wm01Ljk3OSA4LjA2OC42MiAxLjU0OS42Mi0xLjU1YTIuNSAyLjUgMCAwIDEgMS4zOTItMS4zOTJsMS41NDktLjYyLTEuNTUtLjYyYTIuNSAyLjUgMCAwIDEtMS4zOTItMS4zOTJsLS42Mi0xLjU0OS0uNjIgMS41NWEyLjUgMi41IDAgMCAxLTEuMzkyIDEuMzkybC0xLjU0OS42MiAxLjU1LjYxOWEyLjUgMi41IDAgMCAxIDEuMzkyIDEuMzkzWm0yLjQuNDY0LS44NTIgMi4xM2MtLjMzNS44MzctMS41MjIuODM3LTEuODU3IDBsLS44NTItMi4xM2ExLjI1IDEuMjUgMCAwIDAtLjY5Ni0uNjk2bC0yLjEzLS44NTJjLS44MzgtLjMzNS0uODM4LTEuNTIyIDAtMS44NTdsMi4xMy0uODUyYTEuMjUgMS4yNSAwIDAgMCAuNjk2LS42OTZsLjg1Mi0yLjEzYy4zMzUtLjgzOCAxLjUyMi0uODM4IDEuODU3IDBsLjg1MiAyLjEzYy4xMjcuMzE3LjM3OC41Ny42OTYuNjk2bDIuMTMuODUyYy44MzguMzM1LjgzOCAxLjUyMiAwIDEuODU3bC0yLjEzLjg1MmExLjI1IDEuMjUgMCAwIDAtLjY5Ni42OTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PromptGenerator = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-prompt-generator',
        'staticon-PromptGenerator',
        className
      ),
      ...props,
    })
);
PromptGenerator.displayName = 'PromptGenerator'

export default PromptGenerator;
