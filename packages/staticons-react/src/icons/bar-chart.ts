
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.508 5.499c0-.966.784-1.75 1.75-1.75h3.484c.967 0 1.75.784 1.75 1.75v2.607h3.758c.966 0 1.75.784 1.75 1.75v8.645a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 18.501v-5.08c0-.967.784-1.75 1.75-1.75h3.758V5.499Zm5.484 2.607v10.645h-3.984V5.499a.25.25 0 0 1 .25-.25h3.484a.25.25 0 0 1 .25.25v2.607Zm1.5 10.645h3.758a.25.25 0 0 0 .25-.25V9.856a.25.25 0 0 0-.25-.25h-3.758v9.145ZM4.75 13.171a.25.25 0 0 0-.25.25v5.08c0 .138.112.25.25.25h3.758v-5.58H4.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name BarChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41MDggNS40OTljMC0uOTY2Ljc4NC0xLjc1IDEuNzUtMS43NWgzLjQ4NGMuOTY3IDAgMS43NS43ODQgMS43NSAxLjc1djIuNjA3aDMuNzU4Yy45NjYgMCAxLjc1Ljc4NCAxLjc1IDEuNzV2OC42NDVhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUg0Ljc1QTEuNzUgMS43NSAwIDAgMSAzIDE4LjUwMXYtNS4wOGMwLS45NjcuNzg0LTEuNzUgMS43NS0xLjc1aDMuNzU4VjUuNDk5Wm01LjQ4NCAyLjYwN3YxMC42NDVoLTMuOTg0VjUuNDk5YS4yNS4yNSAwIDAgMSAuMjUtLjI1aDMuNDg0YS4yNS4yNSAwIDAgMSAuMjUuMjV2Mi42MDdabTEuNSAxMC42NDVoMy43NThhLjI1LjI1IDAgMCAwIC4yNS0uMjVWOS44NTZhLjI1LjI1IDAgMCAwLS4yNS0uMjVoLTMuNzU4djkuMTQ1Wk00Ljc1IDEzLjE3MWEuMjUuMjUgMCAwIDAtLjI1LjI1djUuMDhjMCAuMTM4LjExMi4yNS4yNS4yNWgzLjc1OHYtNS41OEg0Ljc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const BarChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-bar-chart',
        'staticon-BarChart',
        className
      ),
      ...props,
    })
);
BarChart.displayName = 'BarChart'

export default BarChart;
