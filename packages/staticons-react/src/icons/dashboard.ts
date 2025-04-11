
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10 9.013a2.25 2.25 0 0 1-2.25 2.25H5.248a2.25 2.25 0 0 1-2.25-2.25v-3.26a2.25 2.25 0 0 1 2.25-2.25H7.75A2.25 2.25 0 0 1 10 5.752v3.26Zm-2.25.75a.75.75 0 0 0 .75-.75v-3.26a.75.75 0 0 0-.75-.75H5.248a.75.75 0 0 0-.75.75v3.26c0 .414.336.75.75.75H7.75Zm-2.502 2.974a2.25 2.25 0 0 0-2.25 2.25v3.26a2.25 2.25 0 0 0 2.25 2.25h5.013a2.25 2.25 0 0 0 2.25-2.25v-3.26a2.25 2.25 0 0 0-2.25-2.25H5.248Zm-.75 2.25a.75.75 0 0 1 .75-.75h5.013a.75.75 0 0 1 .75.75v3.26a.75.75 0 0 1-.75.75H5.248a.75.75 0 0 1-.75-.75v-3.26Zm11.763-2.25a2.25 2.25 0 0 0-2.25 2.25v3.26a2.25 2.25 0 0 0 2.25 2.25h2.49a2.25 2.25 0 0 0 2.25-2.25v-3.26a2.25 2.25 0 0 0-2.25-2.25h-2.49Zm-.75 2.25a.75.75 0 0 1 .75-.75h2.49a.75.75 0 0 1 .75.75v3.26a.75.75 0 0 1-.75.75h-2.49a.75.75 0 0 1-.75-.75v-3.26Zm3.24-3.724a2.25 2.25 0 0 0 2.25-2.25v-3.26a2.25 2.25 0 0 0-2.25-2.25h-5a2.25 2.25 0 0 0-2.25 2.25v3.26a2.25 2.25 0 0 0 2.25 2.25h5Zm.75-2.25a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75v-3.26a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v3.26Z","clip-rule":"evenodd"}]]

/**
 * @component @name Dashboard
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgOS4wMTNhMi4yNSAyLjI1IDAgMCAxLTIuMjUgMi4yNUg1LjI0OGEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1di0zLjI2YTIuMjUgMi4yNSAwIDAgMSAyLjI1LTIuMjVINy43NUEyLjI1IDIuMjUgMCAwIDEgMTAgNS43NTJ2My4yNlptLTIuMjUuNzVhLjc1Ljc1IDAgMCAwIC43NS0uNzV2LTMuMjZhLjc1Ljc1IDAgMCAwLS43NS0uNzVINS4yNDhhLjc1Ljc1IDAgMCAwLS43NS43NXYzLjI2YzAgLjQxNC4zMzYuNzUuNzUuNzVINy43NVptLTIuNTAyIDIuOTc0YTIuMjUgMi4yNSAwIDAgMC0yLjI1IDIuMjV2My4yNmEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDUuMDEzYTIuMjUgMi4yNSAwIDAgMCAyLjI1LTIuMjV2LTMuMjZhMi4yNSAyLjI1IDAgMCAwLTIuMjUtMi4yNUg1LjI0OFptLS43NSAyLjI1YS43NS43NSAwIDAgMSAuNzUtLjc1aDUuMDEzYS43NS43NSAwIDAgMSAuNzUuNzV2My4yNmEuNzUuNzUgMCAwIDEtLjc1Ljc1SDUuMjQ4YS43NS43NSAwIDAgMS0uNzUtLjc1di0zLjI2Wm0xMS43NjMtMi4yNWEyLjI1IDIuMjUgMCAwIDAtMi4yNSAyLjI1djMuMjZhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWgyLjQ5YTIuMjUgMi4yNSAwIDAgMCAyLjI1LTIuMjV2LTMuMjZhMi4yNSAyLjI1IDAgMCAwLTIuMjUtMi4yNWgtMi40OVptLS43NSAyLjI1YS43NS43NSAwIDAgMSAuNzUtLjc1aDIuNDlhLjc1Ljc1IDAgMCAxIC43NS43NXYzLjI2YS43NS43NSAwIDAgMS0uNzUuNzVoLTIuNDlhLjc1Ljc1IDAgMCAxLS43NS0uNzV2LTMuMjZabTMuMjQtMy43MjRhMi4yNSAyLjI1IDAgMCAwIDIuMjUtMi4yNXYtMy4yNmEyLjI1IDIuMjUgMCAwIDAtMi4yNS0yLjI1aC01YTIuMjUgMi4yNSAwIDAgMC0yLjI1IDIuMjV2My4yNmEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDVabS43NS0yLjI1YS43NS43NSAwIDAgMS0uNzUuNzVoLTVhLjc1Ljc1IDAgMCAxLS43NS0uNzV2LTMuMjZhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNWEuNzUuNzUgMCAwIDEgLjc1Ljc1djMuMjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Dashboard = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dashboard',
        'staticon-Dashboard',
        className
      ),
      ...props,
    })
);
Dashboard.displayName = 'Dashboard'

export default Dashboard;
