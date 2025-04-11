
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 6.748a2.75 2.75 0 0 1 2.75-2.75h12.5A2.75 2.75 0 0 1 21 6.748v8.508a2.75 2.75 0 0 1-2.75 2.75h-7.096a.25.25 0 0 0-.173.07L7.694 21.22c-.636.609-1.691.158-1.691-.722v-2.492H5.75A2.75 2.75 0 0 1 3 15.256V6.748Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.508c0 .69.56 1.25 1.25 1.25h.503c.69 0 1.25.56 1.25 1.25v1.572l2.441-2.336a1.75 1.75 0 0 1 1.21-.486h7.096c.69 0 1.25-.56 1.25-1.25V6.748c0-.69-.56-1.25-1.25-1.25H5.75Zm5.665 7.785a.75.75 0 0 1 .75-.75h3.496a.75.75 0 0 1 0 1.5h-3.495a.75.75 0 0 1-.75-.75ZM8.87 8.086a.75.75 0 0 0-1.06 1.06l1.803 1.804-1.803 1.803a.75.75 0 1 0 1.06 1.06l2.334-2.333a.75.75 0 0 0 0-1.06L8.869 8.085Z","clip-rule":"evenodd"}]]

/**
 * @component @name Prompt
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyA2Ljc0OGEyLjc1IDIuNzUgMCAwIDEgMi43NS0yLjc1aDEyLjVBMi43NSAyLjc1IDAgMCAxIDIxIDYuNzQ4djguNTA4YTIuNzUgMi43NSAwIDAgMS0yLjc1IDIuNzVoLTcuMDk2YS4yNS4yNSAwIDAgMC0uMTczLjA3TDcuNjk0IDIxLjIyYy0uNjM2LjYwOS0xLjY5MS4xNTgtMS42OTEtLjcyMnYtMi40OTJINS43NUEyLjc1IDIuNzUgMCAwIDEgMyAxNS4yNTZWNi43NDhabTIuNzUtMS4yNWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2OC41MDhjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVoLjUwM2MuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYxLjU3MmwyLjQ0MS0yLjMzNmExLjc1IDEuNzUgMCAwIDEgMS4yMS0uNDg2aDcuMDk2Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVY2Ljc0OGMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVINS43NVptNS42NjUgNy43ODVhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMy40OTZhLjc1Ljc1IDAgMCAxIDAgMS41aC0zLjQ5NWEuNzUuNzUgMCAwIDEtLjc1LS43NVpNOC44NyA4LjA4NmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDEuODAzIDEuODA0LTEuODAzIDEuODAzYS43NS43NSAwIDEgMCAxLjA2IDEuMDZsMi4zMzQtMi4zMzNhLjc1Ljc1IDAgMCAwIDAtMS4wNkw4Ljg2OSA4LjA4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Prompt = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-prompt',
        'staticon-Prompt',
        className
      ),
      ...props,
    })
);
Prompt.displayName = 'Prompt'

export default Prompt;
