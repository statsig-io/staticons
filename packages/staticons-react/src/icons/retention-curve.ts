
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4 3.876a.625.625 0 1 0-1.25 0v10.748c0 1.174.952 2.125 2.125 2.125h11.75a.625.625 0 1 0 0-1.25H4.875A.875.875 0 0 1 4 14.624V3.876Zm2.705.157a.625.625 0 0 0-1.25 0c0 .96.002 2.163.162 3.376.16 1.211.483 2.479 1.157 3.556.927 1.483 2.359 2.272 4.01 2.691 1.635.415 3.541.481 5.496.481a.625.625 0 1 0 0-1.25c-1.953 0-3.72-.07-5.189-.443-1.453-.368-2.555-1.018-3.257-2.142-.541-.865-.83-1.934-.978-3.057-.148-1.12-.15-2.245-.15-3.212Z","clip-rule":"evenodd"}]]

/**
 * @component @name RetentionCurve
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNCAzLjg3NmEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2MTAuNzQ4YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDExLjc1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg0Ljg3NUEuODc1Ljg3NSAwIDAgMSA0IDE0LjYyNFYzLjg3NlptMi43MDUuMTU3YS42MjUuNjI1IDAgMCAwLTEuMjUgMGMwIC45Ni4wMDIgMi4xNjMuMTYyIDMuMzc2LjE2IDEuMjExLjQ4MyAyLjQ3OSAxLjE1NyAzLjU1Ni45MjcgMS40ODMgMi4zNTkgMi4yNzIgNC4wMSAyLjY5MSAxLjYzNS40MTUgMy41NDEuNDgxIDUuNDk2LjQ4MWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVjLTEuOTUzIDAtMy43Mi0uMDctNS4xODktLjQ0My0xLjQ1My0uMzY4LTIuNTU1LTEuMDE4LTMuMjU3LTIuMTQyLS41NDEtLjg2NS0uODMtMS45MzQtLjk3OC0zLjA1Ny0uMTQ4LTEuMTItLjE1LTIuMjQ1LS4xNS0zLjIxMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RetentionCurve = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention-curve',
        'staticon-RetentionCurve',
        className
      ),
      ...props,
    })
);
RetentionCurve.displayName = 'RetentionCurve'

export default RetentionCurve;
