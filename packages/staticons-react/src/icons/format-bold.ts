
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.127 2.377c0-.345.28-.625.625-.625h4.046a3.334 3.334 0 0 1 2.493 5.546 3.542 3.542 0 0 1-.959 6.95h-5.58a.625.625 0 0 1-.617-.724.63.63 0 0 1-.008-.097v-5.62a.657.657 0 0 1 0-.03v-5.4Zm1.25.625v4.165h3.51a2.084 2.084 0 0 0-.09-4.165h-3.42Zm0 5.417v4.579h4.955a2.29 2.29 0 0 0 0-4.58h-1.42a3.386 3.386 0 0 1-.114.001h-3.42Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatBold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4xMjcgMi4zNzdjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNC4wNDZhMy4zMzQgMy4zMzQgMCAwIDEgMi40OTMgNS41NDYgMy41NDIgMy41NDIgMCAwIDEtLjk1OSA2Ljk1aC01LjU4YS42MjUuNjI1IDAgMCAxLS42MTctLjcyNC42My42MyAwIDAgMS0uMDA4LS4wOTd2LTUuNjJhLjY1Ny42NTcgMCAwIDEgMC0uMDN2LTUuNFptMS4yNS42MjV2NC4xNjVoMy41MWEyLjA4NCAyLjA4NCAwIDAgMC0uMDktNC4xNjVoLTMuNDJabTAgNS40MTd2NC41NzloNC45NTVhMi4yOSAyLjI5IDAgMCAwIDAtNC41OGgtMS40MmEzLjM4NiAzLjM4NiAwIDAgMS0uMTE0LjAwMWgtMy40MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatBold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-bold',
        'staticon-FormatBold',
        className
      ),
      ...props,
    })
);
FormatBold.displayName = 'FormatBold'

export default FormatBold;
