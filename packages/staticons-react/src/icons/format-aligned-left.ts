
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.5 5.125c0 .345-.28.625-.625.625H4.125a.625.625 0 1 1 0-1.25h11.75c.345 0 .625.28.625.625Zm-4.293 4.88c0 .345-.28.624-.625.624H4.125a.625.625 0 1 1 0-1.25h7.457c.345 0 .625.28.625.625Zm3.668 5.494a.625.625 0 1 0 0-1.25H4.125a.625.625 0 0 0 0 1.25h11.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNSA1LjEyNWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUg0LjEyNWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMTEuNzVjLjM0NSAwIC42MjUuMjguNjI1LjYyNVptLTQuMjkzIDQuODhjMCAuMzQ1LS4yOC42MjQtLjYyNS42MjRINC4xMjVhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDcuNDU3Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabTMuNjY4IDUuNDk0YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg0LjEyNWEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoMTEuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-left',
        'staticon-FormatAlignedLeft',
        className
      ),
      ...props,
    })
);
FormatAlignedLeft.displayName = 'FormatAlignedLeft'

export default FormatAlignedLeft;
