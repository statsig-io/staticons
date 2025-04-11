
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.25 5.722a.75.75 0 1 0 1.5 0V3.626a.75.75 0 0 0-1.5 0v2.096ZM7.03 8.09a.75.75 0 1 0 1.06-1.06L6.61 5.548a.75.75 0 0 0-1.061 1.06L7.03 8.09Zm11.42-2.542a.75.75 0 0 1 0 1.06l-1.48 1.48a.75.75 0 0 1-1.06-1.06l1.48-1.48a.75.75 0 0 1 1.06 0Zm-7.686 5.218a1.745 1.745 0 1 0 2.468 2.468 1.745 1.745 0 0 0-2.468-2.468Zm-1.06 3.529a3.245 3.245 0 1 1 4.589-4.59 3.245 3.245 0 0 1-4.59 4.59Zm-1.619 2.679a.75.75 0 0 0-1.06-1.061l-1.479 1.478a.75.75 0 0 0 1.061 1.06l1.478-1.477Zm10.365 1.478a.75.75 0 0 1-1.06 0l-1.483-1.483a.75.75 0 1 1 1.06-1.06l1.483 1.482a.75.75 0 0 1 0 1.06ZM21.124 12a.75.75 0 0 1-.75.75h-2.092a.75.75 0 0 1 0-1.5h2.092a.75.75 0 0 1 .75.75Zm-15.409.75a.75.75 0 0 0 0-1.5h-2.09a.75.75 0 0 0 0 1.5h2.09ZM12 21.125a.75.75 0 0 1-.75-.75v-2.097a.75.75 0 1 1 1.5 0v2.097a.75.75 0 0 1-.75.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name LightMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjUgNS43MjJhLjc1Ljc1IDAgMSAwIDEuNSAwVjMuNjI2YS43NS43NSAwIDAgMC0xLjUgMHYyLjA5NlpNNy4wMyA4LjA5YS43NS43NSAwIDEgMCAxLjA2LTEuMDZMNi42MSA1LjU0OGEuNzUuNzUgMCAwIDAtMS4wNjEgMS4wNkw3LjAzIDguMDlabTExLjQyLTIuNTQyYS43NS43NSAwIDAgMSAwIDEuMDZsLTEuNDggMS40OGEuNzUuNzUgMCAwIDEtMS4wNi0xLjA2bDEuNDgtMS40OGEuNzUuNzUgMCAwIDEgMS4wNiAwWm0tNy42ODYgNS4yMThhMS43NDUgMS43NDUgMCAxIDAgMi40NjggMi40NjggMS43NDUgMS43NDUgMCAwIDAtMi40NjgtMi40NjhabS0xLjA2IDMuNTI5YTMuMjQ1IDMuMjQ1IDAgMSAxIDQuNTg5LTQuNTkgMy4yNDUgMy4yNDUgMCAwIDEtNC41OSA0LjU5Wm0tMS42MTkgMi42NzlhLjc1Ljc1IDAgMCAwLTEuMDYtMS4wNjFsLTEuNDc5IDEuNDc4YS43NS43NSAwIDAgMCAxLjA2MSAxLjA2bDEuNDc4LTEuNDc3Wm0xMC4zNjUgMS40NzhhLjc1Ljc1IDAgMCAxLTEuMDYgMGwtMS40ODMtMS40ODNhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwxLjQ4MyAxLjQ4MmEuNzUuNzUgMCAwIDEgMCAxLjA2Wk0yMS4xMjQgMTJhLjc1Ljc1IDAgMCAxLS43NS43NWgtMi4wOTJhLjc1Ljc1IDAgMCAxIDAtMS41aDIuMDkyYS43NS43NSAwIDAgMSAuNzUuNzVabS0xNS40MDkuNzVhLjc1Ljc1IDAgMCAwIDAtMS41aC0yLjA5YS43NS43NSAwIDAgMCAwIDEuNWgyLjA5Wk0xMiAyMS4xMjVhLjc1Ljc1IDAgMCAxLS43NS0uNzV2LTIuMDk3YS43NS43NSAwIDEgMSAxLjUgMHYyLjA5N2EuNzUuNzUgMCAwIDEtLjc1Ljc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LightMode = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-light-mode',
        'staticon-LightMode',
        className
      ),
      ...props,
    })
);
LightMode.displayName = 'LightMode'

export default LightMode;
