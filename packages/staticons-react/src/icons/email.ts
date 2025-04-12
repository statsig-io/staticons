
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.256 2.124H2.739c-1.03 0-1.865.835-1.864 1.865l.005 8.023c0 1.03.835 1.864 1.864 1.864h10.517c1.03 0 1.865-.836 1.864-1.866l-.005-8.023a1.864 1.864 0 0 0-1.864-1.863ZM2.739 3.367h10.517a.62.62 0 0 1 .621.62v.786L8.355 8.606a.621.621 0 0 1-.708 0L2.118 4.77v-.78c0-.344.278-.622.621-.622Zm-.62 2.917.004 5.728c0 .343.278.62.621.62h10.517a.621.621 0 0 0 .621-.621l-.003-5.726-4.816 3.342a1.864 1.864 0 0 1-2.126 0L2.12 6.284Z","clip-rule":"evenodd"}]]

/**
 * @component @name Email
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMjU2IDIuMTI0SDIuNzM5Yy0xLjAzIDAtMS44NjUuODM1LTEuODY0IDEuODY1bC4wMDUgOC4wMjNjMCAxLjAzLjgzNSAxLjg2NCAxLjg2NCAxLjg2NGgxMC41MTdjMS4wMyAwIDEuODY1LS44MzYgMS44NjQtMS44NjZsLS4wMDUtOC4wMjNhMS44NjQgMS44NjQgMCAwIDAtMS44NjQtMS44NjNaTTIuNzM5IDMuMzY3aDEwLjUxN2EuNjIuNjIgMCAwIDEgLjYyMS42MnYuNzg2TDguMzU1IDguNjA2YS42MjEuNjIxIDAgMCAxLS43MDggMEwyLjExOCA0Ljc3di0uNzhjMC0uMzQ0LjI3OC0uNjIyLjYyMS0uNjIyWm0tLjYyIDIuOTE3LjAwNCA1LjcyOGMwIC4zNDMuMjc4LjYyLjYyMS42MmgxMC41MTdhLjYyMS42MjEgMCAwIDAgLjYyMS0uNjIxbC0uMDAzLTUuNzI2LTQuODE2IDMuMzQyYTEuODY0IDEuODY0IDAgMCAxLTIuMTI2IDBMMi4xMiA2LjI4NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Email = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-email',
        'staticon-Email',
        className
      ),
      ...props,
    })
);
Email.displayName = 'Email'

export default Email;
