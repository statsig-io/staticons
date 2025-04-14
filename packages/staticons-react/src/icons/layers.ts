
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m10.143 3.918 6.126 4.244a.25.25 0 0 1 0 .411l-6.126 4.245a.25.25 0 0 1-.285 0L3.732 8.573a.25.25 0 0 1 0-.41l6.126-4.245a.25.25 0 0 1 .285 0ZM9.146 2.89a1.5 1.5 0 0 1 1.708 0l6.127 4.245a1.5 1.5 0 0 1 0 2.466l-6.127 4.245a1.5 1.5 0 0 1-1.708 0L3.02 9.6a1.5 1.5 0 0 1 0-2.466L9.146 2.89Zm8.208 9.797a.625.625 0 0 0-.712-1.027l-6.286 4.355a.625.625 0 0 1-.712 0L3.358 11.66a.625.625 0 0 0-.712 1.027l6.286 4.356a1.875 1.875 0 0 0 2.136 0l6.286-4.356Z","clip-rule":"evenodd"}]]

/**
 * @component @name Layers
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuMTQzIDMuOTE4IDYuMTI2IDQuMjQ0YS4yNS4yNSAwIDAgMSAwIC40MTFsLTYuMTI2IDQuMjQ1YS4yNS4yNSAwIDAgMS0uMjg1IDBMMy43MzIgOC41NzNhLjI1LjI1IDAgMCAxIDAtLjQxbDYuMTI2LTQuMjQ1YS4yNS4yNSAwIDAgMSAuMjg1IDBaTTkuMTQ2IDIuODlhMS41IDEuNSAwIDAgMSAxLjcwOCAwbDYuMTI3IDQuMjQ1YTEuNSAxLjUgMCAwIDEgMCAyLjQ2NmwtNi4xMjcgNC4yNDVhMS41IDEuNSAwIDAgMS0xLjcwOCAwTDMuMDIgOS42YTEuNSAxLjUgMCAwIDEgMC0yLjQ2Nkw5LjE0NiAyLjg5Wm04LjIwOCA5Ljc5N2EuNjI1LjYyNSAwIDAgMC0uNzEyLTEuMDI3bC02LjI4NiA0LjM1NWEuNjI1LjYyNSAwIDAgMS0uNzEyIDBMMy4zNTggMTEuNjZhLjYyNS42MjUgMCAwIDAtLjcxMiAxLjAyN2w2LjI4NiA0LjM1NmExLjg3NSAxLjg3NSAwIDAgMCAyLjEzNiAwbDYuMjg2LTQuMzU2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Layers = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-layers',
        'staticon-Layers',
        className
      ),
      ...props,
    })
);
Layers.displayName = 'Layers'

export default Layers;
