
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.992 2.393c-.384-.857-1.6-.857-1.983 0L4.543 7.905 3.26 10.773a.625.625 0 0 0 1.142.51l1.117-2.498h4.962l1.118 2.498a.625.625 0 0 0 1.14-.51l-1.282-2.868-2.465-5.512ZM8 3.238l1.922 4.297H6.078L8 3.238ZM2.751 13a.625.625 0 0 0 0 1.25h10.498a.625.625 0 1 0 0-1.25H2.751Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorText
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45OTIgMi4zOTNjLS4zODQtLjg1Ny0xLjYtLjg1Ny0xLjk4MyAwTDQuNTQzIDcuOTA1IDMuMjYgMTAuNzczYS42MjUuNjI1IDAgMCAwIDEuMTQyLjUxbDEuMTE3LTIuNDk4aDQuOTYybDEuMTE4IDIuNDk4YS42MjUuNjI1IDAgMCAwIDEuMTQtLjUxbC0xLjI4Mi0yLjg2OC0yLjQ2NS01LjUxMlpNOCAzLjIzOGwxLjkyMiA0LjI5N0g2LjA3OEw4IDMuMjM4Wk0yLjc1MSAxM2EuNjI1LjYyNSAwIDAgMCAwIDEuMjVoMTAuNDk4YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgyLjc1MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorText = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-text',
        'staticon-FormatColorText',
        className
      ),
      ...props,
    })
);
FormatColorText.displayName = 'FormatColorText'

export default FormatColorText;
