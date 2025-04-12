
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.57 12.85a1.626 1.626 0 0 0 2.3 0l.658-.659a4.577 4.577 0 0 0 8.973-1.266 4.577 4.577 0 0 0-3.304-4.396l.664-.664a1.624 1.624 0 0 0 0-2.297L10.264.975a1.626 1.626 0 0 0-2.3 0L.976 7.96a1.624 1.624 0 0 0 0 2.297l2.596 2.593Zm7.026-6.488 1.38-1.38a.375.375 0 0 0 0-.53L9.381 1.858a.375.375 0 0 0-.531 0l-.641.64.893.893a.624.624 0 1 1-.885.884l-.892-.892-.711.71.892.892a.624.624 0 1 1-.884.883l-.893-.891-.709.708.892.892a.624.624 0 1 1-.884.883l-.892-.891-.711.71.893.893a.624.624 0 1 1-.884.884l-.893-.893-.681.68a.375.375 0 0 0 0 .53l2.595 2.594a.375.375 0 0 0 .53 0l1.378-1.378a4.576 4.576 0 0 1 4.233-4.227Zm.33 7.89a3.326 3.326 0 1 1 0-6.653 3.326 3.326 0 0 1 0 6.652Zm.555-4.996a.624.624 0 0 0-1.249 0v1.631a.624.624 0 0 0 .312.564l1.428.825a.624.624 0 1 0 .625-1.082l-1.116-.644V9.256Z","clip-rule":"evenodd"}]]

/**
 * @component @name LocalMetric
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41NyAxMi44NWExLjYyNiAxLjYyNiAwIDAgMCAyLjMgMGwuNjU4LS42NTlhNC41NzcgNC41NzcgMCAwIDAgOC45NzMtMS4yNjYgNC41NzcgNC41NzcgMCAwIDAtMy4zMDQtNC4zOTZsLjY2NC0uNjY0YTEuNjI0IDEuNjI0IDAgMCAwIDAtMi4yOTdMMTAuMjY0Ljk3NWExLjYyNiAxLjYyNiAwIDAgMC0yLjMgMEwuOTc2IDcuOTZhMS42MjQgMS42MjQgMCAwIDAgMCAyLjI5N2wyLjU5NiAyLjU5M1ptNy4wMjYtNi40ODggMS4zOC0xLjM4YS4zNzUuMzc1IDAgMCAwIDAtLjUzTDkuMzgxIDEuODU4YS4zNzUuMzc1IDAgMCAwLS41MzEgMGwtLjY0MS42NC44OTMuODkzYS42MjQuNjI0IDAgMSAxLS44ODUuODg0bC0uODkyLS44OTItLjcxMS43MS44OTIuODkyYS42MjQuNjI0IDAgMSAxLS44ODQuODgzbC0uODkzLS44OTEtLjcwOS43MDguODkyLjg5MmEuNjI0LjYyNCAwIDEgMS0uODg0Ljg4M2wtLjg5Mi0uODkxLS43MTEuNzEuODkzLjg5M2EuNjI0LjYyNCAwIDEgMS0uODg0Ljg4NGwtLjg5My0uODkzLS42ODEuNjhhLjM3NS4zNzUgMCAwIDAgMCAuNTNsMi41OTUgMi41OTRhLjM3NS4zNzUgMCAwIDAgLjUzIDBsMS4zNzgtMS4zNzhhNC41NzYgNC41NzYgMCAwIDEgNC4yMzMtNC4yMjdabS4zMyA3Ljg5YTMuMzI2IDMuMzI2IDAgMSAxIDAtNi42NTMgMy4zMjYgMy4zMjYgMCAwIDEgMCA2LjY1MlptLjU1NS00Ljk5NmEuNjI0LjYyNCAwIDAgMC0xLjI0OSAwdjEuNjMxYS42MjQuNjI0IDAgMCAwIC4zMTIuNTY0bDEuNDI4LjgyNWEuNjI0LjYyNCAwIDEgMCAuNjI1LTEuMDgybC0xLjExNi0uNjQ0VjkuMjU2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LocalMetric = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-local-metric',
        'staticon-LocalMetric',
        className
      ),
      ...props,
    })
);
LocalMetric.displayName = 'LocalMetric'

export default LocalMetric;
