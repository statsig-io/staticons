
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.927 5.04a.75.75 0 0 0-1.043-1.078L13.415 9.26a.25.25 0 0 1-.318.025L9.94 7.054a1.75 1.75 0 0 0-2.288.236l-4.438 4.753a.75.75 0 1 0 1.097 1.024l4.437-4.754a.25.25 0 0 1 .327-.034l3.158 2.23a1.75 1.75 0 0 0 2.227-.173l5.468-5.296ZM21 8.575c0-1.094-1.306-1.66-2.104-.912l-5.358 5.02a.25.25 0 0 1-.316.02l-3.099-2.207a1.75 1.75 0 0 0-2.308.246L3.457 15.52A1.75 1.75 0 0 0 3 16.7v1.8c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 18.5V8.575Zm-6.437 5.202L19.5 9.152v9.347a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-1.8a.25.25 0 0 1 .065-.169l4.358-4.777a.25.25 0 0 1 .33-.035l3.098 2.207a1.75 1.75 0 0 0 2.212-.148Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedLine
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuOTI3IDUuMDRhLjc1Ljc1IDAgMCAwLTEuMDQzLTEuMDc4TDEzLjQxNSA5LjI2YS4yNS4yNSAwIDAgMS0uMzE4LjAyNUw5Ljk0IDcuMDU0YTEuNzUgMS43NSAwIDAgMC0yLjI4OC4yMzZsLTQuNDM4IDQuNzUzYS43NS43NSAwIDEgMCAxLjA5NyAxLjAyNGw0LjQzNy00Ljc1NGEuMjUuMjUgMCAwIDEgLjMyNy0uMDM0bDMuMTU4IDIuMjNhMS43NSAxLjc1IDAgMCAwIDIuMjI3LS4xNzNsNS40NjgtNS4yOTZaTTIxIDguNTc1YzAtMS4wOTQtMS4zMDYtMS42Ni0yLjEwNC0uOTEybC01LjM1OCA1LjAyYS4yNS4yNSAwIDAgMS0uMzE2LjAybC0zLjA5OS0yLjIwN2ExLjc1IDEuNzUgMCAwIDAtMi4zMDguMjQ2TDMuNDU3IDE1LjUyQTEuNzUgMS43NSAwIDAgMCAzIDE2Ljd2MS44YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoMTQuNUExLjc1IDEuNzUgMCAwIDAgMjEgMTguNVY4LjU3NVptLTYuNDM3IDUuMjAyTDE5LjUgOS4xNTJ2OS4zNDdhLjI1LjI1IDAgMCAxLS4yNS4yNUg0Ljc1YS4yNS4yNSAwIDAgMS0uMjUtLjI1di0xLjhhLjI1LjI1IDAgMCAxIC4wNjUtLjE2OWw0LjM1OC00Ljc3N2EuMjUuMjUgMCAwIDEgLjMzLS4wMzVsMy4wOTggMi4yMDdhMS43NSAxLjc1IDAgMCAwIDIuMjEyLS4xNDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StackedLine = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-stacked-line',
        'staticon-StackedLine',
        className
      ),
      ...props,
    })
);
StackedLine.displayName = 'StackedLine'

export default StackedLine;
