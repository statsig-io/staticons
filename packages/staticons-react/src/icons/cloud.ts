
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.446 6.174A4.507 4.507 0 0 1 7.878 2.5c2.422 0 4.43 1.922 4.506 4.35l.019.598.298.022a3.019 3.019 0 0 1-.22 6.03H3.924a3.424 3.424 0 0 1-.687-6.778l.112-.023.097-.525Zm4.432-2.502a3.336 3.336 0 0 0-3.28 2.716l-.136.734a.856.856 0 0 1-.67.682l-.32.066a2.252 2.252 0 0 0 .452 4.458h8.557a1.847 1.847 0 0 0 .135-3.69l-.595-.043a.842.842 0 0 1-.78-.813l-.028-.895c-.056-1.789-1.54-3.215-3.335-3.215Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cloud
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy40NDYgNi4xNzRBNC41MDcgNC41MDcgMCAwIDEgNy44NzggMi41YzIuNDIyIDAgNC40MyAxLjkyMiA0LjUwNiA0LjM1bC4wMTkuNTk4LjI5OC4wMjJhMy4wMTkgMy4wMTkgMCAwIDEtLjIyIDYuMDNIMy45MjRhMy40MjQgMy40MjQgMCAwIDEtLjY4Ny02Ljc3OGwuMTEyLS4wMjMuMDk3LS41MjVabTQuNDMyLTIuNTAyYTMuMzM2IDMuMzM2IDAgMCAwLTMuMjggMi43MTZsLS4xMzYuNzM0YS44NTYuODU2IDAgMCAxLS42Ny42ODJsLS4zMi4wNjZhMi4yNTIgMi4yNTIgMCAwIDAgLjQ1MiA0LjQ1OGg4LjU1N2ExLjg0NyAxLjg0NyAwIDAgMCAuMTM1LTMuNjlsLS41OTUtLjA0M2EuODQyLjg0MiAwIDAgMS0uNzgtLjgxM2wtLjAyOC0uODk1Yy0uMDU2LTEuNzg5LTEuNTQtMy4yMTUtMy4zMzUtMy4yMTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cloud = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cloud',
        'staticon-Cloud',
        className
      ),
      ...props,
    })
);
Cloud.displayName = 'Cloud'

export default Cloud;
