
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.5 16.754a.75.75 0 0 1 .75-.75h5.17a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75ZM3.5 12a.75.75 0 0 1 .75-.75h10.322a.75.75 0 0 1 0 1.5H4.25A.75.75 0 0 1 3.5 12Zm0-4.746a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Sort
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41IDE2Ljc1NGEuNzUuNzUgMCAwIDEgLjc1LS43NWg1LjE3YS43NS43NSAwIDAgMSAwIDEuNUg0LjI1YS43NS43NSAwIDAgMS0uNzUtLjc1Wk0zLjUgMTJhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTAuMzIyYS43NS43NSAwIDAgMSAwIDEuNUg0LjI1QS43NS43NSAwIDAgMSAzLjUgMTJabTAtNC43NDZhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTUuNWEuNzUuNzUgMCAwIDEgMCAxLjVINC4yNWEuNzUuNzUgMCAwIDEtLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Sort = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort',
        'staticon-Sort',
        className
      ),
      ...props,
    })
);
Sort.displayName = 'Sort'

export default Sort;
