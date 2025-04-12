
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.442 2.56a.625.625 0 0 0-.884.884l2.823 2.823a.875.875 0 0 0 1.238 0l2.823-2.823a.625.625 0 0 0-.884-.884L8 5.118 5.442 2.56Zm5.116 10.88a.625.625 0 1 0 .884-.883L8.618 9.733a.875.875 0 0 0-1.237 0l-2.823 2.824a.625.625 0 0 0 .883.883L8 10.883l2.558 2.559Z","clip-rule":"evenodd"}]]

/**
 * @component @name Fold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS40NDIgMi41NmEuNjI1LjYyNSAwIDAgMC0uODg0Ljg4NGwyLjgyMyAyLjgyM2EuODc1Ljg3NSAwIDAgMCAxLjIzOCAwbDIuODIzLTIuODIzYS42MjUuNjI1IDAgMCAwLS44ODQtLjg4NEw4IDUuMTE4IDUuNDQyIDIuNTZabTUuMTE2IDEwLjg4YS42MjUuNjI1IDAgMSAwIC44ODQtLjg4M0w4LjYxOCA5LjczM2EuODc1Ljg3NSAwIDAgMC0xLjIzNyAwbC0yLjgyMyAyLjgyNGEuNjI1LjYyNSAwIDAgMCAuODgzLjg4M0w4IDEwLjg4M2wyLjU1OCAyLjU1OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Fold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-fold',
        'staticon-Fold',
        className
      ),
      ...props,
    })
);
Fold.displayName = 'Fold'

export default Fold;
