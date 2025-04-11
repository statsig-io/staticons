
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.001 5.968h1.641a1.75 1.75 0 0 0 1.723 1.44h5.27a1.75 1.75 0 0 0 1.723-1.44h1.635c.69 0 1.25.559 1.25 1.25l.006 11.031c0 .69-.56 1.251-1.25 1.251H6.007c-.69 0-1.25-.56-1.25-1.25L4.75 7.219c0-.69.56-1.25 1.25-1.25Zm11.992-1.5h-1.63A1.75 1.75 0 0 0 14.634 3h-5.27a1.75 1.75 0 0 0-1.727 1.467H6.001a2.75 2.75 0 0 0-2.75 2.751l.006 11.032A2.75 2.75 0 0 0 6.007 21h11.992a2.75 2.75 0 0 0 2.75-2.751l-.006-11.033a2.75 2.75 0 0 0-2.75-2.748ZM9.365 4.5a.25.25 0 0 0-.25.25v.908c0 .138.112.25.25.25h5.27a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25h-5.27Zm-.496 6.558a.55.55 0 1 1 1.098 0 .55.55 0 0 1-1.098 0Zm.549-2.05a2.05 2.05 0 1 0 0 4.099 2.05 2.05 0 0 0 0-4.098Zm-1.531 7.73a.75.75 0 1 0 1.087 1.033l7.123-7.493a.75.75 0 1 0-1.087-1.034l-7.123 7.493Zm6.695-1.34a.549.549 0 1 0 0 1.099.549.549 0 0 0 0-1.098Zm-2.05.55a2.05 2.05 0 1 1 4.099 0 2.05 2.05 0 0 1-4.098 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name QualityScore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wMDEgNS45NjhoMS42NDFhMS43NSAxLjc1IDAgMCAwIDEuNzIzIDEuNDRoNS4yN2ExLjc1IDEuNzUgMCAwIDAgMS43MjMtMS40NGgxLjYzNWMuNjkgMCAxLjI1LjU1OSAxLjI1IDEuMjVsLjAwNiAxMS4wMzFjMCAuNjktLjU2IDEuMjUxLTEuMjUgMS4yNTFINi4wMDdjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNUw0Ljc1IDcuMjE5YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1Wm0xMS45OTItMS41aC0xLjYzQTEuNzUgMS43NSAwIDAgMCAxNC42MzQgM2gtNS4yN2ExLjc1IDEuNzUgMCAwIDAtMS43MjcgMS40NjdINi4wMDFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NTFsLjAwNiAxMS4wMzJBMi43NSAyLjc1IDAgMCAwIDYuMDA3IDIxaDExLjk5MmEyLjc1IDIuNzUgMCAwIDAgMi43NS0yLjc1MWwtLjAwNi0xMS4wMzNhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NDhaTTkuMzY1IDQuNWEuMjUuMjUgMCAwIDAtLjI1LjI1di45MDhjMCAuMTM4LjExMi4yNS4yNS4yNWg1LjI3YS4yNS4yNSAwIDAgMCAuMjUtLjI1VjQuNzVhLjI1LjI1IDAgMCAwLS4yNS0uMjVoLTUuMjdabS0uNDk2IDYuNTU4YS41NS41NSAwIDEgMSAxLjA5OCAwIC41NS41NSAwIDAgMS0xLjA5OCAwWm0uNTQ5LTIuMDVhMi4wNSAyLjA1IDAgMSAwIDAgNC4wOTkgMi4wNSAyLjA1IDAgMCAwIDAtNC4wOThabS0xLjUzMSA3LjczYS43NS43NSAwIDEgMCAxLjA4NyAxLjAzM2w3LjEyMy03LjQ5M2EuNzUuNzUgMCAxIDAtMS4wODctMS4wMzRsLTcuMTIzIDcuNDkzWm02LjY5NS0xLjM0YS41NDkuNTQ5IDAgMSAwIDAgMS4wOTkuNTQ5LjU0OSAwIDAgMCAwLTEuMDk4Wm0tMi4wNS41NWEyLjA1IDIuMDUgMCAxIDEgNC4wOTkgMCAyLjA1IDIuMDUgMCAwIDEtNC4wOTggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const QualityScore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-quality-score',
        'staticon-QualityScore',
        className
      ),
      ...props,
    })
);
QualityScore.displayName = 'QualityScore'

export default QualityScore;
