
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.419 2.294a.625.625 0 0 0-1.25 0v10.25c0 1.035.84 1.874 1.875 1.874h11.252a.625.625 0 1 0 0-1.25H3.044a.625.625 0 0 1-.625-.625V2.294Zm12.034 2.023a.625.625 0 1 0-1.209-.32l-.12.471c-.156.618-.341 1.353-.606 2.032-.166.426-.352.797-.559 1.078-.208.282-.407.433-.589.494a.944.944 0 0 1-.755-.039c-.272-.133-.62-.438-1.004-1.085-.45-.757-.936-1.288-1.491-1.573-.583-.299-1.165-.288-1.702-.11-.495.166-.882.524-1.182.912-.303.392-.553.863-.76 1.333-.381.864-.653 1.812-.83 2.435l-.046.156a.625.625 0 0 0 1.202.346l.043-.151c.181-.632.43-1.5.774-2.282.186-.421.389-.792.606-1.073.221-.286.421-.434.588-.49.276-.091.503-.083.736.036.26.134.597.442.987 1.1.455.766.961 1.29 1.53 1.569a2.191 2.191 0 0 0 1.7.102c.513-.171.904-.537 1.2-.939.297-.404.53-.886.717-1.365.296-.761.507-1.6.663-2.22.039-.154.074-.294.107-.417Z","clip-rule":"evenodd"}]]

/**
 * @component @name Chart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi40MTkgMi4yOTRhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjEwLjI1YzAgMS4wMzUuODQgMS44NzQgMS44NzUgMS44NzRoMTEuMjUyYS42MjUuNjI1IDAgMSAwIDAtMS4yNUgzLjA0NGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWMi4yOTRabTEyLjAzNCAyLjAyM2EuNjI1LjYyNSAwIDEgMC0xLjIwOS0uMzJsLS4xMi40NzFjLS4xNTYuNjE4LS4zNDEgMS4zNTMtLjYwNiAyLjAzMi0uMTY2LjQyNi0uMzUyLjc5Ny0uNTU5IDEuMDc4LS4yMDguMjgyLS40MDcuNDMzLS41ODkuNDk0YS45NDQuOTQ0IDAgMCAxLS43NTUtLjAzOWMtLjI3Mi0uMTMzLS42Mi0uNDM4LTEuMDA0LTEuMDg1LS40NS0uNzU3LS45MzYtMS4yODgtMS40OTEtMS41NzMtLjU4My0uMjk5LTEuMTY1LS4yODgtMS43MDItLjExLS40OTUuMTY2LS44ODIuNTI0LTEuMTgyLjkxMi0uMzAzLjM5Mi0uNTUzLjg2My0uNzYgMS4zMzMtLjM4MS44NjQtLjY1MyAxLjgxMi0uODMgMi40MzVsLS4wNDYuMTU2YS42MjUuNjI1IDAgMCAwIDEuMjAyLjM0NmwuMDQzLS4xNTFjLjE4MS0uNjMyLjQzLTEuNS43NzQtMi4yODIuMTg2LS40MjEuMzg5LS43OTIuNjA2LTEuMDczLjIyMS0uMjg2LjQyMS0uNDM0LjU4OC0uNDkuMjc2LS4wOTEuNTAzLS4wODMuNzM2LjAzNi4yNi4xMzQuNTk3LjQ0Mi45ODcgMS4xLjQ1NS43NjYuOTYxIDEuMjkgMS41MyAxLjU2OWEyLjE5MSAyLjE5MSAwIDAgMCAxLjcuMTAyYy41MTMtLjE3MS45MDQtLjUzNyAxLjItLjkzOS4yOTctLjQwNC41My0uODg2LjcxNy0xLjM2NS4yOTYtLjc2MS41MDctMS42LjY2My0yLjIyLjAzOS0uMTU0LjA3NC0uMjk0LjEwNy0uNDE3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Chart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chart',
        'staticon-Chart',
        className
      ),
      ...props,
    })
);
Chart.displayName = 'Chart'

export default Chart;
