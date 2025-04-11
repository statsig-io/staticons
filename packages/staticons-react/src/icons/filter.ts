
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.666 16.754a.75.75 0 0 1 .75-.75h5.17a.75.75 0 0 1 0 1.5h-5.17a.75.75 0 0 1-.75-.75ZM6.088 12a.75.75 0 0 1 .75-.75H17.16a.75.75 0 0 1 0 1.5H6.838a.75.75 0 0 1-.75-.75ZM3.5 7.254a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Filter
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42NjYgMTYuNzU0YS43NS43NSAwIDAgMSAuNzUtLjc1aDUuMTdhLjc1Ljc1IDAgMCAxIDAgMS41aC01LjE3YS43NS43NSAwIDAgMS0uNzUtLjc1Wk02LjA4OCAxMmEuNzUuNzUgMCAwIDEgLjc1LS43NUgxNy4xNmEuNzUuNzUgMCAwIDEgMCAxLjVINi44MzhhLjc1Ljc1IDAgMCAxLS43NS0uNzVaTTMuNSA3LjI1NGEuNzUuNzUgMCAwIDEgLjc1LS43NWgxNS41YS43NS43NSAwIDAgMSAwIDEuNUg0LjI1YS43NS43NSAwIDAgMS0uNzUtLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Filter = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-filter',
        'staticon-Filter',
        className
      ),
      ...props,
    })
);
Filter.displayName = 'Filter'

export default Filter;
