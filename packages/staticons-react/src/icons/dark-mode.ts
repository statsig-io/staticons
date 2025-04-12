
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.055 2.807a5.485 5.485 0 0 0 2.05 10.57 5.485 5.485 0 0 0 5.088-3.433 5.438 5.438 0 0 1-7.138-7.137Zm1.308-.974c.19.302.23.719.03 1.082a4.188 4.188 0 0 0 5.693 5.692 1.064 1.064 0 0 1 1.081.03c.318.2.555.605.422 1.08a6.733 6.733 0 1 1-8.306-8.305.957.957 0 0 1 1.08.42Z","clip-rule":"evenodd"}]]

/**
 * @component @name DarkMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wNTUgMi44MDdhNS40ODUgNS40ODUgMCAwIDAgMi4wNSAxMC41NyA1LjQ4NSA1LjQ4NSAwIDAgMCA1LjA4OC0zLjQzMyA1LjQzOCA1LjQzOCAwIDAgMS03LjEzOC03LjEzN1ptMS4zMDgtLjk3NGMuMTkuMzAyLjIzLjcxOS4wMyAxLjA4MmE0LjE4OCA0LjE4OCAwIDAgMCA1LjY5MyA1LjY5MiAxLjA2NCAxLjA2NCAwIDAgMSAxLjA4MS4wM2MuMzE4LjIuNTU1LjYwNS40MjIgMS4wOGE2LjczMyA2LjczMyAwIDEgMS04LjMwNi04LjMwNS45NTcuOTU3IDAgMCAxIDEuMDguNDJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DarkMode = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dark-mode',
        'staticon-DarkMode',
        className
      ),
      ...props,
    })
);
DarkMode.displayName = 'DarkMode'

export default DarkMode;
