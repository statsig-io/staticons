
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.591 2.09c0-.602.488-1.09 1.09-1.09h4.637c.602 0 1.09.488 1.09 1.09v.044h1.317c1.116 0 2.02.904 2.021 2.02l.004 8.824a2.021 2.021 0 0 1-2.021 2.023H3.275a2.021 2.021 0 0 1-2.021-2.02L1.25 4.155a2.02 2.02 0 0 1 2.021-2.022h1.32V2.09Zm6.817 1.317v-.023h1.317c.425 0 .77.345.771.77l.004 8.825a.771.771 0 0 1-.771.772H3.275a.771.771 0 0 1-.771-.771L2.5 4.156c0-.427.345-.772.771-.772h1.32v.023c0 .602.488 1.09 1.09 1.09h4.637a1.09 1.09 0 0 0 1.09-1.09ZM5.841 2.25v.997h4.317V2.25H5.841Zm-.243 4.94a.388.388 0 1 1 .776 0 .388.388 0 0 1-.776 0Zm.388-1.638a1.638 1.638 0 1 0 0 3.276 1.638 1.638 0 0 0 0-3.276Zm-1.223 6.04a.625.625 0 1 0 .906.86l5.554-5.843a.625.625 0 1 0-.905-.861L4.763 11.59Zm5.25-.977a.388.388 0 1 0 0 .776.388.388 0 0 0 0-.776Zm-1.638.388a1.638 1.638 0 1 1 3.277 0 1.638 1.638 0 0 1-3.277 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name QualityScore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC41OTEgMi4wOWMwLS42MDIuNDg4LTEuMDkgMS4wOS0xLjA5aDQuNjM3Yy42MDIgMCAxLjA5LjQ4OCAxLjA5IDEuMDl2LjA0NGgxLjMxN2MxLjExNiAwIDIuMDIuOTA0IDIuMDIxIDIuMDJsLjAwNCA4LjgyNGEyLjAyMSAyLjAyMSAwIDAgMS0yLjAyMSAyLjAyM0gzLjI3NWEyLjAyMSAyLjAyMSAwIDAgMS0yLjAyMS0yLjAyTDEuMjUgNC4xNTVhMi4wMiAyLjAyIDAgMCAxIDIuMDIxLTIuMDIyaDEuMzJWMi4wOVptNi44MTcgMS4zMTd2LS4wMjNoMS4zMTdjLjQyNSAwIC43Ny4zNDUuNzcxLjc3bC4wMDQgOC44MjVhLjc3MS43NzEgMCAwIDEtLjc3MS43NzJIMy4yNzVhLjc3MS43NzEgMCAwIDEtLjc3MS0uNzcxTDIuNSA0LjE1NmMwLS40MjcuMzQ1LS43NzIuNzcxLS43NzJoMS4zMnYuMDIzYzAgLjYwMi40ODggMS4wOSAxLjA5IDEuMDloNC42MzdhMS4wOSAxLjA5IDAgMCAwIDEuMDktMS4wOVpNNS44NDEgMi4yNXYuOTk3aDQuMzE3VjIuMjVINS44NDFabS0uMjQzIDQuOTRhLjM4OC4zODggMCAxIDEgLjc3NiAwIC4zODguMzg4IDAgMCAxLS43NzYgMFptLjM4OC0xLjYzOGExLjYzOCAxLjYzOCAwIDEgMCAwIDMuMjc2IDEuNjM4IDEuNjM4IDAgMCAwIDAtMy4yNzZabS0xLjIyMyA2LjA0YS42MjUuNjI1IDAgMSAwIC45MDYuODZsNS41NTQtNS44NDNhLjYyNS42MjUgMCAxIDAtLjkwNS0uODYxTDQuNzYzIDExLjU5Wm01LjI1LS45NzdhLjM4OC4zODggMCAxIDAgMCAuNzc2LjM4OC4zODggMCAwIDAgMC0uNzc2Wm0tMS42MzguMzg4YTEuNjM4IDEuNjM4IDAgMSAxIDMuMjc3IDAgMS42MzggMS42MzggMCAwIDEtMy4yNzcgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
