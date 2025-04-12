
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.12 3.614a3.118 3.118 0 0 0-6.238 0c0 1.512 1.08 2.77 2.508 3.054v1.516H3.869a1.876 1.876 0 0 0-1.874 1.876v1.314a2.11 2.11 0 0 0 .613 4.127 2.109 2.109 0 0 0 .637-4.12V10.06c0-.345.28-.625.624-.625l3.52-.001v1.939A2.11 2.11 0 0 0 8 15.5a2.109 2.109 0 0 0 .64-4.12V9.434h3.519c.345 0 .625.28.625.625v1.315a2.11 2.11 0 0 0 .609 4.128 2.109 2.109 0 0 0 .64-4.119v-1.324a1.875 1.875 0 0 0-1.874-1.875H8.64v-1.52a3.118 3.118 0 0 0 2.48-3.05ZM8 1.749c1.032 0 1.87.836 1.87 1.865a1.868 1.868 0 0 1-3.738 0c0-1.029.837-1.865 1.869-1.865Zm0 10.784a.859.859 0 1 1-.001 1.718.859.859 0 0 1 0-1.718Zm-4.534.86a.859.859 0 1 0-1.718-.001.859.859 0 0 0 1.718 0Zm9.926-.86a.859.859 0 1 1-.001 1.718.859.859 0 0 1 .001-1.718Z","clip-rule":"evenodd"}]]

/**
 * @component @name Hierarchy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTIgMy42MTRhMy4xMTggMy4xMTggMCAwIDAtNi4yMzggMGMwIDEuNTEyIDEuMDggMi43NyAyLjUwOCAzLjA1NHYxLjUxNkgzLjg2OWExLjg3NiAxLjg3NiAwIDAgMC0xLjg3NCAxLjg3NnYxLjMxNGEyLjExIDIuMTEgMCAwIDAgLjYxMyA0LjEyNyAyLjEwOSAyLjEwOSAwIDAgMCAuNjM3LTQuMTJWMTAuMDZjMC0uMzQ1LjI4LS42MjUuNjI0LS42MjVsMy41Mi0uMDAxdjEuOTM5QTIuMTEgMi4xMSAwIDAgMCA4IDE1LjVhMi4xMDkgMi4xMDkgMCAwIDAgLjY0LTQuMTJWOS40MzRoMy41MTljLjM0NSAwIC42MjUuMjguNjI1LjYyNXYxLjMxNWEyLjExIDIuMTEgMCAwIDAgLjYwOSA0LjEyOCAyLjEwOSAyLjEwOSAwIDAgMCAuNjQtNC4xMTl2LTEuMzI0YTEuODc1IDEuODc1IDAgMCAwLTEuODc0LTEuODc1SDguNjR2LTEuNTJhMy4xMTggMy4xMTggMCAwIDAgMi40OC0zLjA1Wk04IDEuNzQ5YzEuMDMyIDAgMS44Ny44MzYgMS44NyAxLjg2NWExLjg2OCAxLjg2OCAwIDAgMS0zLjczOCAwYzAtMS4wMjkuODM3LTEuODY1IDEuODY5LTEuODY1Wm0wIDEwLjc4NGEuODU5Ljg1OSAwIDEgMS0uMDAxIDEuNzE4Ljg1OS44NTkgMCAwIDEgMC0xLjcxOFptLTQuNTM0Ljg2YS44NTkuODU5IDAgMSAwLTEuNzE4LS4wMDEuODU5Ljg1OSAwIDAgMCAxLjcxOCAwWm05LjkyNi0uODZhLjg1OS44NTkgMCAxIDEtLjAwMSAxLjcxOC44NTkuODU5IDAgMCAxIC4wMDEtMS43MThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Hierarchy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-hierarchy',
        'staticon-Hierarchy',
        className
      ),
      ...props,
    })
);
Hierarchy.displayName = 'Hierarchy'

export default Hierarchy;
