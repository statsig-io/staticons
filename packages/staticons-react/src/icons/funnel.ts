
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.008 5.504a.501.501 0 0 0-.405.795l4.554 6.324c.223.31.343.683.343 1.066v5.556a.25.25 0 0 0 .352.228l2.495-1.115a.25.25 0 0 0 .149-.229v-4.444c0-.383.12-.757.345-1.067l4.564-6.319A.501.501 0 0 0 18 5.504H6.008ZM4.387 7.18C3.432 5.853 4.377 4 6.008 4H18c1.633 0 2.578 1.855 1.62 3.18l-4.565 6.32a.317.317 0 0 0-.06.185v4.444c0 .693-.406 1.32-1.037 1.603l-2.495 1.115A1.75 1.75 0 0 1 9 19.245v-5.556a.317.317 0 0 0-.06-.185L4.388 7.179Z","clip-rule":"evenodd"}]]

/**
 * @component @name Funnel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wMDggNS41MDRhLjUwMS41MDEgMCAwIDAtLjQwNS43OTVsNC41NTQgNi4zMjRjLjIyMy4zMS4zNDMuNjgzLjM0MyAxLjA2NnY1LjU1NmEuMjUuMjUgMCAwIDAgLjM1Mi4yMjhsMi40OTUtMS4xMTVhLjI1LjI1IDAgMCAwIC4xNDktLjIyOXYtNC40NDRjMC0uMzgzLjEyLS43NTcuMzQ1LTEuMDY3bDQuNTY0LTYuMzE5QS41MDEuNTAxIDAgMCAwIDE4IDUuNTA0SDYuMDA4Wk00LjM4NyA3LjE4QzMuNDMyIDUuODUzIDQuMzc3IDQgNi4wMDggNEgxOGMxLjYzMyAwIDIuNTc4IDEuODU1IDEuNjIgMy4xOGwtNC41NjUgNi4zMmEuMzE3LjMxNyAwIDAgMC0uMDYuMTg1djQuNDQ0YzAgLjY5My0uNDA2IDEuMzItMS4wMzcgMS42MDNsLTIuNDk1IDEuMTE1QTEuNzUgMS43NSAwIDAgMSA5IDE5LjI0NXYtNS41NTZhLjMxNy4zMTcgMCAwIDAtLjA2LS4xODVMNC4zODggNy4xNzlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Funnel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-funnel',
        'staticon-Funnel',
        className
      ),
      ...props,
    })
);
Funnel.displayName = 'Funnel'

export default Funnel;
