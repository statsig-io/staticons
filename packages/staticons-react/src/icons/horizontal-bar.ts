
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.252 3.749a1.75 1.75 0 0 0-1.75 1.75v.999c0 .966.783 1.75 1.75 1.75h13.496a1.75 1.75 0 0 0 1.75-1.75v-.999a1.75 1.75 0 0 0-1.75-1.75H5.252Zm-.25 1.75a.25.25 0 0 1 .25-.25h13.496a.25.25 0 0 1 .25.25v.999a.25.25 0 0 1-.25.25H5.252a.25.25 0 0 1-.25-.25v-.999Zm-1.5 5.994c0-.966.783-1.75 1.75-1.75H15.7c.966 0 1.75.784 1.75 1.75v.999a1.75 1.75 0 0 1-1.75 1.75H5.252a1.75 1.75 0 0 1-1.75-1.75v-.999Zm1.75-.25a.25.25 0 0 0-.25.25v.999c0 .138.112.25.25.25H15.7a.25.25 0 0 0 .25-.25v-.999a.25.25 0 0 0-.25-.25H5.252Zm-1.75 6.259c0-.966.783-1.75 1.75-1.75h5.116c.966 0 1.75.783 1.75 1.75v.999a1.75 1.75 0 0 1-1.75 1.75H5.252a1.75 1.75 0 0 1-1.75-1.75v-.999Zm1.75-.25a.25.25 0 0 0-.25.25v.999c0 .138.112.25.25.25h5.116a.25.25 0 0 0 .25-.25v-.999a.25.25 0 0 0-.25-.25H5.252Z","clip-rule":"evenodd"}]]

/**
 * @component @name HorizontalBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yNTIgMy43NDlhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXYuOTk5YzAgLjk2Ni43ODMgMS43NSAxLjc1IDEuNzVoMTMuNDk2YTEuNzUgMS43NSAwIDAgMCAxLjc1LTEuNzV2LS45OTlhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NUg1LjI1MlptLS4yNSAxLjc1YS4yNS4yNSAwIDAgMSAuMjUtLjI1aDEzLjQ5NmEuMjUuMjUgMCAwIDEgLjI1LjI1di45OTlhLjI1LjI1IDAgMCAxLS4yNS4yNUg1LjI1MmEuMjUuMjUgMCAwIDEtLjI1LS4yNXYtLjk5OVptLTEuNSA1Ljk5NGMwLS45NjYuNzgzLTEuNzUgMS43NS0xLjc1SDE1LjdjLjk2NiAwIDEuNzUuNzg0IDEuNzUgMS43NXYuOTk5YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVINS4yNTJhMS43NSAxLjc1IDAgMCAxLTEuNzUtMS43NXYtLjk5OVptMS43NS0uMjVhLjI1LjI1IDAgMCAwLS4yNS4yNXYuOTk5YzAgLjEzOC4xMTIuMjUuMjUuMjVIMTUuN2EuMjUuMjUgMCAwIDAgLjI1LS4yNXYtLjk5OWEuMjUuMjUgMCAwIDAtLjI1LS4yNUg1LjI1MlptLTEuNzUgNi4yNTljMC0uOTY2Ljc4My0xLjc1IDEuNzUtMS43NWg1LjExNmMuOTY2IDAgMS43NS43ODMgMS43NSAxLjc1di45OTlhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUg1LjI1MmExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1di0uOTk5Wm0xLjc1LS4yNWEuMjUuMjUgMCAwIDAtLjI1LjI1di45OTljMCAuMTM4LjExMi4yNS4yNS4yNWg1LjExNmEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtLjk5OWEuMjUuMjUgMCAwIDAtLjI1LS4yNUg1LjI1MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const HorizontalBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-horizontal-bar',
        'staticon-HorizontalBar',
        className
      ),
      ...props,
    })
);
HorizontalBar.displayName = 'HorizontalBar'

export default HorizontalBar;
