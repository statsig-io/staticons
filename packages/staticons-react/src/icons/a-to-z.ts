
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.258 7.493c-.37-1.16-2.012-1.16-2.382 0L2.038 16.4a.75.75 0 0 0 1.429.455l.623-1.957h3.954l.624 1.957a.75.75 0 0 0 1.429-.455L7.258 7.493Zm.308 5.904-1.499-4.7-1.498 4.7h2.997Zm7.298-5.87a.75.75 0 0 1 .75-.75h5.383a1 1 0 0 1 .819 1.573l-5.054 7.212h4.434a.75.75 0 0 1 0 1.5h-5.395a1 1 0 0 1-.819-1.574l5.054-7.212h-4.422a.75.75 0 0 1-.75-.75Zm-1.108 5.223h-2.3a.75.75 0 1 1 0-1.5h2.3a.75.75 0 1 1 0 1.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name AToZ
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4yNTggNy40OTNjLS4zNy0xLjE2LTIuMDEyLTEuMTYtMi4zODIgMEwyLjAzOCAxNi40YS43NS43NSAwIDAgMCAxLjQyOS40NTVsLjYyMy0xLjk1N2gzLjk1NGwuNjI0IDEuOTU3YS43NS43NSAwIDAgMCAxLjQyOS0uNDU1TDcuMjU4IDcuNDkzWm0uMzA4IDUuOTA0LTEuNDk5LTQuNy0xLjQ5OCA0LjdoMi45OTdabTcuMjk4LTUuODdhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNS4zODNhMSAxIDAgMCAxIC44MTkgMS41NzNsLTUuMDU0IDcuMjEyaDQuNDM0YS43NS43NSAwIDAgMSAwIDEuNWgtNS4zOTVhMSAxIDAgMCAxLS44MTktMS41NzRsNS4wNTQtNy4yMTJoLTQuNDIyYS43NS43NSAwIDAgMS0uNzUtLjc1Wm0tMS4xMDggNS4yMjNoLTIuM2EuNzUuNzUgMCAxIDEgMC0xLjVoMi4zYS43NS43NSAwIDEgMSAwIDEuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AToZ = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-ato-z',
        'staticon-AToZ',
        className
      ),
      ...props,
    })
);
AToZ.displayName = 'AToZ'

export default AToZ;
