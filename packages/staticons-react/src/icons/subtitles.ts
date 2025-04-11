
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.242 6.001H4.751a.75.75 0 0 0-.75.75l.006 10.498c0 .414.336.75.75.75H19.25a.75.75 0 0 0 .75-.75L19.992 6.75a.75.75 0 0 0-.75-.75Zm-14.491-1.5h14.491a2.25 2.25 0 0 1 2.25 2.25l.007 10.496a2.25 2.25 0 0 1-2.25 2.252H4.757a2.25 2.25 0 0 1-2.25-2.249L2.501 6.753A2.25 2.25 0 0 1 4.751 4.5Zm5.733 8.249a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75ZM6.25 12a.75.75 0 0 0 0 1.5h1.998a.75.75 0 0 0 0-1.5H6.25Zm6.747 3.75a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1 0-1.5h5.997a.75.75 0 0 1 .75.75Zm4.737.75a.75.75 0 0 0 0-1.5H15.24a.75.75 0 0 0 0 1.5h2.495Z","clip-rule":"evenodd"}]]

/**
 * @component @name Subtitles
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMjQyIDYuMDAxSDQuNzUxYS43NS43NSAwIDAgMC0uNzUuNzVsLjAwNiAxMC40OThjMCAuNDE0LjMzNi43NS43NS43NUgxOS4yNWEuNzUuNzUgMCAwIDAgLjc1LS43NUwxOS45OTIgNi43NWEuNzUuNzUgMCAwIDAtLjc1LS43NVptLTE0LjQ5MS0xLjVoMTQuNDkxYTIuMjUgMi4yNSAwIDAgMSAyLjI1IDIuMjVsLjAwNyAxMC40OTZhMi4yNSAyLjI1IDAgMCAxLTIuMjUgMi4yNTJINC43NTdhMi4yNSAyLjI1IDAgMCAxLTIuMjUtMi4yNDlMMi41MDEgNi43NTNBMi4yNSAyLjI1IDAgMCAxIDQuNzUxIDQuNVptNS43MzMgOC4yNDlhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNi41YS43NS43NSAwIDAgMSAwIDEuNWgtNi41YS43NS43NSAwIDAgMS0uNzUtLjc1Wk02LjI1IDEyYS43NS43NSAwIDAgMCAwIDEuNWgxLjk5OGEuNzUuNzUgMCAwIDAgMC0xLjVINi4yNVptNi43NDcgMy43NWEuNzUuNzUgMCAwIDEtLjc1Ljc1SDYuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDUuOTk3YS43NS43NSAwIDAgMSAuNzUuNzVabTQuNzM3Ljc1YS43NS43NSAwIDAgMCAwLTEuNUgxNS4yNGEuNzUuNzUgMCAwIDAgMCAxLjVoMi40OTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Subtitles = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-subtitles',
        'staticon-Subtitles',
        className
      ),
      ...props,
    })
);
Subtitles.displayName = 'Subtitles'

export default Subtitles;
