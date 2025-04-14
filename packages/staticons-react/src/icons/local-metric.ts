
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.104 15.045a1.87 1.87 0 0 0 2.645 0l.743-.742A4.822 4.822 0 0 0 18 13.18a4.822 4.822 0 0 0-3.701-4.69l.738-.738c.73-.73.73-1.916 0-2.647l-2.556-2.558a1.87 1.87 0 0 0-2.645 0L2.547 9.84a1.873 1.873 0 0 0 0 2.647l2.557 2.558Zm7.526-6.654 1.523-1.523a.622.622 0 0 0 0-.88l-2.555-2.557a.62.62 0 0 0-.878 0l-.607.607 1.002 1.002a.625.625 0 0 1-.884.884L9.23 4.922l-.826.826L9.405 6.75a.625.625 0 0 1-.884.884l-1-1.002-.825.825 1 1a.625.625 0 0 1-.883.885l-1-1-.826.825 1.001 1.002a.625.625 0 0 1-.884.884l-1-1.002-.673.674a.622.622 0 0 0 0 .878l2.556 2.558a.62.62 0 0 0 .879 0l1.524-1.524a4.822 4.822 0 0 1 4.24-4.246Zm.55 8.359a3.57 3.57 0 1 1 0-7.14 3.57 3.57 0 0 1 0 7.14Zm.551-5.343a.625.625 0 0 0-1.25 0v1.734a.625.625 0 0 0 .312.565l1.517.876a.625.625 0 1 0 .625-1.083l-1.204-.695v-1.397Z","clip-rule":"evenodd"}]]

/**
 * @component @name LocalMetric
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xMDQgMTUuMDQ1YTEuODcgMS44NyAwIDAgMCAyLjY0NSAwbC43NDMtLjc0MkE0LjgyMiA0LjgyMiAwIDAgMCAxOCAxMy4xOGE0LjgyMiA0LjgyMiAwIDAgMC0zLjcwMS00LjY5bC43MzgtLjczOGMuNzMtLjczLjczLTEuOTE2IDAtMi42NDdsLTIuNTU2LTIuNTU4YTEuODcgMS44NyAwIDAgMC0yLjY0NSAwTDIuNTQ3IDkuODRhMS44NzMgMS44NzMgMCAwIDAgMCAyLjY0N2wyLjU1NyAyLjU1OFptNy41MjYtNi42NTQgMS41MjMtMS41MjNhLjYyMi42MjIgMCAwIDAgMC0uODhsLTIuNTU1LTIuNTU3YS42Mi42MiAwIDAgMC0uODc4IDBsLS42MDcuNjA3IDEuMDAyIDEuMDAyYS42MjUuNjI1IDAgMCAxLS44ODQuODg0TDkuMjMgNC45MjJsLS44MjYuODI2TDkuNDA1IDYuNzVhLjYyNS42MjUgMCAwIDEtLjg4NC44ODRsLTEtMS4wMDItLjgyNS44MjUgMSAxYS42MjUuNjI1IDAgMCAxLS44ODMuODg1bC0xLTEtLjgyNi44MjUgMS4wMDEgMS4wMDJhLjYyNS42MjUgMCAwIDEtLjg4NC44ODRsLTEtMS4wMDItLjY3My42NzRhLjYyMi42MjIgMCAwIDAgMCAuODc4bDIuNTU2IDIuNTU4YS42Mi42MiAwIDAgMCAuODc5IDBsMS41MjQtMS41MjRhNC44MjIgNC44MjIgMCAwIDEgNC4yNC00LjI0NlptLjU1IDguMzU5YTMuNTcgMy41NyAwIDEgMSAwLTcuMTQgMy41NyAzLjU3IDAgMCAxIDAgNy4xNFptLjU1MS01LjM0M2EuNjI1LjYyNSAwIDAgMC0xLjI1IDB2MS43MzRhLjYyNS42MjUgMCAwIDAgLjMxMi41NjVsMS41MTcuODc2YS42MjUuNjI1IDAgMSAwIC42MjUtMS4wODNsLTEuMjA0LS42OTV2LTEuMzk3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
