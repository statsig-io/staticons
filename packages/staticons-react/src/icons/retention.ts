
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M20.75 19.004a1.75 1.75 0 0 1-1.75 1.75H5a1.75 1.75 0 0 1-1.75-1.75V5c0-.967.784-1.75 1.75-1.75h3.333c.967 0 1.75.783 1.75 1.75v3.56h3.583c.967 0 1.75.783 1.75 1.75v3.61H19c.966 0 1.75.784 1.75 1.75v3.334ZM4.75 8.56h3.833V5a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v3.56Zm5.333 1.5h3.583a.25.25 0 0 1 .25.25v3.584h-3.833V10.06Zm-1.5.026v3.808H4.75v-3.808h3.833ZM19 19.254a.25.25 0 0 0 .25-.25V15.67a.25.25 0 0 0-.25-.25h-3.584v3.834H19Zm-5.084 0V15.42h-3.833v3.834h3.833Zm-5.333 0V15.42H4.75v3.584c0 .138.112.25.25.25h3.583Z","clip-rule":"evenodd"}]]

/**
 * @component @name Retention
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNzUgMTkuMDA0YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVINWExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1VjVjMC0uOTY3Ljc4NC0xLjc1IDEuNzUtMS43NWgzLjMzM2MuOTY3IDAgMS43NS43ODMgMS43NSAxLjc1djMuNTZoMy41ODNjLjk2NyAwIDEuNzUuNzgzIDEuNzUgMS43NXYzLjYxSDE5Yy45NjYgMCAxLjc1Ljc4NCAxLjc1IDEuNzV2My4zMzRaTTQuNzUgOC41NmgzLjgzM1Y1YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDVhLjI1LjI1IDAgMCAwLS4yNS4yNXYzLjU2Wm01LjMzMyAxLjVoMy41ODNhLjI1LjI1IDAgMCAxIC4yNS4yNXYzLjU4NGgtMy44MzNWMTAuMDZabS0xLjUuMDI2djMuODA4SDQuNzV2LTMuODA4aDMuODMzWk0xOSAxOS4yNTRhLjI1LjI1IDAgMCAwIC4yNS0uMjVWMTUuNjdhLjI1LjI1IDAgMCAwLS4yNS0uMjVoLTMuNTg0djMuODM0SDE5Wm0tNS4wODQgMFYxNS40MmgtMy44MzN2My44MzRoMy44MzNabS01LjMzMyAwVjE1LjQySDQuNzV2My41ODRjMCAuMTM4LjExMi4yNS4yNS4yNWgzLjU4M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Retention = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention',
        'staticon-Retention',
        className
      ),
      ...props,
    })
);
Retention.displayName = 'Retention'

export default Retention;
