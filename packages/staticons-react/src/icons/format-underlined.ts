
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.6 9.34a3.4 3.4 0 1 0 6.8 0V3.867a.627.627 0 1 1 1.254 0V9.34a4.654 4.654 0 0 1-9.308 0V3.867a.627.627 0 0 1 1.254 0V9.34Zm-2.348 6.162a.625.625 0 1 0 0 1.25h11.495a.625.625 0 1 0 0-1.25H4.253Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatUnderlined
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi42IDkuMzRhMy40IDMuNCAwIDEgMCA2LjggMFYzLjg2N2EuNjI3LjYyNyAwIDEgMSAxLjI1NCAwVjkuMzRhNC42NTQgNC42NTQgMCAwIDEtOS4zMDggMFYzLjg2N2EuNjI3LjYyNyAwIDAgMSAxLjI1NCAwVjkuMzRabS0yLjM0OCA2LjE2MmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTEuNDk1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg0LjI1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatUnderlined = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-underlined',
        'staticon-FormatUnderlined',
        className
      ),
      ...props,
    })
);
FormatUnderlined.displayName = 'FormatUnderlined'

export default FormatUnderlined;
