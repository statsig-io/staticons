
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.999 3.5c0 .345-.28.625-.625.625H2.626a.625.625 0 1 1 0-1.25h10.748c.345 0 .625.28.625.625Zm0 4.5c0 .345-.28.625-.625.625H6.626a.625.625 0 1 1 0-1.25h6.748c.345 0 .625.28.625.625Zm-.625 5.125a.625.625 0 1 0 0-1.25H2.626a.625.625 0 1 0 0 1.25h10.748Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTk5IDMuNWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgyLjYyNmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMTAuNzQ4Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabTAgNC41YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDYuNjI2YS42MjUuNjI1IDAgMSAxIDAtMS4yNWg2Ljc0OGMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1Wm0tLjYyNSA1LjEyNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMi42MjZhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDEwLjc0OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-right',
        'staticon-FormatAlignedRight',
        className
      ),
      ...props,
    })
);
FormatAlignedRight.displayName = 'FormatAlignedRight'

export default FormatAlignedRight;
