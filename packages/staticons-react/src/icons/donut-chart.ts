
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.535 1.836v2.556a3.924 3.924 0 0 1 2.033 1.904h2.576a6.351 6.351 0 0 0-4.61-4.46Zm-1.25-.464c0-.518.46-.949 1.005-.86 3.104.51 5.57 2.917 6.19 5.997a.867.867 0 0 1-.854 1.037H11.33a.888.888 0 0 1-.817-.55 2.671 2.671 0 0 0-1.617-1.508.888.888 0 0 1-.611-.84V1.372Zm-2.106.581a6.366 6.366 0 0 0-4.427 6.08 6.366 6.366 0 0 0 4.427 6.079V11.47a3.93 3.93 0 0 1-2.014-3.438 3.93 3.93 0 0 1 2.014-3.438V1.953Zm.19-1.347a.867.867 0 0 1 1.06.849v3.363a.887.887 0 0 1-.505.797 2.68 2.68 0 0 0-1.51 2.417 2.68 2.68 0 0 0 1.51 2.418c.29.14.505.438.505.797v3.363a.867.867 0 0 1-1.06.848C3.006 14.681.502 11.65.502 8.032S3.006 1.384 6.37.606Zm5.199 9.098a3.924 3.924 0 0 1-2.034 1.904v2.556a6.35 6.35 0 0 0 4.61-4.46h-2.576Zm-.238-1.25h3.296c.53 0 .966.48.854 1.036-.62 3.08-3.085 5.489-6.19 5.997a.867.867 0 0 1-1.006-.859v-3.276c0-.404.27-.726.612-.84a2.671 2.671 0 0 0 1.617-1.508c.13-.313.44-.55.817-.55Z","clip-rule":"evenodd"}]]

/**
 * @component @name DonutChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41MzUgMS44MzZ2Mi41NTZhMy45MjQgMy45MjQgMCAwIDEgMi4wMzMgMS45MDRoMi41NzZhNi4zNTEgNi4zNTEgMCAwIDAtNC42MS00LjQ2Wm0tMS4yNS0uNDY0YzAtLjUxOC40Ni0uOTQ5IDEuMDA1LS44NiAzLjEwNC41MSA1LjU3IDIuOTE3IDYuMTkgNS45OTdhLjg2Ny44NjcgMCAwIDEtLjg1NCAxLjAzN0gxMS4zM2EuODg4Ljg4OCAwIDAgMS0uODE3LS41NSAyLjY3MSAyLjY3MSAwIDAgMC0xLjYxNy0xLjUwOC44ODguODg4IDAgMCAxLS42MTEtLjg0VjEuMzcyWm0tMi4xMDYuNTgxYTYuMzY2IDYuMzY2IDAgMCAwLTQuNDI3IDYuMDggNi4zNjYgNi4zNjYgMCAwIDAgNC40MjcgNi4wNzlWMTEuNDdhMy45MyAzLjkzIDAgMCAxLTIuMDE0LTMuNDM4IDMuOTMgMy45MyAwIDAgMSAyLjAxNC0zLjQzOFYxLjk1M1ptLjE5LTEuMzQ3YS44NjcuODY3IDAgMCAxIDEuMDYuODQ5djMuMzYzYS44ODcuODg3IDAgMCAxLS41MDUuNzk3IDIuNjggMi42OCAwIDAgMC0xLjUxIDIuNDE3IDIuNjggMi42OCAwIDAgMCAxLjUxIDIuNDE4Yy4yOS4xNC41MDUuNDM4LjUwNS43OTd2My4zNjNhLjg2Ny44NjcgMCAwIDEtMS4wNi44NDhDMy4wMDYgMTQuNjgxLjUwMiAxMS42NS41MDIgOC4wMzJTMy4wMDYgMS4zODQgNi4zNy42MDZabTUuMTk5IDkuMDk4YTMuOTI0IDMuOTI0IDAgMCAxLTIuMDM0IDEuOTA0djIuNTU2YTYuMzUgNi4zNSAwIDAgMCA0LjYxLTQuNDZoLTIuNTc2Wm0tLjIzOC0xLjI1aDMuMjk2Yy41MyAwIC45NjYuNDguODU0IDEuMDM2LS42MiAzLjA4LTMuMDg1IDUuNDg5LTYuMTkgNS45OTdhLjg2Ny44NjcgMCAwIDEtMS4wMDYtLjg1OXYtMy4yNzZjMC0uNDA0LjI3LS43MjYuNjEyLS44NGEyLjY3MSAyLjY3MSAwIDAgMCAxLjYxNy0xLjUwOGMuMTMtLjMxMy40NC0uNTUuODE3LS41NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DonutChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-donut-chart',
        'staticon-DonutChart',
        className
      ),
      ...props,
    })
);
DonutChart.displayName = 'DonutChart'

export default DonutChart;
