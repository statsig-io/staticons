
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 19.087c.953-1.106 2.293-3.338 2.49-6.337H9.51c.197 2.999 1.537 5.23 2.49 6.337Zm1.732.212a7.506 7.506 0 0 0 5.731-6.549h-3.47a12.725 12.725 0 0 1-2.261 6.549Zm2.261-8.049h3.47a7.506 7.506 0 0 0-5.73-6.549 12.725 12.725 0 0 1 2.26 6.549Zm-1.503 0H9.51c.197-3 1.537-5.231 2.49-6.337.953 1.106 2.293 3.338 2.49 6.337Zm-6.483 1.5a12.725 12.725 0 0 0 2.262 6.55 7.506 7.506 0 0 1-5.732-6.55h3.47Zm0-1.5a12.725 12.725 0 0 1 2.261-6.55 7.506 7.506 0 0 0-5.731 6.55h3.47ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Web
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTkuMDg3Yy45NTMtMS4xMDYgMi4yOTMtMy4zMzggMi40OS02LjMzN0g5LjUxYy4xOTcgMi45OTkgMS41MzcgNS4yMyAyLjQ5IDYuMzM3Wm0xLjczMi4yMTJhNy41MDYgNy41MDYgMCAwIDAgNS43MzEtNi41NDloLTMuNDdhMTIuNzI1IDEyLjcyNSAwIDAgMS0yLjI2MSA2LjU0OVptMi4yNjEtOC4wNDloMy40N2E3LjUwNiA3LjUwNiAwIDAgMC01LjczLTYuNTQ5IDEyLjcyNSAxMi43MjUgMCAwIDEgMi4yNiA2LjU0OVptLTEuNTAzIDBIOS41MWMuMTk3LTMgMS41MzctNS4yMzEgMi40OS02LjMzNy45NTMgMS4xMDYgMi4yOTMgMy4zMzggMi40OSA2LjMzN1ptLTYuNDgzIDEuNWExMi43MjUgMTIuNzI1IDAgMCAwIDIuMjYyIDYuNTUgNy41MDYgNy41MDYgMCAwIDEtNS43MzItNi41NWgzLjQ3Wm0wLTEuNWExMi43MjUgMTIuNzI1IDAgMCAxIDIuMjYxLTYuNTUgNy41MDYgNy41MDYgMCAwIDAtNS43MzEgNi41NWgzLjQ3Wk0yMSAxMmE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Web = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-web',
        'staticon-Web',
        className
      ),
      ...props,
    })
);
Web.displayName = 'Web'

export default Web;
