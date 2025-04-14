
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.531 2.874a2.125 2.125 0 0 0-1.918-.58l-3.878.773c-.842.168-1.5.826-1.668 1.668l-.774 3.878c-.14.697.079 1.417.58 1.919l6.595 6.594c.83.83 2.175.83 3.005 0l4.652-4.652c.83-.83.83-2.175 0-3.005l-6.594-6.595Zm-1.673.645a.875.875 0 0 1 .79.24l6.594 6.593a.875.875 0 0 1 0 1.238l-4.653 4.652a.875.875 0 0 1-1.237 0L3.758 9.648a.875.875 0 0 1-.24-.79l.774-3.878a.875.875 0 0 1 .687-.687l3.879-.774ZM6.763 7.835a.758.758 0 1 0 1.072-1.072.758.758 0 0 0-1.072 1.072Zm1.956.884a2.008 2.008 0 1 1-2.84-2.84 2.008 2.008 0 0 1 2.84 2.84Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTMxIDIuODc0YTIuMTI1IDIuMTI1IDAgMCAwLTEuOTE4LS41OGwtMy44NzguNzczYy0uODQyLjE2OC0xLjUuODI2LTEuNjY4IDEuNjY4bC0uNzc0IDMuODc4Yy0uMTQuNjk3LjA3OSAxLjQxNy41OCAxLjkxOWw2LjU5NSA2LjU5NGMuODMuODMgMi4xNzUuODMgMy4wMDUgMGw0LjY1Mi00LjY1MmMuODMtLjgzLjgzLTIuMTc1IDAtMy4wMDVsLTYuNTk0LTYuNTk1Wm0tMS42NzMuNjQ1YS44NzUuODc1IDAgMCAxIC43OS4yNGw2LjU5NCA2LjU5M2EuODc1Ljg3NSAwIDAgMSAwIDEuMjM4bC00LjY1MyA0LjY1MmEuODc1Ljg3NSAwIDAgMS0xLjIzNyAwTDMuNzU4IDkuNjQ4YS44NzUuODc1IDAgMCAxLS4yNC0uNzlsLjc3NC0zLjg3OGEuODc1Ljg3NSAwIDAgMSAuNjg3LS42ODdsMy44NzktLjc3NFpNNi43NjMgNy44MzVhLjc1OC43NTggMCAxIDAgMS4wNzItMS4wNzIuNzU4Ljc1OCAwIDAgMC0xLjA3MiAxLjA3MlptMS45NTYuODg0YTIuMDA4IDIuMDA4IDAgMSAxLTIuODQtMi44NCAyLjAwOCAyLjAwOCAwIDAgMSAyLjg0IDIuODRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Tag = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-tag',
        'staticon-Tag',
        className
      ),
      ...props,
    })
);
Tag.displayName = 'Tag'

export default Tag;
