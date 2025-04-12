
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.206 12.726a.775.775 0 0 1-.774.775H3.025a.775.775 0 0 1-.775-.775V3.274c0-.428.347-.775.775-.775h2.407c.428 0 .774.347.774.775v.596a4.503 4.503 0 0 0 0 8.26v.596Zm1.25-.257v.257a2.025 2.025 0 0 1-2.024 2.025H3.025A2.025 2.025 0 0 1 1 12.726V3.274c0-1.119.907-2.025 2.025-2.025h2.407c1.118 0 2.024.906 2.024 2.025v.257a4.547 4.547 0 0 1 1.088 0v-.257c0-1.119.906-2.025 2.024-2.025h2.407c1.118 0 2.025.906 2.025 2.025v9.452a2.025 2.025 0 0 1-2.025 2.025H10.57a2.025 2.025 0 0 1-2.025-2.025v-.257a4.56 4.56 0 0 1-1.088 0Zm2.338-.338v.595c0 .428.347.775.774.775h2.407a.775.775 0 0 0 .775-.775V3.274a.775.775 0 0 0-.775-.775H10.57a.775.775 0 0 0-.775.775v.596a4.503 4.503 0 0 1 0 8.26ZM4.748 8a3.252 3.252 0 1 1 6.504 0 3.252 3.252 0 0 1-6.504 0Zm3.876-1.853a.625.625 0 1 0-1.25 0v1.227H6.148a.625.625 0 0 0 0 1.25h1.226v1.228a.625.625 0 0 0 1.25 0V8.624h1.228a.625.625 0 0 0 0-1.25H8.624V6.147Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineColumns
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4yMDYgMTIuNzI2YS43NzUuNzc1IDAgMCAxLS43NzQuNzc1SDMuMDI1YS43NzUuNzc1IDAgMCAxLS43NzUtLjc3NVYzLjI3NGMwLS40MjguMzQ3LS43NzUuNzc1LS43NzVoMi40MDdjLjQyOCAwIC43NzQuMzQ3Ljc3NC43NzV2LjU5NmE0LjUwMyA0LjUwMyAwIDAgMCAwIDguMjZ2LjU5NlptMS4yNS0uMjU3di4yNTdhMi4wMjUgMi4wMjUgMCAwIDEtMi4wMjQgMi4wMjVIMy4wMjVBMi4wMjUgMi4wMjUgMCAwIDEgMSAxMi43MjZWMy4yNzRjMC0xLjExOS45MDctMi4wMjUgMi4wMjUtMi4wMjVoMi40MDdjMS4xMTggMCAyLjAyNC45MDYgMi4wMjQgMi4wMjV2LjI1N2E0LjU0NyA0LjU0NyAwIDAgMSAxLjA4OCAwdi0uMjU3YzAtMS4xMTkuOTA2LTIuMDI1IDIuMDI0LTIuMDI1aDIuNDA3YzEuMTE4IDAgMi4wMjUuOTA2IDIuMDI1IDIuMDI1djkuNDUyYTIuMDI1IDIuMDI1IDAgMCAxLTIuMDI1IDIuMDI1SDEwLjU3YTIuMDI1IDIuMDI1IDAgMCAxLTIuMDI1LTIuMDI1di0uMjU3YTQuNTYgNC41NiAwIDAgMS0xLjA4OCAwWm0yLjMzOC0uMzM4di41OTVjMCAuNDI4LjM0Ny43NzUuNzc0Ljc3NWgyLjQwN2EuNzc1Ljc3NSAwIDAgMCAuNzc1LS43NzVWMy4yNzRhLjc3NS43NzUgMCAwIDAtLjc3NS0uNzc1SDEwLjU3YS43NzUuNzc1IDAgMCAwLS43NzUuNzc1di41OTZhNC41MDMgNC41MDMgMCAwIDEgMCA4LjI2Wk00Ljc0OCA4YTMuMjUyIDMuMjUyIDAgMSAxIDYuNTA0IDAgMy4yNTIgMy4yNTIgMCAwIDEtNi41MDQgMFptMy44NzYtMS44NTNhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjEuMjI3SDYuMTQ4YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgxLjIyNnYxLjIyOGEuNjI1LjYyNSAwIDAgMCAxLjI1IDBWOC42MjRoMS4yMjhhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDguNjI0VjYuMTQ3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineColumns = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-columns',
        'staticon-CombineColumns',
        className
      ),
      ...props,
    })
);
CombineColumns.displayName = 'CombineColumns'

export default CombineColumns;
