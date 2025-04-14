
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Z","clip-rule":"evenodd"}],["path",{"fill-rule":"evenodd","d":"M10.652 13.963a.65.65 0 1 1-1.3 0V9.282a.65.65 0 0 1 1.3 0v4.681ZM10 7.391a1.002 1.002 0 1 1 .002-2.003A1.002 1.002 0 0 1 10 7.39Z","clip-rule":"evenodd"}]]

/**
 * @component @name Info
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNlptMCAxLjI1YTYuNzUgNi43NSAwIDEgMSAwIDEzLjUgNi43NSA2Ljc1IDAgMCAxIDAtMTMuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjY1MiAxMy45NjNhLjY1LjY1IDAgMSAxLTEuMyAwVjkuMjgyYS42NS42NSAwIDAgMSAxLjMgMHY0LjY4MVpNMTAgNy4zOTFhMS4wMDIgMS4wMDIgMCAxIDEgLjAwMi0yLjAwM0ExLjAwMiAxLjAwMiAwIDAgMSAxMCA3LjM5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Info = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-info',
        'staticon-Info',
        className
      ),
      ...props,
    })
);
Info.displayName = 'Info'

export default Info;
