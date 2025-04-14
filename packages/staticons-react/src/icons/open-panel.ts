
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.652 17.5A2.152 2.152 0 0 1 2.5 15.348V4.65c0-1.188.964-2.152 2.152-2.152h10.696c1.188 0 2.152.964 2.152 2.152v10.698a2.152 2.152 0 0 1-2.152 2.152H4.652Zm-.848-2.152c0 .469.38.848.848.848h7.741V3.802h-7.74a.848.848 0 0 0-.849.848v10.698Zm9.893-11.546v12.394h1.65c.47 0 .849-.38.849-.848V4.65a.848.848 0 0 0-.848-.848h-1.65Zm-3.703 3.42a.652.652 0 0 0-.92-.07L6.556 9.315a.902.902 0 0 0 0 1.369l2.518 2.163a.652.652 0 1 0 .85-.99L7.761 10l2.163-1.858a.652.652 0 0 0 .07-.92Z","clip-rule":"evenodd"}]]

/**
 * @component @name OpenPanel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NTIgMTcuNUEyLjE1MiAyLjE1MiAwIDAgMSAyLjUgMTUuMzQ4VjQuNjVjMC0xLjE4OC45NjQtMi4xNTIgMi4xNTItMi4xNTJoMTAuNjk2YzEuMTg4IDAgMi4xNTIuOTY0IDIuMTUyIDIuMTUydjEwLjY5OGEyLjE1MiAyLjE1MiAwIDAgMS0yLjE1MiAyLjE1Mkg0LjY1MlptLS44NDgtMi4xNTJjMCAuNDY5LjM4Ljg0OC44NDguODQ4aDcuNzQxVjMuODAyaC03Ljc0YS44NDguODQ4IDAgMCAwLS44NDkuODQ4djEwLjY5OFptOS44OTMtMTEuNTQ2djEyLjM5NGgxLjY1Yy40NyAwIC44NDktLjM4Ljg0OS0uODQ4VjQuNjVhLjg0OC44NDggMCAwIDAtLjg0OC0uODQ4aC0xLjY1Wm0tMy43MDMgMy40MmEuNjUyLjY1MiAwIDAgMC0uOTItLjA3TDYuNTU2IDkuMzE1YS45MDIuOTAyIDAgMCAwIDAgMS4zNjlsMi41MTggMi4xNjNhLjY1Mi42NTIgMCAxIDAgLjg1LS45OUw3Ljc2MSAxMGwyLjE2My0xLjg1OGEuNjUyLjY1MiAwIDAgMCAuMDctLjkyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const OpenPanel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-open-panel',
        'staticon-OpenPanel',
        className
      ),
      ...props,
    })
);
OpenPanel.displayName = 'OpenPanel'

export default OpenPanel;
