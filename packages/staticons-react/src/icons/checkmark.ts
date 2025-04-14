
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M17.442 4.889a.625.625 0 0 1 0 .883L8.53 14.67c-.44.438-1.15.438-1.59 0l-4.382-4.375a.625.625 0 1 1 .884-.884l4.293 4.286 8.823-8.808a.625.625 0 0 1 .884 0Z"}]]

/**
 * @component @name Checkmark
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE3LjQ0MiA0Ljg4OWEuNjI1LjYyNSAwIDAgMSAwIC44ODNMOC41MyAxNC42N2MtLjQ0LjQzOC0xLjE1LjQzOC0xLjU5IDBsLTQuMzgyLTQuMzc1YS42MjUuNjI1IDAgMSAxIC44ODQtLjg4NGw0LjI5MyA0LjI4NiA4LjgyMy04LjgwOGEuNjI1LjYyNSAwIDAgMSAuODg0IDBaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Checkmark = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkmark',
        'staticon-Checkmark',
        className
      ),
      ...props,
    })
);
Checkmark.displayName = 'Checkmark'

export default Checkmark;
