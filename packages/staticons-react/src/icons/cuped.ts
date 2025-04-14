
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 3.377c.563 0 .95.229 1.322.693.397.497.727 1.204 1.15 2.111l.018.038c.84 1.8 1.952 4.141 4.546 5.814a.625.625 0 1 0 .678-1.05c-2.266-1.462-3.253-3.498-4.091-5.293l-.058-.124c-.387-.83-.774-1.66-1.267-2.277-.55-.688-1.272-1.162-2.298-1.162-1.027 0-1.748.474-2.298 1.162-.493.617-.88 1.446-1.267 2.277l-.058.124c-.838 1.795-1.825 3.831-4.091 5.293a.625.625 0 0 0 .677 1.05C5.558 10.36 6.67 8.02 7.51 6.22l.018-.038c.424-.907.753-1.614 1.151-2.111.371-.464.76-.693 1.322-.693Zm-.973 12.366-1.945 1.945a.625.625 0 0 1-.884-.884l1.054-1.054H2.63a.625.625 0 1 1 0-1.25h4.624L6.2 13.446a.625.625 0 0 1 .884-.884l1.943 1.943a.875.875 0 0 1 0 1.238Zm1.94 0a.875.875 0 0 1 0-1.237l1.945-1.945a.625.625 0 0 1 .884.884L12.74 14.5h4.631a.625.625 0 1 1 0 1.25h-4.63l1.055 1.056a.625.625 0 1 1-.884.883l-1.946-1.945Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cuped
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMy4zNzdjLjU2MyAwIC45NS4yMjkgMS4zMjIuNjkzLjM5Ny40OTcuNzI3IDEuMjA0IDEuMTUgMi4xMTFsLjAxOC4wMzhjLjg0IDEuOCAxLjk1MiA0LjE0MSA0LjU0NiA1LjgxNGEuNjI1LjYyNSAwIDEgMCAuNjc4LTEuMDVjLTIuMjY2LTEuNDYyLTMuMjUzLTMuNDk4LTQuMDkxLTUuMjkzbC0uMDU4LS4xMjRjLS4zODctLjgzLS43NzQtMS42Ni0xLjI2Ny0yLjI3Ny0uNTUtLjY4OC0xLjI3Mi0xLjE2Mi0yLjI5OC0xLjE2Mi0xLjAyNyAwLTEuNzQ4LjQ3NC0yLjI5OCAxLjE2Mi0uNDkzLjYxNy0uODggMS40NDYtMS4yNjcgMi4yNzdsLS4wNTguMTI0Yy0uODM4IDEuNzk1LTEuODI1IDMuODMxLTQuMDkxIDUuMjkzYS42MjUuNjI1IDAgMCAwIC42NzcgMS4wNUM1LjU1OCAxMC4zNiA2LjY3IDguMDIgNy41MSA2LjIybC4wMTgtLjAzOGMuNDI0LS45MDcuNzUzLTEuNjE0IDEuMTUxLTIuMTExLjM3MS0uNDY0Ljc2LS42OTMgMS4zMjItLjY5M1ptLS45NzMgMTIuMzY2LTEuOTQ1IDEuOTQ1YS42MjUuNjI1IDAgMCAxLS44ODQtLjg4NGwxLjA1NC0xLjA1NEgyLjYzYS42MjUuNjI1IDAgMSAxIDAtMS4yNWg0LjYyNEw2LjIgMTMuNDQ2YS42MjUuNjI1IDAgMCAxIC44ODQtLjg4NGwxLjk0MyAxLjk0M2EuODc1Ljg3NSAwIDAgMSAwIDEuMjM4Wm0xLjk0IDBhLjg3NS44NzUgMCAwIDEgMC0xLjIzN2wxLjk0NS0xLjk0NWEuNjI1LjYyNSAwIDAgMSAuODg0Ljg4NEwxMi43NCAxNC41aDQuNjMxYS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtNC42M2wxLjA1NSAxLjA1NmEuNjI1LjYyNSAwIDEgMS0uODg0Ljg4M2wtMS45NDYtMS45NDVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cuped = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cuped',
        'staticon-Cuped',
        className
      ),
      ...props,
    })
);
Cuped.displayName = 'Cuped'

export default Cuped;
