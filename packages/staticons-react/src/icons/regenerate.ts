
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 4.25A7.75 7.75 0 0 0 4.25 12a.75.75 0 0 1-1.5 0 9.25 9.25 0 0 1 16.86-5.26V5.346a.75.75 0 0 1 1.5 0v2.742c0 .69-.559 1.25-1.25 1.25h-2.74a.75.75 0 1 1 0-1.5h1.42A7.744 7.744 0 0 0 12 4.25Zm8.5 7a.75.75 0 0 1 .75.75 9.25 9.25 0 0 1-16.813 5.326v1.323a.75.75 0 0 1-1.5 0v-2.742c0-.69.56-1.25 1.25-1.25h2.742a.75.75 0 0 1 0 1.5H5.458A7.75 7.75 0 0 0 19.75 12a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Regenerate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNC4yNUE3Ljc1IDcuNzUgMCAwIDAgNC4yNSAxMmEuNzUuNzUgMCAwIDEtMS41IDAgOS4yNSA5LjI1IDAgMCAxIDE2Ljg2LTUuMjZWNS4zNDZhLjc1Ljc1IDAgMCAxIDEuNSAwdjIuNzQyYzAgLjY5LS41NTkgMS4yNS0xLjI1IDEuMjVoLTIuNzRhLjc1Ljc1IDAgMSAxIDAtMS41aDEuNDJBNy43NDQgNy43NDQgMCAwIDAgMTIgNC4yNVptOC41IDdhLjc1Ljc1IDAgMCAxIC43NS43NSA5LjI1IDkuMjUgMCAwIDEtMTYuODEzIDUuMzI2djEuMzIzYS43NS43NSAwIDAgMS0xLjUgMHYtMi43NDJjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMi43NDJhLjc1Ljc1IDAgMCAxIDAgMS41SDUuNDU4QTcuNzUgNy43NSAwIDAgMCAxOS43NSAxMmEuNzUuNzUgMCAwIDEgLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Regenerate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-regenerate',
        'staticon-Regenerate',
        className
      ),
      ...props,
    })
);
Regenerate.displayName = 'Regenerate'

export default Regenerate;
