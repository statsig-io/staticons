
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.127.748c.346 0 .625.28.625.625v8.87c0 .345.28.625.625.625h5.01A3.605 3.605 0 0 1 8.88 7.825a.804.804 0 0 1-.033-.035l-2.63-2.904L3.98 8.893a.625.625 0 1 1-1.091-.61L5.45 3.699a.775.775 0 0 1 1.25-.142L9.33 6.46l2.239-4.007a.625.625 0 0 1 1.09.61l-2.31 4.134a3.61 3.61 0 0 1 3.603 5.625l1.363 1.363a.625.625 0 1 1-.884.883l-1.363-1.362a3.611 3.611 0 0 1-5.415-1.59H2.378a1.875 1.875 0 0 1-1.875-1.874v-8.87c0-.345.28-.625.625-.625Zm9.869 7.642a2.36 2.36 0 1 0 0 4.72 2.36 2.36 0 0 0 0-4.72Z","clip-rule":"evenodd"}]]

/**
 * @component @name MetricsExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjcuNzQ4Yy4zNDYgMCAuNjI1LjI4LjYyNS42MjV2OC44N2MwIC4zNDUuMjguNjI1LjYyNS42MjVoNS4wMUEzLjYwNSAzLjYwNSAwIDAgMSA4Ljg4IDcuODI1YS44MDQuODA0IDAgMCAxLS4wMzMtLjAzNWwtMi42My0yLjkwNEwzLjk4IDguODkzYS42MjUuNjI1IDAgMSAxLTEuMDkxLS42MUw1LjQ1IDMuNjk5YS43NzUuNzc1IDAgMCAxIDEuMjUtLjE0Mkw5LjMzIDYuNDZsMi4yMzktNC4wMDdhLjYyNS42MjUgMCAwIDEgMS4wOS42MWwtMi4zMSA0LjEzNGEzLjYxIDMuNjEgMCAwIDEgMy42MDMgNS42MjVsMS4zNjMgMS4zNjNhLjYyNS42MjUgMCAxIDEtLjg4NC44ODNsLTEuMzYzLTEuMzYyYTMuNjExIDMuNjExIDAgMCAxLTUuNDE1LTEuNTlIMi4zNzhhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzR2LTguODdjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVabTkuODY5IDcuNjQyYTIuMzYgMi4zNiAwIDEgMCAwIDQuNzIgMi4zNiAyLjM2IDAgMCAwIDAtNC43MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const MetricsExplorer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-metrics-explorer',
        'staticon-MetricsExplorer',
        className
      ),
      ...props,
    })
);
MetricsExplorer.displayName = 'MetricsExplorer'

export default MetricsExplorer;
