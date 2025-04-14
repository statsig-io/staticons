
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M14.252 15.375V4.625a.625.625 0 1 1 1.25 0v10.75a.625.625 0 0 1-1.25 0Z"}],["path",{"fill-rule":"evenodd","d":"M6.769 4.358c-.892-.766-2.271-.132-2.271 1.043v9.222c0 1.176 1.38 1.809 2.271 1.043l5.368-4.61a1.375 1.375 0 0 0 0-2.087l-5.368-4.61ZM5.748 5.401c0-.107.125-.164.207-.095l5.367 4.611c.059.05.059.14 0 .19l-5.367 4.61a.125.125 0 0 1-.207-.094V5.401Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE0LjI1MiAxNS4zNzVWNC42MjVhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjEwLjc1YS42MjUuNjI1IDAgMCAxLTEuMjUgMFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljc2OSA0LjM1OGMtLjg5Mi0uNzY2LTIuMjcxLS4xMzItMi4yNzEgMS4wNDN2OS4yMjJjMCAxLjE3NiAxLjM4IDEuODA5IDIuMjcxIDEuMDQzbDUuMzY4LTQuNjFhMS4zNzUgMS4zNzUgMCAwIDAgMC0yLjA4N2wtNS4zNjgtNC42MVpNNS43NDggNS40MDFjMC0uMTA3LjEyNS0uMTY0LjIwNy0uMDk1bDUuMzY3IDQuNjExYy4wNTkuMDUuMDU5LjE0IDAgLjE5bC01LjM2NyA0LjYxYS4xMjUuMTI1IDAgMCAxLS4yMDctLjA5NFY1LjQwMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-right',
        'staticon-SkipRight',
        className
      ),
      ...props,
    })
);
SkipRight.displayName = 'SkipRight'

export default SkipRight;
