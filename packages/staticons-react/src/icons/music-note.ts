
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.247 4.765v5.653a2.673 2.673 0 1 0 1.25 2.156V4.627c0-.665-.574-1.185-1.236-1.12l-8.652.86a1.125 1.125 0 0 0-1.013 1.12v6.076a2.673 2.673 0 1 0 1.25 2.274V5.6l8.401-.835Zm-.414 6.911c.257.258.396.59.414.927v.092l.001.039a1.422 1.422 0 1 1-.415-1.058ZM4.168 12.82a1.422 1.422 0 1 1 2.01 2.01 1.422 1.422 0 0 1-2.01-2.01Z","clip-rule":"evenodd"}]]

/**
 * @component @name MusicNote
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMjQ3IDQuNzY1djUuNjUzYTIuNjczIDIuNjczIDAgMSAwIDEuMjUgMi4xNTZWNC42MjdjMC0uNjY1LS41NzQtMS4xODUtMS4yMzYtMS4xMmwtOC42NTIuODZhMS4xMjUgMS4xMjUgMCAwIDAtMS4wMTMgMS4xMnY2LjA3NmEyLjY3MyAyLjY3MyAwIDEgMCAxLjI1IDIuMjc0VjUuNmw4LjQwMS0uODM1Wm0tLjQxNCA2LjkxMWMuMjU3LjI1OC4zOTYuNTkuNDE0LjkyN3YuMDkybC4wMDEuMDM5YTEuNDIyIDEuNDIyIDAgMSAxLS40MTUtMS4wNThaTTQuMTY4IDEyLjgyYTEuNDIyIDEuNDIyIDAgMSAxIDIuMDEgMi4wMSAxLjQyMiAxLjQyMiAwIDAgMS0yLjAxLTIuMDFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
