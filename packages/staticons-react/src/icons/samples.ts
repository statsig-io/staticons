
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.127a2.75 2.75 0 0 1-2.75-2.75V6.623a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v10.754a2.75 2.75 0 0 1-2.75 2.75H6.125Zm-1.25-2.75c0 .69.56 1.25 1.25 1.25h11.75c.69 0 1.25-.56 1.25-1.25V15.21H4.875v2.168Zm0-3.668h14.25v-3.418H4.875v3.418Zm0-4.918h14.25V6.623c0-.69-.56-1.25-1.25-1.25H6.125c-.69 0-1.25.56-1.25 1.25v2.168Z","clip-rule":"evenodd"}]]

/**
 * @component @name Samples
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjUgMjAuMTI3YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi42MjNhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NWEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djEwLjc1NGEyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMTI1Wm0tMS4yNS0yLjc1YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDExLjc1Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVYxNS4yMUg0Ljg3NXYyLjE2OFptMC0zLjY2OGgxNC4yNXYtMy40MThINC44NzV2My40MThabTAtNC45MThoMTQuMjVWNi42MjNjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1SDYuMTI1Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYyLjE2OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Samples = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-samples',
        'staticon-Samples',
        className
      ),
      ...props,
    })
);
Samples.displayName = 'Samples'

export default Samples;
