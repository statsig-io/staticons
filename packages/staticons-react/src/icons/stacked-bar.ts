
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.877 15.752c0 .621-.504 1.125-1.125 1.125h-1.647a1.125 1.125 0 0 1-1.125-1.125V4.248c0-.621.504-1.125 1.125-1.125h1.647c.621 0 1.125.504 1.125 1.125v11.504Zm-2.647-.125h1.397V8.304H14.23v7.323Zm0-8.573V4.373h1.397v2.68H14.23Zm-8.335 9.823c.622 0 1.125-.504 1.125-1.125v-7.26c0-.62-.503-1.124-1.125-1.124H4.25c-.622 0-1.125.503-1.125 1.125v7.259c0 .621.503 1.125 1.125 1.125h1.646Zm-.125-1.25H4.374v-3.09H5.77v3.09Zm-1.396-7.01v2.67H5.77v-2.67H4.374Zm4.925 7.01v-4.78h1.397v4.78H9.299Zm1.397-8.715v2.685H9.299V6.912h1.397Zm.125 9.965c.621 0 1.125-.504 1.125-1.125V6.787c0-.621-.504-1.125-1.125-1.125H9.174c-.621 0-1.125.504-1.125 1.125v8.965c0 .621.504 1.125 1.125 1.125h1.647Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuODc3IDE1Ljc1MmMwIC42MjEtLjUwNCAxLjEyNS0xLjEyNSAxLjEyNWgtMS42NDdhMS4xMjUgMS4xMjUgMCAwIDEtMS4xMjUtMS4xMjVWNC4yNDhjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgxLjY0N2MuNjIxIDAgMS4xMjUuNTA0IDEuMTI1IDEuMTI1djExLjUwNFptLTIuNjQ3LS4xMjVoMS4zOTdWOC4zMDRIMTQuMjN2Ny4zMjNabTAtOC41NzNWNC4zNzNoMS4zOTd2Mi42OEgxNC4yM1ptLTguMzM1IDkuODIzYy42MjIgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1di03LjI2YzAtLjYyLS41MDMtMS4xMjQtMS4xMjUtMS4xMjRINC4yNWMtLjYyMiAwLTEuMTI1LjUwMy0xLjEyNSAxLjEyNXY3LjI1OWMwIC42MjEuNTAzIDEuMTI1IDEuMTI1IDEuMTI1aDEuNjQ2Wm0tLjEyNS0xLjI1SDQuMzc0di0zLjA5SDUuNzd2My4wOVptLTEuMzk2LTcuMDF2Mi42N0g1Ljc3di0yLjY3SDQuMzc0Wm00LjkyNSA3LjAxdi00Ljc4aDEuMzk3djQuNzhIOS4yOTlabTEuMzk3LTguNzE1djIuNjg1SDkuMjk5VjYuOTEyaDEuMzk3Wm0uMTI1IDkuOTY1Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1VjYuNzg3YzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1SDkuMTc0Yy0uNjIxIDAtMS4xMjUuNTA0LTEuMTI1IDEuMTI1djguOTY1YzAgLjYyMS41MDQgMS4xMjUgMS4xMjUgMS4xMjVoMS42NDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StackedBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-stacked-bar',
        'staticon-StackedBar',
        className
      ),
      ...props,
    })
);
StackedBar.displayName = 'StackedBar'

export default StackedBar;
