
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.043 13.396a.775.775 0 0 0 1.096 0l2.179-2.179a.625.625 0 0 0-.884-.884l-1.218 1.218v-8.55a.625.625 0 1 0-1.25.001v8.548l-1.215-1.215a.625.625 0 1 0-.884.884l2.176 2.177ZM1.124 11.665a.625.625 0 0 0 0 1.25H4.24a.625.625 0 1 0 0-1.25H1.124Zm0-3.128a.625.625 0 0 1 0-1.25h5.532a.625.625 0 1 1 0 1.25H1.124ZM.499 3.533c0-.345.28-.625.625-.625H9.18a.625.625 0 1 1 0 1.25H1.124a.625.625 0 0 1-.625-.625Z"}]]

/**
 * @component @name SortDescending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjA0MyAxMy4zOTZhLjc3NS43NzUgMCAwIDAgMS4wOTYgMGwyLjE3OS0yLjE3OWEuNjI1LjYyNSAwIDAgMC0uODg0LS44ODRsLTEuMjE4IDEuMjE4di04LjU1YS42MjUuNjI1IDAgMSAwLTEuMjUuMDAxdjguNTQ4bC0xLjIxNS0xLjIxNWEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4NGwyLjE3NiAyLjE3N1pNMS4xMjQgMTEuNjY1YS42MjUuNjI1IDAgMCAwIDAgMS4yNUg0LjI0YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgxLjEyNFptMC0zLjEyOGEuNjI1LjYyNSAwIDAgMSAwLTEuMjVoNS41MzJhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEuMTI0Wk0uNDk5IDMuNTMzYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1SDkuMThhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEuMTI0YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortDescending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-descending',
        'staticon-SortDescending',
        className
      ),
      ...props,
    })
);
SortDescending.displayName = 'SortDescending'

export default SortDescending;
