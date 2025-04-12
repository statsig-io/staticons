
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.033 2.114a2.031 2.031 0 0 1 1.914 0l5.954 3.18c.268.143.443.37.525.624a.622.622 0 0 1 .072.292v4.366a.625.625 0 0 1-1.25 0V7.572l-1.354.723v3.268c0 .52-.23 1.08-.746 1.397a8.134 8.134 0 0 1-4.159 1.165 8.13 8.13 0 0 1-4.157-1.165c-.516-.318-.746-.876-.746-1.398V8.296L1.08 7.223a1.094 1.094 0 0 1 0-1.929l5.953-3.18ZM4.336 8.963v2.6c0 .175.075.286.152.333a6.88 6.88 0 0 0 3.501.98 6.882 6.882 0 0 0 3.503-.98c.077-.048.152-.158.152-.334V8.963l-2.697 1.44c-.598.32-1.316.32-1.914 0l-2.697-1.44Zm4.022-5.747a.781.781 0 0 0-.736 0L1.927 6.26 7.622 9.3a.78.78 0 0 0 .736 0l5.696-3.042-5.696-3.043Z","clip-rule":"evenodd"}]]

/**
 * @component @name School
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4wMzMgMi4xMTRhMi4wMzEgMi4wMzEgMCAwIDEgMS45MTQgMGw1Ljk1NCAzLjE4Yy4yNjguMTQzLjQ0My4zNy41MjUuNjI0YS42MjIuNjIyIDAgMCAxIC4wNzIuMjkydjQuMzY2YS42MjUuNjI1IDAgMCAxLTEuMjUgMFY3LjU3MmwtMS4zNTQuNzIzdjMuMjY4YzAgLjUyLS4yMyAxLjA4LS43NDYgMS4zOTdhOC4xMzQgOC4xMzQgMCAwIDEtNC4xNTkgMS4xNjUgOC4xMyA4LjEzIDAgMCAxLTQuMTU3LTEuMTY1Yy0uNTE2LS4zMTgtLjc0Ni0uODc2LS43NDYtMS4zOThWOC4yOTZMMS4wOCA3LjIyM2ExLjA5NCAxLjA5NCAwIDAgMSAwLTEuOTI5bDUuOTUzLTMuMThaTTQuMzM2IDguOTYzdjIuNmMwIC4xNzUuMDc1LjI4Ni4xNTIuMzMzYTYuODggNi44OCAwIDAgMCAzLjUwMS45OCA2Ljg4MiA2Ljg4MiAwIDAgMCAzLjUwMy0uOThjLjA3Ny0uMDQ4LjE1Mi0uMTU4LjE1Mi0uMzM0VjguOTYzbC0yLjY5NyAxLjQ0Yy0uNTk4LjMyLTEuMzE2LjMyLTEuOTE0IDBsLTIuNjk3LTEuNDRabTQuMDIyLTUuNzQ3YS43ODEuNzgxIDAgMCAwLS43MzYgMEwxLjkyNyA2LjI2IDcuNjIyIDkuM2EuNzguNzggMCAwIDAgLjczNiAwbDUuNjk2LTMuMDQyLTUuNjk2LTMuMDQzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const School = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-school',
        'staticon-School',
        className
      ),
      ...props,
    })
);
School.displayName = 'School'

export default School;
