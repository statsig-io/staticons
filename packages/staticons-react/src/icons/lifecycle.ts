
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M17.768 6.098a7.164 7.164 0 0 0-10.154.293.75.75 0 0 1-1.093-1.028 8.664 8.664 0 0 1 12.22-.409l-.043-.797a.75.75 0 0 1 1.497-.082l.131 2.384a1 1 0 0 1-.944 1.053l-2.384.13a.75.75 0 0 1-.082-1.497l.852-.047Zm1.945 3.191a.75.75 0 0 1 1.44-.42 8.664 8.664 0 0 1-5.803 10.713l.753.382a.75.75 0 0 1-.677 1.338l-2.13-1.079a1 1 0 0 1-.44-1.343l1.078-2.13a.75.75 0 1 1 1.338.677l-.366.723a7.164 7.164 0 0 0 4.807-8.86Zm-13.861.392.422.646a.75.75 0 0 0 1.256-.82l-1.306-2a1 1 0 0 0-1.384-.29L2.841 8.523a.75.75 0 0 0 .82 1.256l.74-.484a8.664 8.664 0 0 0 6.379 10.416.75.75 0 1 0 .355-1.458A7.164 7.164 0 0 1 5.851 9.68Z","clip-rule":"evenodd"}]]

/**
 * @component @name Lifecycle
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzY4IDYuMDk4YTcuMTY0IDcuMTY0IDAgMCAwLTEwLjE1NC4yOTMuNzUuNzUgMCAwIDEtMS4wOTMtMS4wMjggOC42NjQgOC42NjQgMCAwIDEgMTIuMjItLjQwOWwtLjA0My0uNzk3YS43NS43NSAwIDAgMSAxLjQ5Ny0uMDgybC4xMzEgMi4zODRhMSAxIDAgMCAxLS45NDQgMS4wNTNsLTIuMzg0LjEzYS43NS43NSAwIDAgMS0uMDgyLTEuNDk3bC44NTItLjA0N1ptMS45NDUgMy4xOTFhLjc1Ljc1IDAgMCAxIDEuNDQtLjQyIDguNjY0IDguNjY0IDAgMCAxLTUuODAzIDEwLjcxM2wuNzUzLjM4MmEuNzUuNzUgMCAwIDEtLjY3NyAxLjMzOGwtMi4xMy0xLjA3OWExIDEgMCAwIDEtLjQ0LTEuMzQzbDEuMDc4LTIuMTNhLjc1Ljc1IDAgMSAxIDEuMzM4LjY3N2wtLjM2Ni43MjNhNy4xNjQgNy4xNjQgMCAwIDAgNC44MDctOC44NlptLTEzLjg2MS4zOTIuNDIyLjY0NmEuNzUuNzUgMCAwIDAgMS4yNTYtLjgybC0xLjMwNi0yYTEgMSAwIDAgMC0xLjM4NC0uMjlMMi44NDEgOC41MjNhLjc1Ljc1IDAgMCAwIC44MiAxLjI1NmwuNzQtLjQ4NGE4LjY2NCA4LjY2NCAwIDAgMCA2LjM3OSAxMC40MTYuNzUuNzUgMCAxIDAgLjM1NS0xLjQ1OEE3LjE2NCA3LjE2NCAwIDAgMSA1Ljg1MSA5LjY4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Lifecycle = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-lifecycle',
        'staticon-Lifecycle',
        className
      ),
      ...props,
    })
);
Lifecycle.displayName = 'Lifecycle'

export default Lifecycle;
