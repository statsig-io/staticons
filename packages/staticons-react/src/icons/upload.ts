
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.505 5.644a.615.615 0 0 1 0-.878l3.338-3.293a1.652 1.652 0 0 1 2.314 0l3.338 3.293a.615.615 0 0 1 0 .878.635.635 0 0 1-.89 0l-2.98-2.94v7.667a.625.625 0 1 1-1.25 0V2.704l-2.98 2.94a.635.635 0 0 1-.89 0Zm-.379 7.607a.625.625 0 0 1-.625-.625V8.723a.625.625 0 0 0-1.25 0v3.903c0 1.036.84 1.875 1.875 1.875h9.748c1.035 0 1.875-.84 1.875-1.875V8.723a.625.625 0 1 0-1.25 0v3.903c0 .345-.28.625-.625.625H3.126Z","clip-rule":"evenodd"}]]

/**
 * @component @name Upload
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41MDUgNS42NDRhLjYxNS42MTUgMCAwIDEgMC0uODc4bDMuMzM4LTMuMjkzYTEuNjUyIDEuNjUyIDAgMCAxIDIuMzE0IDBsMy4zMzggMy4yOTNhLjYxNS42MTUgMCAwIDEgMCAuODc4LjYzNS42MzUgMCAwIDEtLjg5IDBsLTIuOTgtMi45NHY3LjY2N2EuNjI1LjYyNSAwIDEgMS0xLjI1IDBWMi43MDRsLTIuOTggMi45NGEuNjM1LjYzNSAwIDAgMS0uODkgMFptLS4zNzkgNy42MDdhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1VjguNzIzYS42MjUuNjI1IDAgMCAwLTEuMjUgMHYzLjkwM2MwIDEuMDM2Ljg0IDEuODc1IDEuODc1IDEuODc1aDkuNzQ4YzEuMDM1IDAgMS44NzUtLjg0IDEuODc1LTEuODc1VjguNzIzYS42MjUuNjI1IDAgMSAwLTEuMjUgMHYzLjkwM2MwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgzLjEyNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upload = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upload',
        'staticon-Upload',
        className
      ),
      ...props,
    })
);
Upload.displayName = 'Upload'

export default Upload;
