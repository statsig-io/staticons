
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M20.125 18.375a1.75 1.75 0 0 1-1.75 1.75h-1.122a1.75 1.75 0 0 1-1.75-1.75V5.625c0-.966.783-1.75 1.75-1.75h1.122c.966 0 1.75.784 1.75 1.75v12.75Zm-1.75.25a.25.25 0 0 0 .25-.25V10.01h-1.622v8.364c0 .138.111.25.25.25h1.122ZM17.003 8.51V5.625a.25.25 0 0 1 .25-.25h1.122a.25.25 0 0 1 .25.25v2.886h-1.622ZM6.748 20.125a1.75 1.75 0 0 0 1.75-1.75v-7.743a1.75 1.75 0 0 0-1.75-1.75H5.626a1.75 1.75 0 0 0-1.75 1.75v7.743c0 .966.783 1.75 1.75 1.75h1.122Zm.25-1.75a.25.25 0 0 1-.25.25H5.626a.25.25 0 0 1-.25-.25v-3.369h1.622v3.369Zm0-4.869H5.376v-2.874a.25.25 0 0 1 .25-.25h1.122a.25.25 0 0 1 .25.25v2.874Zm4.188 4.869V13.01h1.622v5.364a.25.25 0 0 1-.25.25h-1.122a.25.25 0 0 1-.25-.25Zm1.622-9.754v2.89h-1.622v-2.89a.25.25 0 0 1 .25-.25h1.122a.25.25 0 0 1 .25.25Zm-.25 11.504a1.75 1.75 0 0 0 1.75-1.75V8.62a1.75 1.75 0 0 0-1.75-1.75h-1.122a1.75 1.75 0 0 0-1.75 1.75v9.754c0 .966.783 1.75 1.75 1.75h1.122Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTI1IDE4LjM3NWExLjc1IDEuNzUgMCAwIDEtMS43NSAxLjc1aC0xLjEyMmExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1VjUuNjI1YzAtLjk2Ni43ODMtMS43NSAxLjc1LTEuNzVoMS4xMjJjLjk2NiAwIDEuNzUuNzg0IDEuNzUgMS43NXYxMi43NVptLTEuNzUuMjVhLjI1LjI1IDAgMCAwIC4yNS0uMjVWMTAuMDFoLTEuNjIydjguMzY0YzAgLjEzOC4xMTEuMjUuMjUuMjVoMS4xMjJaTTE3LjAwMyA4LjUxVjUuNjI1YS4yNS4yNSAwIDAgMSAuMjUtLjI1aDEuMTIyYS4yNS4yNSAwIDAgMSAuMjUuMjV2Mi44ODZoLTEuNjIyWk02Ljc0OCAyMC4xMjVhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtNy43NDNhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NUg1LjYyNmExLjc1IDEuNzUgMCAwIDAtMS43NSAxLjc1djcuNzQzYzAgLjk2Ni43ODMgMS43NSAxLjc1IDEuNzVoMS4xMjJabS4yNS0xLjc1YS4yNS4yNSAwIDAgMS0uMjUuMjVINS42MjZhLjI1LjI1IDAgMCAxLS4yNS0uMjV2LTMuMzY5aDEuNjIydjMuMzY5Wm0wLTQuODY5SDUuMzc2di0yLjg3NGEuMjUuMjUgMCAwIDEgLjI1LS4yNWgxLjEyMmEuMjUuMjUgMCAwIDEgLjI1LjI1djIuODc0Wm00LjE4OCA0Ljg2OVYxMy4wMWgxLjYyMnY1LjM2NGEuMjUuMjUgMCAwIDEtLjI1LjI1aC0xLjEyMmEuMjUuMjUgMCAwIDEtLjI1LS4yNVptMS42MjItOS43NTR2Mi44OWgtMS42MjJ2LTIuODlhLjI1LjI1IDAgMCAxIC4yNS0uMjVoMS4xMjJhLjI1LjI1IDAgMCAxIC4yNS4yNVptLS4yNSAxMS41MDRhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NVY4LjYyYTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVoLTEuMTIyYTEuNzUgMS43NSAwIDAgMC0xLjc1IDEuNzV2OS43NTRjMCAuOTY2Ljc4MyAxLjc1IDEuNzUgMS43NWgxLjEyMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StackedBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-stacked-bar',
        'staticon-StackedBar',
        className
      ),
      ...props,
    })
);
StackedBar.displayName = 'StackedBar'

export default StackedBar;
