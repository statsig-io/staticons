
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.625 4.896a2.271 2.271 0 1 1 4.543 0 2.271 2.271 0 0 1-4.543 0Zm2.272-1.021a1.021 1.021 0 1 0 0 2.043 1.021 1.021 0 0 0 0-2.043Z","clip-rule":"evenodd"}],["path",{"fill":"#000","d":"M3.057 13.203a.625.625 0 0 1-.023-.884l9.027-9.496a.625.625 0 0 1 .906.862L3.94 13.18a.625.625 0 0 1-.883.023Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.103 8.827a2.271 2.271 0 1 0 0 4.543 2.271 2.271 0 0 0 0-4.543Zm-1.021 2.271a1.021 1.021 0 1 1 2.042 0 1.021 1.021 0 0 1-2.042 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Percentage
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjUgNC44OTZhMi4yNzEgMi4yNzEgMCAxIDEgNC41NDMgMCAyLjI3MSAyLjI3MSAwIDAgMS00LjU0MyAwWm0yLjI3Mi0xLjAyMWExLjAyMSAxLjAyMSAwIDEgMCAwIDIuMDQzIDEuMDIxIDEuMDIxIDAgMCAwIDAtMi4wNDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMy4wNTcgMTMuMjAzYS42MjUuNjI1IDAgMCAxLS4wMjMtLjg4NGw5LjAyNy05LjQ5NmEuNjI1LjYyNSAwIDAgMSAuOTA2Ljg2MkwzLjk0IDEzLjE4YS42MjUuNjI1IDAgMCAxLS44ODMuMDIzWiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjEwMyA4LjgyN2EyLjI3MSAyLjI3MSAwIDEgMCAwIDQuNTQzIDIuMjcxIDIuMjcxIDAgMCAwIDAtNC41NDNabS0xLjAyMSAyLjI3MWExLjAyMSAxLjAyMSAwIDEgMSAyLjA0MiAwIDEuMDIxIDEuMDIxIDAgMCAxLTIuMDQyIDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Percentage = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-percentage',
        'staticon-Percentage',
        className
      ),
      ...props,
    })
);
Percentage.displayName = 'Percentage'

export default Percentage;
