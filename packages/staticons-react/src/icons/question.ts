
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M9.99 6.366c-1.074 0-1.796.75-1.879 1.528a.625.625 0 1 1-1.243-.133C7.022 6.316 8.31 5.116 9.99 5.116c.802 0 1.56.228 2.137.693.587.472.95 1.163.981 1.996.051 1.396-.845 2.098-1.526 2.617-.624.475-.97.989-.97 1.52a.625.625 0 1 1-1.25 0c0-1.11.718-1.948 1.463-2.515.689-.524 1.06-.874 1.034-1.577-.017-.471-.212-.823-.516-1.068-.313-.252-.779-.416-1.353-.416Zm.01 7.046a.725.725 0 1 1 0 1.45.725.725 0 0 1 0-1.45Z"}],["path",{"fill-rule":"evenodd","d":"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.25 0a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Question
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTkuOTkgNi4zNjZjLTEuMDc0IDAtMS43OTYuNzUtMS44NzkgMS41MjhhLjYyNS42MjUgMCAxIDEtMS4yNDMtLjEzM0M3LjAyMiA2LjMxNiA4LjMxIDUuMTE2IDkuOTkgNS4xMTZjLjgwMiAwIDEuNTYuMjI4IDIuMTM3LjY5My41ODcuNDcyLjk1IDEuMTYzLjk4MSAxLjk5Ni4wNTEgMS4zOTYtLjg0NSAyLjA5OC0xLjUyNiAyLjYxNy0uNjI0LjQ3NS0uOTcuOTg5LS45NyAxLjUyYS42MjUuNjI1IDAgMSAxLTEuMjUgMGMwLTEuMTEuNzE4LTEuOTQ4IDEuNDYzLTIuNTE1LjY4OS0uNTI0IDEuMDYtLjg3NCAxLjAzNC0xLjU3Ny0uMDE3LS40NzEtLjIxMi0uODIzLS41MTYtMS4wNjgtLjMxMy0uMjUyLS43NzktLjQxNi0xLjM1My0uNDE2Wm0uMDEgNy4wNDZhLjcyNS43MjUgMCAxIDEgMCAxLjQ1LjcyNS43MjUgMCAwIDEgMC0xLjQ1WiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDEwYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwWm0tMS4yNSAwYTYuNzUgNi43NSAwIDEgMS0xMy41IDAgNi43NSA2Ljc1IDAgMCAxIDEzLjUgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Question = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-question',
        'staticon-Question',
        className
      ),
      ...props,
    })
);
Question.displayName = 'Question'

export default Question;
