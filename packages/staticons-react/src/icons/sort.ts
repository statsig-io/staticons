
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M2.625 4.925a.625.625 0 0 0 0 1.25h14.75a.625.625 0 1 0 0-1.25H2.625ZM2 10c0-.345.28-.625.625-.625h9.823a.625.625 0 1 1 0 1.25H2.625A.625.625 0 0 1 2 10Zm0 4.45c0-.345.28-.624.625-.624h4.92a.625.625 0 1 1 0 1.25h-4.92A.625.625 0 0 1 2 14.45Z"}]]

/**
 * @component @name Sort
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTIuNjI1IDQuOTI1YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgxNC43NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi42MjVaTTIgMTBjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoOS44MjNhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDIuNjI1QS42MjUuNjI1IDAgMCAxIDIgMTBabTAgNC40NWMwLS4zNDUuMjgtLjYyNC42MjUtLjYyNGg0LjkyYS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtNC45MkEuNjI1LjYyNSAwIDAgMSAyIDE0LjQ1WiIvPgo8L3N2Zz4K)
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
