
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.129 3.375a2.75 2.75 0 0 0-2.75 2.75v3.172a.75.75 0 1 0 1.5 0V6.125c0-.69.56-1.25 1.25-1.25h3.164a.75.75 0 0 0 0-1.5H6.129Zm8.578 0a.75.75 0 0 0 0 1.5h3.172c.69 0 1.25.56 1.25 1.25v3.172a.75.75 0 0 0 1.5 0V6.125a2.75 2.75 0 0 0-2.75-2.75h-3.172ZM4.879 14.707a.75.75 0 0 0-1.5 0v3.165a2.75 2.75 0 0 0 2.75 2.75h3.164a.75.75 0 1 0 0-1.5H6.129c-.69 0-1.25-.56-1.25-1.25v-3.165Zm15.75 0a.75.75 0 0 0-1.5 0v3.165c0 .69-.56 1.25-1.25 1.25h-3.172a.75.75 0 0 0 0 1.5h3.172a2.75 2.75 0 0 0 2.75-2.75v-3.165ZM14.499 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutoCapture
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjkgMy4zNzVhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NXYzLjE3MmEuNzUuNzUgMCAxIDAgMS41IDBWNi4xMjVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMy4xNjRhLjc1Ljc1IDAgMCAwIDAtMS41SDYuMTI5Wm04LjU3OCAwYS43NS43NSAwIDAgMCAwIDEuNWgzLjE3MmMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYzLjE3MmEuNzUuNzUgMCAwIDAgMS41IDBWNi4xMjVhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NWgtMy4xNzJaTTQuODc5IDE0LjcwN2EuNzUuNzUgMCAwIDAtMS41IDB2My4xNjVhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWgzLjE2NGEuNzUuNzUgMCAxIDAgMC0xLjVINi4xMjljLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNXYtMy4xNjVabTE1Ljc1IDBhLjc1Ljc1IDAgMCAwLTEuNSAwdjMuMTY1YzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNWgtMy4xNzJhLjc1Ljc1IDAgMCAwIDAgMS41aDMuMTcyYTIuNzUgMi43NSAwIDAgMCAyLjc1LTIuNzV2LTMuMTY1Wk0xNC40OTkgMTJhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDBabTEuNSAwYTQgNCAwIDEgMS04IDAgNCA0IDAgMCAxIDggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutoCapture = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-auto-capture',
        'staticon-AutoCapture',
        className
      ),
      ...props,
    })
);
AutoCapture.displayName = 'AutoCapture'

export default AutoCapture;
