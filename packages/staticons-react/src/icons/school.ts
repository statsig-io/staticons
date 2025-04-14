
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.983 3.631a2.125 2.125 0 0 1 2.03 0l6.397 3.48c.312.17.5.45.563.753a.627.627 0 0 1 .027.182v4.764a.625.625 0 1 1-1.25 0V9.446l-1.541.838v3.623c0 .54-.236 1.114-.762 1.447a8.566 8.566 0 0 1-4.45 1.273 8.561 8.561 0 0 1-4.45-1.273c-.526-.333-.761-.908-.761-1.447v-3.624l-2.2-1.196a1.125 1.125 0 0 1 0-1.977l6.397-3.479Zm-2.947 7.332v2.944c0 .197.083.329.179.39a7.313 7.313 0 0 0 3.782 1.08 7.33 7.33 0 0 0 3.783-1.08c.096-.061.179-.193.179-.39v-2.943l-2.946 1.602a2.125 2.125 0 0 1-2.03 0l-2.947-1.603Zm4.38-6.234a.875.875 0 0 0-.836 0L3.385 8.1l6.195 3.37c.26.14.575.14.836 0l6.195-3.37-6.195-3.37Z","clip-rule":"evenodd"}]]

/**
 * @component @name School
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45ODMgMy42MzFhMi4xMjUgMi4xMjUgMCAwIDEgMi4wMyAwbDYuMzk3IDMuNDhjLjMxMi4xNy41LjQ1LjU2My43NTNhLjYyNy42MjcgMCAwIDEgLjAyNy4xODJ2NC43NjRhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjkuNDQ2bC0xLjU0MS44Mzh2My42MjNjMCAuNTQtLjIzNiAxLjExNC0uNzYyIDEuNDQ3YTguNTY2IDguNTY2IDAgMCAxLTQuNDUgMS4yNzMgOC41NjEgOC41NjEgMCAwIDEtNC40NS0xLjI3M2MtLjUyNi0uMzMzLS43NjEtLjkwOC0uNzYxLTEuNDQ3di0zLjYyNGwtMi4yLTEuMTk2YTEuMTI1IDEuMTI1IDAgMCAxIDAtMS45NzdsNi4zOTctMy40NzlabS0yLjk0NyA3LjMzMnYyLjk0NGMwIC4xOTcuMDgzLjMyOS4xNzkuMzlhNy4zMTMgNy4zMTMgMCAwIDAgMy43ODIgMS4wOCA3LjMzIDcuMzMgMCAwIDAgMy43ODMtMS4wOGMuMDk2LS4wNjEuMTc5LS4xOTMuMTc5LS4zOXYtMi45NDNsLTIuOTQ2IDEuNjAyYTIuMTI1IDIuMTI1IDAgMCAxLTIuMDMgMGwtMi45NDctMS42MDNabTQuMzgtNi4yMzRhLjg3NS44NzUgMCAwIDAtLjgzNiAwTDMuMzg1IDguMWw2LjE5NSAzLjM3Yy4yNi4xNC41NzUuMTQuODM2IDBsNi4xOTUtMy4zNy02LjE5NS0zLjM3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const School = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-school',
        'staticon-School',
        className
      ),
      ...props,
    })
);
School.displayName = 'School'

export default School;
