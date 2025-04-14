
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.088 8.92 10.921 10l1.167 1.079c.85.734 1.602 1.293 2.402 1.293 1.227 0 2.261-1.04 2.261-2.372 0-1.333-1.034-2.373-2.26-2.373-.801 0-1.553.56-2.403 1.293ZM10 10.85l1.247 1.154.008.007.008.007c.793.686 1.889 1.604 3.227 1.604 1.961 0 3.511-1.644 3.511-3.622s-1.55-3.623-3.51-3.623c-1.34 0-2.435.918-3.228 1.605l-.008.006-.008.007L10 9.148 8.753 7.995l-.008-.007-.007-.006c-.794-.687-1.889-1.605-3.228-1.605C3.55 6.377 2 8.022 2 10c0 1.978 1.55 3.622 3.51 3.622 1.339 0 2.434-.918 3.228-1.604l.007-.007.008-.007L10 10.85ZM9.08 10l-1.168 1.079c-.85.734-1.601 1.293-2.402 1.293-1.226 0-2.26-1.04-2.26-2.372 0-1.333 1.034-2.373 2.26-2.373.801 0 1.553.56 2.402 1.293L9.08 10Z","clip-rule":"evenodd"}]]

/**
 * @component @name Infinity
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDg4IDguOTIgMTAuOTIxIDEwbDEuMTY3IDEuMDc5Yy44NS43MzQgMS42MDIgMS4yOTMgMi40MDIgMS4yOTMgMS4yMjcgMCAyLjI2MS0xLjA0IDIuMjYxLTIuMzcyIDAtMS4zMzMtMS4wMzQtMi4zNzMtMi4yNi0yLjM3My0uODAxIDAtMS41NTMuNTYtMi40MDMgMS4yOTNaTTEwIDEwLjg1bDEuMjQ3IDEuMTU0LjAwOC4wMDcuMDA4LjAwN2MuNzkzLjY4NiAxLjg4OSAxLjYwNCAzLjIyNyAxLjYwNCAxLjk2MSAwIDMuNTExLTEuNjQ0IDMuNTExLTMuNjIycy0xLjU1LTMuNjIzLTMuNTEtMy42MjNjLTEuMzQgMC0yLjQzNS45MTgtMy4yMjggMS42MDVsLS4wMDguMDA2LS4wMDguMDA3TDEwIDkuMTQ4IDguNzUzIDcuOTk1bC0uMDA4LS4wMDctLjAwNy0uMDA2Yy0uNzk0LS42ODctMS44ODktMS42MDUtMy4yMjgtMS42MDVDMy41NSA2LjM3NyAyIDguMDIyIDIgMTBjMCAxLjk3OCAxLjU1IDMuNjIyIDMuNTEgMy42MjIgMS4zMzkgMCAyLjQzNC0uOTE4IDMuMjI4LTEuNjA0bC4wMDctLjAwNy4wMDgtLjAwN0wxMCAxMC44NVpNOS4wOCAxMGwtMS4xNjggMS4wNzljLS44NS43MzQtMS42MDEgMS4yOTMtMi40MDIgMS4yOTMtMS4yMjYgMC0yLjI2LTEuMDQtMi4yNi0yLjM3MiAwLTEuMzMzIDEuMDM0LTIuMzczIDIuMjYtMi4zNzMuODAxIDAgMS41NTMuNTYgMi40MDIgMS4yOTNMOS4wOCAxMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Infinity = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-infinity',
        'staticon-Infinity',
        className
      ),
      ...props,
    })
);
Infinity.displayName = 'Infinity'

export default Infinity;
