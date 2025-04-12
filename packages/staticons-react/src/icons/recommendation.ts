
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.646 2.544a.624.624 0 1 1-1.082.624l-.64-1.106a.624.624 0 1 1 1.083-.624l.64 1.106ZM4.016 3.74a.624.624 0 1 1-.625 1.082l-1.106-.638A.624.624 0 1 1 2.91 3.1l1.107.639Zm5.423 9.119a.775.775 0 0 1-1.44 0l-1.063-2.657-4.493 4.49a.626.626 0 0 1-.885-.884l4.534-4.53-2.791-1.115a.775.775 0 0 1 0-1.44l3.107-1.242a.625.625 0 0 0 .348-.348L8 2.027a.775.775 0 0 1 1.439 0l1.243 3.106c.063.159.19.285.348.348l3.108 1.242c.65.26.65 1.18 0 1.44L11.03 9.405a.625.625 0 0 0-.348.348L9.439 12.86Zm-.72-1.566.802-2.004c.19-.477.568-.854 1.045-1.045l2.004-.8-2.004-.802a1.875 1.875 0 0 1-1.045-1.045L8.72 3.593l-.802 2.004c-.19.477-.568.854-1.045 1.045l-2.004.801 2.004.801c.477.19.854.568 1.045 1.045l.802 2.004Z","clip-rule":"evenodd"}]]

/**
 * @component @name Recommendation
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS42NDYgMi41NDRhLjYyNC42MjQgMCAxIDEtMS4wODIuNjI0bC0uNjQtMS4xMDZhLjYyNC42MjQgMCAxIDEgMS4wODMtLjYyNGwuNjQgMS4xMDZaTTQuMDE2IDMuNzRhLjYyNC42MjQgMCAxIDEtLjYyNSAxLjA4MmwtMS4xMDYtLjYzOEEuNjI0LjYyNCAwIDEgMSAyLjkxIDMuMWwxLjEwNy42MzlabTUuNDIzIDkuMTE5YS43NzUuNzc1IDAgMCAxLTEuNDQgMGwtMS4wNjMtMi42NTctNC40OTMgNC40OWEuNjI2LjYyNiAwIDAgMS0uODg1LS44ODRsNC41MzQtNC41My0yLjc5MS0xLjExNWEuNzc1Ljc3NSAwIDAgMSAwLTEuNDRsMy4xMDctMS4yNDJhLjYyNS42MjUgMCAwIDAgLjM0OC0uMzQ4TDggMi4wMjdhLjc3NS43NzUgMCAwIDEgMS40MzkgMGwxLjI0MyAzLjEwNmMuMDYzLjE1OS4xOS4yODUuMzQ4LjM0OGwzLjEwOCAxLjI0MmMuNjUuMjYuNjUgMS4xOCAwIDEuNDRMMTEuMDMgOS40MDVhLjYyNS42MjUgMCAwIDAtLjM0OC4zNDhMOS40MzkgMTIuODZabS0uNzItMS41NjYuODAyLTIuMDA0Yy4xOS0uNDc3LjU2OC0uODU0IDEuMDQ1LTEuMDQ1bDIuMDA0LS44LTIuMDA0LS44MDJhMS44NzUgMS44NzUgMCAwIDEtMS4wNDUtMS4wNDVMOC43MiAzLjU5M2wtLjgwMiAyLjAwNGMtLjE5LjQ3Ny0uNTY4Ljg1NC0xLjA0NSAxLjA0NWwtMi4wMDQuODAxIDIuMDA0LjgwMWMuNDc3LjE5Ljg1NC41NjggMS4wNDUgMS4wNDVsLjgwMiAyLjAwNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Recommendation = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-recommendation',
        'staticon-Recommendation',
        className
      ),
      ...props,
    })
);
Recommendation.displayName = 'Recommendation'

export default Recommendation;
