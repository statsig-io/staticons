
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.45 1.298A1.875 1.875 0 0 0 6.757.785l-3.75.749a1.875 1.875 0 0 0-1.473 1.472L.786 6.757c-.123.614.07 1.25.513 1.693L7.55 14.7c.732.732 1.92.732 2.652 0l4.5-4.5a1.875 1.875 0 0 0 0-2.651L8.45 1.298Zm-1.448.713a.625.625 0 0 1 .564.171l6.252 6.252a.625.625 0 0 1 0 .883l-4.5 4.5a.625.625 0 0 1-.884 0L2.183 7.566a.625.625 0 0 1-.171-.564L2.76 3.25a.625.625 0 0 1 .49-.49l3.752-.749ZM5.015 5.94a.655.655 0 1 0 .926-.926.655.655 0 0 0-.926.926Zm1.81.884A1.905 1.905 0 1 1 4.131 4.13a1.905 1.905 0 0 1 2.694 2.694Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC40NSAxLjI5OEExLjg3NSAxLjg3NSAwIDAgMCA2Ljc1Ny43ODVsLTMuNzUuNzQ5YTEuODc1IDEuODc1IDAgMCAwLTEuNDczIDEuNDcyTC43ODYgNi43NTdjLS4xMjMuNjE0LjA3IDEuMjUuNTEzIDEuNjkzTDcuNTUgMTQuN2MuNzMyLjczMiAxLjkyLjczMiAyLjY1MiAwbDQuNS00LjVhMS44NzUgMS44NzUgMCAwIDAgMC0yLjY1MUw4LjQ1IDEuMjk4Wm0tMS40NDguNzEzYS42MjUuNjI1IDAgMCAxIC41NjQuMTcxbDYuMjUyIDYuMjUyYS42MjUuNjI1IDAgMCAxIDAgLjg4M2wtNC41IDQuNWEuNjI1LjYyNSAwIDAgMS0uODg0IDBMMi4xODMgNy41NjZhLjYyNS42MjUgMCAwIDEtLjE3MS0uNTY0TDIuNzYgMy4yNWEuNjI1LjYyNSAwIDAgMSAuNDktLjQ5bDMuNzUyLS43NDlaTTUuMDE1IDUuOTRhLjY1NS42NTUgMCAxIDAgLjkyNi0uOTI2LjY1NS42NTUgMCAwIDAtLjkyNi45MjZabTEuODEuODg0QTEuOTA1IDEuOTA1IDAgMSAxIDQuMTMxIDQuMTNhMS45MDUgMS45MDUgMCAwIDEgMi42OTQgMi42OTRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
