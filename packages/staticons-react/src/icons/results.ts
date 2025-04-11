
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.375 17.876a2.75 2.75 0 0 0 2.75 2.75h11.75a2.75 2.75 0 0 0 2.75-2.75V6.123a2.75 2.75 0 0 0-2.75-2.75H6.125a2.75 2.75 0 0 0-2.75 2.75v11.753Zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V6.123c0-.69.56-1.25 1.25-1.25h11.75c.69 0 1.25.56 1.25 1.25v11.753c0 .69-.56 1.25-1.25 1.25H6.125ZM16.5 6.752a.75.75 0 0 1 .75.75v8.995a.75.75 0 0 1-1.5 0V7.502a.75.75 0 0 1 .75-.75Zm-6 2.647a.75.75 0 0 1 .75.75v6.348a.75.75 0 0 1-1.5 0v-6.348a.75.75 0 0 1 .75-.75Zm-3 3.91a.75.75 0 0 1 .75.75v2.438a.75.75 0 0 1-1.5 0v-2.439a.75.75 0 0 1 .75-.75Zm6.75-1.992a.75.75 0 0 0-1.5 0v5.18a.75.75 0 0 0 1.5 0v-5.18Z","clip-rule":"evenodd"}]]

/**
 * @component @name Results
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMTcuODc2YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY2LjEyM2EyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDYuMTI1YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTEuNzUzWm0yLjc1IDEuMjVjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVY2LjEyM2MwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWgxMS43NWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYxMS43NTNjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDYuMTI1Wk0xNi41IDYuNzUyYS43NS43NSAwIDAgMSAuNzUuNzV2OC45OTVhLjc1Ljc1IDAgMCAxLTEuNSAwVjcuNTAyYS43NS43NSAwIDAgMSAuNzUtLjc1Wm0tNiAyLjY0N2EuNzUuNzUgMCAwIDEgLjc1Ljc1djYuMzQ4YS43NS43NSAwIDAgMS0xLjUgMHYtNi4zNDhhLjc1Ljc1IDAgMCAxIC43NS0uNzVabS0zIDMuOTFhLjc1Ljc1IDAgMCAxIC43NS43NXYyLjQzOGEuNzUuNzUgMCAwIDEtMS41IDB2LTIuNDM5YS43NS43NSAwIDAgMSAuNzUtLjc1Wm02Ljc1LTEuOTkyYS43NS43NSAwIDAgMC0xLjUgMHY1LjE4YS43NS43NSAwIDAgMCAxLjUgMHYtNS4xOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Results = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-results',
        'staticon-Results',
        className
      ),
      ...props,
    })
);
Results.displayName = 'Results'

export default Results;
