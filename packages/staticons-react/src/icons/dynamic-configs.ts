
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.07 1.249c-1.209 0-2.188.98-2.188 2.188v.996A3.165 3.165 0 0 1 .789 7.411a.625.625 0 0 0 0 1.178 3.165 3.165 0 0 1 2.093 2.977v.997c0 1.208.98 2.187 2.187 2.187h.368c.122 0 .244-.01.365-.03l.298-.05a.625.625 0 0 0-.209-1.233l-.298.05a.942.942 0 0 1-.156.013H5.07a.938.938 0 0 1-.937-.937v-.997c0-1.434-.694-2.75-1.813-3.566a4.415 4.415 0 0 0 1.813-3.567v-.996c0-.518.42-.938.937-.938h.368c.052 0 .105.004.156.013l.298.05A.625.625 0 1 0 6.1 1.33l-.298-.05a2.23 2.23 0 0 0-.365-.031H5.07Zm8.048 2.188c0-1.209-.98-2.188-2.188-2.188h-.367c-.122 0-.245.01-.365.03L9.9 1.33a.625.625 0 1 0 .208 1.233l.298-.05a.938.938 0 0 1 .157-.014h.367c.518 0 .938.42.938.938v.996c0 1.434.693 2.75 1.813 3.566a4.415 4.415 0 0 0-1.813 3.567v.996c0 .518-.42.938-.938.938h-.367a.942.942 0 0 1-.157-.013l-.298-.05a.625.625 0 1 0-.208 1.232l.298.05c.12.02.243.03.365.03h.367a2.187 2.187 0 0 0 2.188-2.187v-.996c0-1.335.838-2.526 2.093-2.978a.625.625 0 0 0 0-1.177 3.165 3.165 0 0 1-2.093-2.978v-.996Z","clip-rule":"evenodd"}]]

/**
 * @component @name DynamicConfigs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4wNyAxLjI0OWMtMS4yMDkgMC0yLjE4OC45OC0yLjE4OCAyLjE4OHYuOTk2QTMuMTY1IDMuMTY1IDAgMCAxIC43ODkgNy40MTFhLjYyNS42MjUgMCAwIDAgMCAxLjE3OCAzLjE2NSAzLjE2NSAwIDAgMSAyLjA5MyAyLjk3N3YuOTk3YzAgMS4yMDguOTggMi4xODcgMi4xODcgMi4xODdoLjM2OGMuMTIyIDAgLjI0NC0uMDEuMzY1LS4wM2wuMjk4LS4wNWEuNjI1LjYyNSAwIDAgMC0uMjA5LTEuMjMzbC0uMjk4LjA1YS45NDIuOTQyIDAgMCAxLS4xNTYuMDEzSDUuMDdhLjkzOC45MzggMCAwIDEtLjkzNy0uOTM3di0uOTk3YzAtMS40MzQtLjY5NC0yLjc1LTEuODEzLTMuNTY2YTQuNDE1IDQuNDE1IDAgMCAwIDEuODEzLTMuNTY3di0uOTk2YzAtLjUxOC40Mi0uOTM4LjkzNy0uOTM4aC4zNjhjLjA1MiAwIC4xMDUuMDA0LjE1Ni4wMTNsLjI5OC4wNUEuNjI1LjYyNSAwIDEgMCA2LjEgMS4zM2wtLjI5OC0uMDVhMi4yMyAyLjIzIDAgMCAwLS4zNjUtLjAzMUg1LjA3Wm04LjA0OCAyLjE4OGMwLTEuMjA5LS45OC0yLjE4OC0yLjE4OC0yLjE4OGgtLjM2N2MtLjEyMiAwLS4yNDUuMDEtLjM2NS4wM0w5LjkgMS4zM2EuNjI1LjYyNSAwIDEgMCAuMjA4IDEuMjMzbC4yOTgtLjA1YS45MzguOTM4IDAgMCAxIC4xNTctLjAxNGguMzY3Yy41MTggMCAuOTM4LjQyLjkzOC45Mzh2Ljk5NmMwIDEuNDM0LjY5MyAyLjc1IDEuODEzIDMuNTY2YTQuNDE1IDQuNDE1IDAgMCAwLTEuODEzIDMuNTY3di45OTZjMCAuNTE4LS40Mi45MzgtLjkzOC45MzhoLS4zNjdhLjk0Mi45NDIgMCAwIDEtLjE1Ny0uMDEzbC0uMjk4LS4wNWEuNjI1LjYyNSAwIDEgMC0uMjA4IDEuMjMybC4yOTguMDVjLjEyLjAyLjI0My4wMy4zNjUuMDNoLjM2N2EyLjE4NyAyLjE4NyAwIDAgMCAyLjE4OC0yLjE4N3YtLjk5NmMwLTEuMzM1LjgzOC0yLjUyNiAyLjA5My0yLjk3OGEuNjI1LjYyNSAwIDAgMCAwLTEuMTc3IDMuMTY1IDMuMTY1IDAgMCAxLTIuMDkzLTIuOTc4di0uOTk2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DynamicConfigs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dynamic-configs',
        'staticon-DynamicConfigs',
        className
      ),
      ...props,
    })
);
DynamicConfigs.displayName = 'DynamicConfigs'

export default DynamicConfigs;
