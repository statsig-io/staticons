
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M2.625 4.925a.625.625 0 0 0 0 1.25h14.75a.625.625 0 1 0 0-1.25H2.625ZM4.463 10c0-.345.28-.625.625-.625h9.823a.625.625 0 0 1 0 1.25H5.088A.625.625 0 0 1 4.463 10Zm2.453 4.45c0-.345.28-.624.625-.624h4.92a.625.625 0 1 1 0 1.25H7.54a.625.625 0 0 1-.625-.625Z"}]]

/**
 * @component @name Filter
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTIuNjI1IDQuOTI1YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgxNC43NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi42MjVaTTQuNDYzIDEwYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDkuODIzYS42MjUuNjI1IDAgMCAxIDAgMS4yNUg1LjA4OEEuNjI1LjYyNSAwIDAgMSA0LjQ2MyAxMFptMi40NTMgNC40NWMwLS4zNDUuMjgtLjYyNC42MjUtLjYyNGg0LjkyYS42MjUuNjI1IDAgMSAxIDAgMS4yNUg3LjU0YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVoiLz4KPC9zdmc+Cg==)
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
