
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.124 4.398a3.277 3.277 0 1 1 6.553.001 3.277 3.277 0 0 1-6.553 0Zm3.277-2.026a2.027 2.027 0 1 0 0 4.053 2.027 2.027 0 0 0 0-4.053Z","clip-rule":"evenodd"}],["path",{"fill":"#000","d":"M13.26 3.182v1.98l.541-.54a.625.625 0 0 1 .884.883l-1.608 1.608a.625.625 0 0 1-.884 0l-1.607-1.608a.625.625 0 0 1 .884-.883l.54.54v-1.98a.625.625 0 0 0-.624-.625h-2.06a.625.625 0 1 1 0-1.25h2.06c1.035 0 1.875.84 1.875 1.875ZM2.744 10.828l-.54.54a.625.625 0 1 1-.884-.883l1.607-1.608a.625.625 0 0 1 .884 0l1.608 1.608a.625.625 0 0 1-.884.884l-.54-.54v1.978c0 .346.279.625.624.625h2.06a.625.625 0 1 1 0 1.25h-2.06a1.875 1.875 0 0 1-1.875-1.875v-1.979Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.599 8.323a3.277 3.277 0 1 0 0 6.554 3.277 3.277 0 0 0 0-6.554ZM9.57 11.6a2.027 2.027 0 1 1 4.055 0 2.027 2.027 0 0 1-4.055 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Conversion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjQgNC4zOThhMy4yNzcgMy4yNzcgMCAxIDEgNi41NTMuMDAxIDMuMjc3IDMuMjc3IDAgMCAxLTYuNTUzIDBabTMuMjc3LTIuMDI2YTIuMDI3IDIuMDI3IDAgMSAwIDAgNC4wNTMgMi4wMjcgMi4wMjcgMCAwIDAgMC00LjA1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMy4yNiAzLjE4MnYxLjk4bC41NDEtLjU0YS42MjUuNjI1IDAgMCAxIC44ODQuODgzbC0xLjYwOCAxLjYwOGEuNjI1LjYyNSAwIDAgMS0uODg0IDBsLTEuNjA3LTEuNjA4YS42MjUuNjI1IDAgMCAxIC44ODQtLjg4M2wuNTQuNTR2LTEuOThhLjYyNS42MjUgMCAwIDAtLjYyNC0uNjI1aC0yLjA2YS42MjUuNjI1IDAgMSAxIDAtMS4yNWgyLjA2YzEuMDM1IDAgMS44NzUuODQgMS44NzUgMS44NzVaTTIuNzQ0IDEwLjgyOGwtLjU0LjU0YS42MjUuNjI1IDAgMSAxLS44ODQtLjg4M2wxLjYwNy0xLjYwOGEuNjI1LjYyNSAwIDAgMSAuODg0IDBsMS42MDggMS42MDhhLjYyNS42MjUgMCAwIDEtLjg4NC44ODRsLS41NC0uNTR2MS45NzhjMCAuMzQ2LjI3OS42MjUuNjI0LjYyNWgyLjA2YS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtMi4wNmExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NXYtMS45NzlaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTk5IDguMzIzYTMuMjc3IDMuMjc3IDAgMSAwIDAgNi41NTQgMy4yNzcgMy4yNzcgMCAwIDAgMC02LjU1NFpNOS41NyAxMS42YTIuMDI3IDIuMDI3IDAgMSAxIDQuMDU1IDAgMi4wMjcgMi4wMjcgMCAwIDEtNC4wNTUgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Conversion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-conversion',
        'staticon-Conversion',
        className
      ),
      ...props,
    })
);
Conversion.displayName = 'Conversion'

export default Conversion;
