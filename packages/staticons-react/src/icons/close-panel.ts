
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.652 17.5A2.152 2.152 0 0 1 2.5 15.348V4.65c0-1.188.964-2.152 2.152-2.152h10.696c1.188 0 2.152.964 2.152 2.152v10.698a2.152 2.152 0 0 1-2.152 2.152H4.652Zm-.848-2.152c0 .469.38.848.848.848h7.741V3.802h-7.74a.848.848 0 0 0-.849.848v10.698Zm9.893-11.546v12.394h1.65c.47 0 .849-.38.849-.848V4.65a.848.848 0 0 0-.848-.848h-1.65Zm-7.152 3.42a.652.652 0 0 1 .92-.07l2.518 2.163a.902.902 0 0 1 0 1.369l-2.519 2.163a.652.652 0 0 1-.85-.99L8.778 10 6.614 8.141a.652.652 0 0 1-.07-.92Z","clip-rule":"evenodd"}]]

/**
 * @component @name ClosePanel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NTIgMTcuNUEyLjE1MiAyLjE1MiAwIDAgMSAyLjUgMTUuMzQ4VjQuNjVjMC0xLjE4OC45NjQtMi4xNTIgMi4xNTItMi4xNTJoMTAuNjk2YzEuMTg4IDAgMi4xNTIuOTY0IDIuMTUyIDIuMTUydjEwLjY5OGEyLjE1MiAyLjE1MiAwIDAgMS0yLjE1MiAyLjE1Mkg0LjY1MlptLS44NDgtMi4xNTJjMCAuNDY5LjM4Ljg0OC44NDguODQ4aDcuNzQxVjMuODAyaC03Ljc0YS44NDguODQ4IDAgMCAwLS44NDkuODQ4djEwLjY5OFptOS44OTMtMTEuNTQ2djEyLjM5NGgxLjY1Yy40NyAwIC44NDktLjM4Ljg0OS0uODQ4VjQuNjVhLjg0OC44NDggMCAwIDAtLjg0OC0uODQ4aC0xLjY1Wm0tNy4xNTIgMy40MmEuNjUyLjY1MiAwIDAgMSAuOTItLjA3bDIuNTE4IDIuMTYzYS45MDIuOTAyIDAgMCAxIDAgMS4zNjlsLTIuNTE5IDIuMTYzYS42NTIuNjUyIDAgMCAxLS44NS0uOTlMOC43NzggMTAgNi42MTQgOC4xNDFhLjY1Mi42NTIgMCAwIDEtLjA3LS45MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ClosePanel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-close-panel',
        'staticon-ClosePanel',
        className
      ),
      ...props,
    })
);
ClosePanel.displayName = 'ClosePanel'

export default ClosePanel;
