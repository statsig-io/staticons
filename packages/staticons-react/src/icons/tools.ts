
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.809 7.174c-.224 1.267.2 2.7 1.177 3.677a3.881 3.881 0 0 0 4.241.839 1.164 1.164 0 0 1 1.307.277l3.549 3.877a1.247 1.247 0 1 0 1.76-1.765l-3.88-3.54a1.166 1.166 0 0 1-.278-1.309 3.886 3.886 0 0 0-.838-4.243C9.87 4.01 8.437 3.586 7.172 3.81l2.217 2.218a.877.877 0 0 1 .23.829L9.2 8.563a.876.876 0 0 1-.64.641l-1.705.42a.876.876 0 0 1-.829-.232L3.809 7.174Zm-1.005-1.06c.235-.63 1.005-.711 1.417-.3l2.54 2.543 1.278-.315.314-1.278-2.54-2.542c-.412-.412-.331-1.183.3-1.418 1.874-.698 4.149-.174 5.62 1.297a5.14 5.14 0 0 1 1.128 5.562l3.826 3.49a2.502 2.502 0 0 1 .083 3.617 2.499 2.499 0 0 1-3.61-.08l-3.5-3.824a5.133 5.133 0 0 1-5.56-1.129C2.63 10.266 2.106 7.99 2.804 6.115Z","clip-rule":"evenodd"}]]

/**
 * @component @name Tools
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy44MDkgNy4xNzRjLS4yMjQgMS4yNjcuMiAyLjcgMS4xNzcgMy42NzdhMy44ODEgMy44ODEgMCAwIDAgNC4yNDEuODM5IDEuMTY0IDEuMTY0IDAgMCAxIDEuMzA3LjI3N2wzLjU0OSAzLjg3N2ExLjI0NyAxLjI0NyAwIDEgMCAxLjc2LTEuNzY1bC0zLjg4LTMuNTRhMS4xNjYgMS4xNjYgMCAwIDEtLjI3OC0xLjMwOSAzLjg4NiAzLjg4NiAwIDAgMC0uODM4LTQuMjQzQzkuODcgNC4wMSA4LjQzNyAzLjU4NiA3LjE3MiAzLjgxbDIuMjE3IDIuMjE4YS44NzcuODc3IDAgMCAxIC4yMy44MjlMOS4yIDguNTYzYS44NzYuODc2IDAgMCAxLS42NC42NDFsLTEuNzA1LjQyYS44NzYuODc2IDAgMCAxLS44MjktLjIzMkwzLjgwOSA3LjE3NFptLTEuMDA1LTEuMDZjLjIzNS0uNjMgMS4wMDUtLjcxMSAxLjQxNy0uM2wyLjU0IDIuNTQzIDEuMjc4LS4zMTUuMzE0LTEuMjc4LTIuNTQtMi41NDJjLS40MTItLjQxMi0uMzMxLTEuMTgzLjMtMS40MTggMS44NzQtLjY5OCA0LjE0OS0uMTc0IDUuNjIgMS4yOTdhNS4xNCA1LjE0IDAgMCAxIDEuMTI4IDUuNTYybDMuODI2IDMuNDlhMi41MDIgMi41MDIgMCAwIDEgLjA4MyAzLjYxNyAyLjQ5OSAyLjQ5OSAwIDAgMS0zLjYxLS4wOGwtMy41LTMuODI0YTUuMTMzIDUuMTMzIDAgMCAxLTUuNTYtMS4xMjlDMi42MyAxMC4yNjYgMi4xMDYgNy45OSAyLjgwNCA2LjExNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Tools = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-tools',
        'staticon-Tools',
        className
      ),
      ...props,
    })
);
Tools.displayName = 'Tools'

export default Tools;
