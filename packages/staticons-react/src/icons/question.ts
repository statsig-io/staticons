
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","d":"M12.002 8.528c-1.025 0-1.696.71-1.772 1.423a.75.75 0 0 1-1.491-.16c.162-1.517 1.514-2.763 3.263-2.763.83 0 1.621.235 2.227.72.62.497 1.002 1.224 1.034 2.096.026.69-.162 1.257-.493 1.725-.317.447-.741.772-1.13 1.03-.597.397-.89.861-.89 1.401a.75.75 0 0 1-1.5 0c0-1.202.698-2.077 1.56-2.65.34-.226.58-.427.735-.647.14-.2.233-.442.22-.804-.017-.437-.196-.757-.474-.98-.29-.233-.731-.39-1.289-.39ZM12 15.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"}],["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Question
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZD0iTTEyLjAwMiA4LjUyOGMtMS4wMjUgMC0xLjY5Ni43MS0xLjc3MiAxLjQyM2EuNzUuNzUgMCAwIDEtMS40OTEtLjE2Yy4xNjItMS41MTcgMS41MTQtMi43NjMgMy4yNjMtMi43NjMuODMgMCAxLjYyMS4yMzUgMi4yMjcuNzIuNjIuNDk3IDEuMDAyIDEuMjI0IDEuMDM0IDIuMDk2LjAyNi42OS0uMTYyIDEuMjU3LS40OTMgMS43MjUtLjMxNy40NDctLjc0MS43NzItMS4xMyAxLjAzLS41OTcuMzk3LS44OS44NjEtLjg5IDEuNDAxYS43NS43NSAwIDAgMS0xLjUgMGMwLTEuMjAyLjY5OC0yLjA3NyAxLjU2LTIuNjUuMzQtLjIyNi41OC0uNDI3LjczNS0uNjQ3LjE0LS4yLjIzMy0uNDQyLjIyLS44MDQtLjAxNy0uNDM3LS4xOTYtLjc1Ny0uNDc0LS45OC0uMjktLjIzMy0uNzMxLS4zOS0xLjI4OS0uMzlaTTEyIDE1LjRhLjguOCAwIDEgMSAwIDEuNi44LjggMCAwIDEgMC0xLjZaIi8+CiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBabS0xLjUgMGE3LjUgNy41IDAgMSAxLTE1IDAgNy41IDcuNSAwIDAgMSAxNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Question = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-question',
        'staticon-Question',
        className
      ),
      ...props,
    })
);
Question.displayName = 'Question'

export default Question;
