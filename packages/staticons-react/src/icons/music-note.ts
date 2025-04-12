
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.626 3.264v4.993a2.487 2.487 0 1 0 1.25 2.11v-7.24c0-.667-.576-1.187-1.239-1.12l-7.778.786a1.125 1.125 0 0 0-1.011 1.12v5.442a2.487 2.487 0 1 0 1.25 2.095V4.026l7.528-.762Zm-.362 6.277c.233.232.353.535.362.84v.03a1.232 1.232 0 0 1-.362.878 1.236 1.236 0 1 1 0-1.748ZM2.736 10.638a1.236 1.236 0 1 1 1.748 1.748 1.236 1.236 0 0 1-1.748-1.748Z","clip-rule":"evenodd"}]]

/**
 * @component @name MusicNote
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNjI2IDMuMjY0djQuOTkzYTIuNDg3IDIuNDg3IDAgMSAwIDEuMjUgMi4xMXYtNy4yNGMwLS42NjctLjU3Ni0xLjE4Ny0xLjIzOS0xLjEybC03Ljc3OC43ODZhMS4xMjUgMS4xMjUgMCAwIDAtMS4wMTEgMS4xMnY1LjQ0MmEyLjQ4NyAyLjQ4NyAwIDEgMCAxLjI1IDIuMDk1VjQuMDI2bDcuNTI4LS43NjJabS0uMzYyIDYuMjc3Yy4yMzMuMjMyLjM1My41MzUuMzYyLjg0di4wM2ExLjIzMiAxLjIzMiAwIDAgMS0uMzYyLjg3OCAxLjIzNiAxLjIzNiAwIDEgMSAwLTEuNzQ4Wk0yLjczNiAxMC42MzhhMS4yMzYgMS4yMzYgMCAxIDEgMS43NDggMS43NDggMS4yMzYgMS4yMzYgMCAwIDEtMS43NDgtMS43NDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
