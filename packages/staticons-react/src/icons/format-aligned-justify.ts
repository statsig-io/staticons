
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.5 5.125c0 .345-.28.625-.626.625H4.125a.625.625 0 1 1 0-1.25h11.75c.345 0 .625.28.625.625Zm0 4.88c0 .345-.28.625-.626.625H4.125a.625.625 0 1 1 0-1.25h11.75c.345 0 .625.28.625.625Zm-.626 5.495a.625.625 0 1 0 0-1.25H4.125a.625.625 0 1 0 0 1.25h11.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedJustify
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNSA1LjEyNWMwIC4zNDUtLjI4LjYyNS0uNjI2LjYyNUg0LjEyNWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMTEuNzVjLjM0NSAwIC42MjUuMjguNjI1LjYyNVptMCA0Ljg4YzAgLjM0NS0uMjguNjI1LS42MjYuNjI1SDQuMTI1YS42MjUuNjI1IDAgMSAxIDAtMS4yNWgxMS43NWMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1Wm0tLjYyNiA1LjQ5NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINC4xMjVhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDExLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedJustify = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-justify',
        'staticon-FormatAlignedJustify',
        className
      ),
      ...props,
    })
);
FormatAlignedJustify.displayName = 'FormatAlignedJustify'

export default FormatAlignedJustify;
