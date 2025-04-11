
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M13.585 3.78a2.249 2.249 0 0 0-3.18 0L8.528 5.658a.75.75 0 0 0 1.06 1.06l1.658-1.657v6.306H4.942l1.78-1.78a.75.75 0 0 0-1.06-1.061L3.78 10.407a2.25 2.25 0 0 0 0 3.18l1.876 1.877a.75.75 0 1 0 1.06-1.06l-1.538-1.538h6.068v6.066L9.585 17.27a.75.75 0 1 0-1.06 1.06l1.881 1.882a2.25 2.25 0 0 0 3.181 0l1.877-1.876a.75.75 0 0 0-1.06-1.06l-1.658 1.657v-6.069h6.067l-1.543 1.543a.75.75 0 0 0 1.06 1.06l1.882-1.882a2.25 2.25 0 0 0 0-3.18l-1.876-1.877a.75.75 0 1 0-1.06 1.06l1.776 1.777h-6.306V5.062l1.661 1.661a.75.75 0 0 0 1.06-1.06L13.585 3.78Z"}]]

/**
 * @component @name Drag2
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjU4NSAzLjc4YTIuMjQ5IDIuMjQ5IDAgMCAwLTMuMTggMEw4LjUyOCA1LjY1OGEuNzUuNzUgMCAwIDAgMS4wNiAxLjA2bDEuNjU4LTEuNjU3djYuMzA2SDQuOTQybDEuNzgtMS43OGEuNzUuNzUgMCAwIDAtMS4wNi0xLjA2MUwzLjc4IDEwLjQwN2EyLjI1IDIuMjUgMCAwIDAgMCAzLjE4bDEuODc2IDEuODc3YS43NS43NSAwIDEgMCAxLjA2LTEuMDZsLTEuNTM4LTEuNTM4aDYuMDY4djYuMDY2TDkuNTg1IDE3LjI3YS43NS43NSAwIDEgMC0xLjA2IDEuMDZsMS44ODEgMS44ODJhMi4yNSAyLjI1IDAgMCAwIDMuMTgxIDBsMS44NzctMS44NzZhLjc1Ljc1IDAgMCAwLTEuMDYtMS4wNmwtMS42NTggMS42NTd2LTYuMDY5aDYuMDY3bC0xLjU0MyAxLjU0M2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2bDEuODgyLTEuODgyYTIuMjUgMi4yNSAwIDAgMCAwLTMuMThsLTEuODc2LTEuODc3YS43NS43NSAwIDEgMC0xLjA2IDEuMDZsMS43NzYgMS43NzdoLTYuMzA2VjUuMDYybDEuNjYxIDEuNjYxYS43NS43NSAwIDAgMCAxLjA2LTEuMDZMMTMuNTg1IDMuNzhaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag2 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag2',
        'staticon-Drag2',
        className
      ),
      ...props,
    })
);
Drag2.displayName = 'Drag2'

export default Drag2;
