
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.96 18.367a2.245 2.245 0 0 0 3.175 0l.994-.994a6.016 6.016 0 1 0 7.244-7.244l.994-.994a2.246 2.246 0 0 0 0-3.175l-3.299-3.3a2.245 2.245 0 0 0-3.175 0l-1.245 1.245-.007.007-.007.007-2.213 2.214a.779.779 0 0 0-.036.035L6.183 8.37a.76.76 0 0 0-.036.036l-2.202 2.202a.848.848 0 0 0-.036.036l-1.248 1.249a2.245 2.245 0 0 0 0 3.175l3.298 3.299Zm9.423-8.37 1.923-1.923a.745.745 0 0 0 0-1.054l-3.299-3.299a.745.745 0 0 0-1.054 0l-.72.721 1.33 1.33a.75.75 0 0 1-1.061 1.061l-1.33-1.33-1.178 1.178 1.33 1.33a.75.75 0 0 1-1.06 1.06l-1.33-1.33L7.755 8.92l1.33 1.33a.75.75 0 0 1-1.06 1.06l-1.33-1.33-1.178 1.178 1.33 1.33a.75.75 0 1 1-1.06 1.06l-1.33-1.33-.737.736a.745.745 0 0 0 0 1.055l3.3 3.298a.745.745 0 0 0 1.053 0l1.923-1.923a6.018 6.018 0 0 1 5.386-5.385Zm.6 10.503a4.516 4.516 0 1 1 0-9.032 4.516 4.516 0 0 1 0 9.032Zm.657-6.74a.75.75 0 0 0-1.5 0v2.204a.748.748 0 0 0 .375.65l1.904 1.099a.75.75 0 0 0 .75-1.3l-1.529-.882V13.76Z","clip-rule":"evenodd"}]]

/**
 * @component @name LocalMetric
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45NiAxOC4zNjdhMi4yNDUgMi4yNDUgMCAwIDAgMy4xNzUgMGwuOTk0LS45OTRhNi4wMTYgNi4wMTYgMCAxIDAgNy4yNDQtNy4yNDRsLjk5NC0uOTk0YTIuMjQ2IDIuMjQ2IDAgMCAwIDAtMy4xNzVsLTMuMjk5LTMuM2EyLjI0NSAyLjI0NSAwIDAgMC0zLjE3NSAwbC0xLjI0NSAxLjI0NS0uMDA3LjAwNy0uMDA3LjAwNy0yLjIxMyAyLjIxNGEuNzc5Ljc3OSAwIDAgMC0uMDM2LjAzNUw2LjE4MyA4LjM3YS43Ni43NiAwIDAgMC0uMDM2LjAzNmwtMi4yMDIgMi4yMDJhLjg0OC44NDggMCAwIDAtLjAzNi4wMzZsLTEuMjQ4IDEuMjQ5YTIuMjQ1IDIuMjQ1IDAgMCAwIDAgMy4xNzVsMy4yOTggMy4yOTlabTkuNDIzLTguMzcgMS45MjMtMS45MjNhLjc0NS43NDUgMCAwIDAgMC0xLjA1NGwtMy4yOTktMy4yOTlhLjc0NS43NDUgMCAwIDAtMS4wNTQgMGwtLjcyLjcyMSAxLjMzIDEuMzNhLjc1Ljc1IDAgMCAxLTEuMDYxIDEuMDYxbC0xLjMzLTEuMzMtMS4xNzggMS4xNzggMS4zMyAxLjMzYS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTEuMzMtMS4zM0w3Ljc1NSA4LjkybDEuMzMgMS4zM2EuNzUuNzUgMCAwIDEtMS4wNiAxLjA2bC0xLjMzLTEuMzMtMS4xNzggMS4xNzggMS4zMyAxLjMzYS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTEuMzMtMS4zMy0uNzM3LjczNmEuNzQ1Ljc0NSAwIDAgMCAwIDEuMDU1bDMuMyAzLjI5OGEuNzQ1Ljc0NSAwIDAgMCAxLjA1MyAwbDEuOTIzLTEuOTIzYTYuMDE4IDYuMDE4IDAgMCAxIDUuMzg2LTUuMzg1Wm0uNiAxMC41MDNhNC41MTYgNC41MTYgMCAxIDEgMC05LjAzMiA0LjUxNiA0LjUxNiAwIDAgMSAwIDkuMDMyWm0uNjU3LTYuNzRhLjc1Ljc1IDAgMCAwLTEuNSAwdjIuMjA0YS43NDguNzQ4IDAgMCAwIC4zNzUuNjVsMS45MDQgMS4wOTlhLjc1Ljc1IDAgMCAwIC43NS0xLjNsLTEuNTI5LS44ODJWMTMuNzZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
