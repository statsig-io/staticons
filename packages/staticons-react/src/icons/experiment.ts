
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.366 4.25a.75.75 0 1 0 0 1.502h.896v2.052a.75.75 0 0 1-.082.34l-3.874 7.602c-.934 1.832.397 4.003 2.452 4.003h10.483c2.056 0 3.386-2.17 2.453-4.002L15.82 8.145a.75.75 0 0 1-.082-.341V5.752h.839a.75.75 0 0 0 0-1.502H7.366Zm2.398 3.554V5.752h4.472v2.052c0 .355.084.706.246 1.022l1.387 2.723a.76.76 0 0 0-.082.087 1.485 1.485 0 0 1-.152.143c-.125.101-.32.233-.59.334-.516.194-1.396.312-2.714-.288a5.884 5.884 0 0 0-4.195-.287l1.382-2.711c.162-.317.246-.668.246-1.023Zm-2.76 5.955-1.36 2.67a1.25 1.25 0 0 0 1.114 1.819h10.483c.934 0 1.539-.987 1.115-1.82l-1.776-3.483a3.61 3.61 0 0 1-1.007.573c-.916.345-2.21.426-3.864-.326a4.396 4.396 0 0 0-3.266-.177 5.118 5.118 0 0 0-1.273.627c-.03.02-.05.035-.062.044l-.011.01a.769.769 0 0 1-.093.063Z","clip-rule":"evenodd"}]]

/**
 * @component @name Experiment
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4zNjYgNC4yNWEuNzUuNzUgMCAxIDAgMCAxLjUwMmguODk2djIuMDUyYS43NS43NSAwIDAgMS0uMDgyLjM0bC0zLjg3NCA3LjYwMmMtLjkzNCAxLjgzMi4zOTcgNC4wMDMgMi40NTIgNC4wMDNoMTAuNDgzYzIuMDU2IDAgMy4zODYtMi4xNyAyLjQ1My00LjAwMkwxNS44MiA4LjE0NWEuNzUuNzUgMCAwIDEtLjA4Mi0uMzQxVjUuNzUyaC44MzlhLjc1Ljc1IDAgMCAwIDAtMS41MDJINy4zNjZabTIuMzk4IDMuNTU0VjUuNzUyaDQuNDcydjIuMDUyYzAgLjM1NS4wODQuNzA2LjI0NiAxLjAyMmwxLjM4NyAyLjcyM2EuNzYuNzYgMCAwIDAtLjA4Mi4wODcgMS40ODUgMS40ODUgMCAwIDEtLjE1Mi4xNDNjLS4xMjUuMTAxLS4zMi4yMzMtLjU5LjMzNC0uNTE2LjE5NC0xLjM5Ni4zMTItMi43MTQtLjI4OGE1Ljg4NCA1Ljg4NCAwIDAgMC00LjE5NS0uMjg3bDEuMzgyLTIuNzExYy4xNjItLjMxNy4yNDYtLjY2OC4yNDYtMS4wMjNabS0yLjc2IDUuOTU1LTEuMzYgMi42N2ExLjI1IDEuMjUgMCAwIDAgMS4xMTQgMS44MTloMTAuNDgzYy45MzQgMCAxLjUzOS0uOTg3IDEuMTE1LTEuODJsLTEuNzc2LTMuNDgzYTMuNjEgMy42MSAwIDAgMS0xLjAwNy41NzNjLS45MTYuMzQ1LTIuMjEuNDI2LTMuODY0LS4zMjZhNC4zOTYgNC4zOTYgMCAwIDAtMy4yNjYtLjE3NyA1LjExOCA1LjExOCAwIDAgMC0xLjI3My42MjdjLS4wMy4wMi0uMDUuMDM1LS4wNjIuMDQ0bC0uMDExLjAxYS43NjkuNzY5IDAgMCAxLS4wOTMuMDYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Experiment = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-experiment',
        'staticon-Experiment',
        className
      ),
      ...props,
    })
);
Experiment.displayName = 'Experiment'

export default Experiment;
