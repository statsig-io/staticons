
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.127 6.25A.25.25 0 0 0 18.85 6l-9.004.927a.25.25 0 0 0-.224.25v9.309a3.113 3.113 0 0 1-.915 2.1 3.125 3.125 0 1 1-.585-4.88v-6.53a1.75 1.75 0 0 1 1.57-1.74l9.004-.927a1.75 1.75 0 0 1 1.93 1.74v8.858a3.125 3.125 0 1 1-1.5-2.631V6.25ZM8.123 16.348a1.625 1.625 0 1 0 0 .056v-.056Zm11.004-1.207v-.023a1.625 1.625 0 1 0 0 .04v-.017Z","clip-rule":"evenodd"}]]

/**
 * @component @name MusicNote
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTI3IDYuMjVBLjI1LjI1IDAgMCAwIDE4Ljg1IDZsLTkuMDA0LjkyN2EuMjUuMjUgMCAwIDAtLjIyNC4yNXY5LjMwOWEzLjExMyAzLjExMyAwIDAgMS0uOTE1IDIuMSAzLjEyNSAzLjEyNSAwIDEgMS0uNTg1LTQuODh2LTYuNTNhMS43NSAxLjc1IDAgMCAxIDEuNTctMS43NGw5LjAwNC0uOTI3YTEuNzUgMS43NSAwIDAgMSAxLjkzIDEuNzR2OC44NThhMy4xMjUgMy4xMjUgMCAxIDEtMS41LTIuNjMxVjYuMjVaTTguMTIzIDE2LjM0OGExLjYyNSAxLjYyNSAwIDEgMCAwIC4wNTZ2LS4wNTZabTExLjAwNC0xLjIwN3YtLjAyM2ExLjYyNSAxLjYyNSAwIDEgMCAwIC4wNHYtLjAxN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const MusicNote = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-music-note',
        'staticon-MusicNote',
        className
      ),
      ...props,
    })
);
MusicNote.displayName = 'MusicNote'

export default MusicNote;
