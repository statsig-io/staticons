
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14 3.5c0 .345-.28.625-.626.625H2.626a.625.625 0 0 1 0-1.25h10.748c.345 0 .625.28.625.625ZM14 8c0 .345-.28.625-.626.625H2.627a.625.625 0 1 1 0-1.25h10.747c.345 0 .625.28.625.625Zm-.626 5.125a.625.625 0 1 0 0-1.25H2.626a.625.625 0 1 0 0 1.25h10.748Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedJustify
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMy41YzAgLjM0NS0uMjguNjI1LS42MjYuNjI1SDIuNjI2YS42MjUuNjI1IDAgMCAxIDAtMS4yNWgxMC43NDhjLjM0NSAwIC42MjUuMjguNjI1LjYyNVpNMTQgOGMwIC4zNDUtLjI4LjYyNS0uNjI2LjYyNUgyLjYyN2EuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMTAuNzQ3Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabS0uNjI2IDUuMTI1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgyLjYyNmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTAuNzQ4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
