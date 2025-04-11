
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.822 5.81a.25.25 0 0 1 .421.181v11.992a.25.25 0 0 1-.421.182l-2.485-2.343a2.75 2.75 0 0 0-1.886-.75H4.75a1.25 1.25 0 0 1-1.25-1.25v-3.666c0-.69.56-1.25 1.25-1.25h2.7a2.75 2.75 0 0 0 1.888-.75l2.484-2.347Zm1.921.181c0-1.535-1.835-2.326-2.951-1.272L8.308 7.065a1.25 1.25 0 0 1-.858.341h-2.7A2.75 2.75 0 0 0 2 10.156v3.667a2.75 2.75 0 0 0 2.75 2.75h2.7c.32 0 .626.122.858.34l2.485 2.343c1.116 1.053 2.95.261 2.95-1.273V5.99Zm8.037 2.98a.75.75 0 0 1 0 1.06l-1.968 1.968 1.968 1.968a.75.75 0 1 1-1.06 1.06l-1.968-1.967-1.968 1.967a.75.75 0 0 1-1.061-1.06l1.968-1.968-1.968-1.968a.75.75 0 0 1 1.06-1.06l1.969 1.967L20.72 8.97a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODIyIDUuODFhLjI1LjI1IDAgMCAxIC40MjEuMTgxdjExLjk5MmEuMjUuMjUgMCAwIDEtLjQyMS4xODJsLTIuNDg1LTIuMzQzYTIuNzUgMi43NSAwIDAgMC0xLjg4Ni0uNzVINC43NWExLjI1IDEuMjUgMCAwIDEtMS4yNS0xLjI1di0zLjY2NmMwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWgyLjdhMi43NSAyLjc1IDAgMCAwIDEuODg4LS43NWwyLjQ4NC0yLjM0N1ptMS45MjEuMTgxYzAtMS41MzUtMS44MzUtMi4zMjYtMi45NTEtMS4yNzJMOC4zMDggNy4wNjVhMS4yNSAxLjI1IDAgMCAxLS44NTguMzQxaC0yLjdBMi43NSAyLjc1IDAgMCAwIDIgMTAuMTU2djMuNjY3YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMi43Yy4zMiAwIC42MjYuMTIyLjg1OC4zNGwyLjQ4NSAyLjM0M2MxLjExNiAxLjA1MyAyLjk1LjI2MSAyLjk1LTEuMjczVjUuOTlabTguMDM3IDIuOThhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtMS45NjggMS45NjggMS45NjggMS45NjhhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNmwtMS45NjgtMS45NjctMS45NjggMS45NjdhLjc1Ljc1IDAgMCAxLTEuMDYxLTEuMDZsMS45NjgtMS45NjgtMS45NjgtMS45NjhhLjc1Ljc1IDAgMCAxIDEuMDYtMS4wNmwxLjk2OSAxLjk2N0wyMC43MiA4Ljk3YS43NS43NSAwIDAgMSAxLjA2IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-off',
        'staticon-VolumeOff',
        className
      ),
      ...props,
    })
);
VolumeOff.displayName = 'VolumeOff'

export default VolumeOff;
