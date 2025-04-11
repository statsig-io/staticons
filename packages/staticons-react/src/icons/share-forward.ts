
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m12.416 8.276-.004-3.13c-.002-1.078 1.272-1.647 2.077-.928l6.642 5.927c.78.697.782 1.916.003 2.61l-6.624 5.894c-.803.715-2.078.142-2.08-.935l-.004-3.082c-1.458.075-2.674.385-3.845 1.014-1.255.675-2.5 1.738-3.946 3.36a1.24 1.24 0 0 1-1.381.337 1.195 1.195 0 0 1-.76-1.244c.673-6.893 6.13-9.526 9.922-9.823Zm-8.31 9.088c1.281-1.356 2.488-2.353 3.763-3.038 1.481-.796 3.01-1.148 4.78-1.202a1.241 1.241 0 0 1 1.275 1.242l.004 2.794 6.208-5.526a.25.25 0 0 0 0-.373L13.91 5.706l.005 2.791a1.266 1.266 0 0 1-1.201 1.26c-3.159.18-7.658 2.22-8.608 7.607Z","clip-rule":"evenodd"}]]

/**
 * @component @name ShareForward
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIuNDE2IDguMjc2LS4wMDQtMy4xM2MtLjAwMi0xLjA3OCAxLjI3Mi0xLjY0NyAyLjA3Ny0uOTI4bDYuNjQyIDUuOTI3Yy43OC42OTcuNzgyIDEuOTE2LjAwMyAyLjYxbC02LjYyNCA1Ljg5NGMtLjgwMy43MTUtMi4wNzguMTQyLTIuMDgtLjkzNWwtLjAwNC0zLjA4MmMtMS40NTguMDc1LTIuNjc0LjM4NS0zLjg0NSAxLjAxNC0xLjI1NS42NzUtMi41IDEuNzM4LTMuOTQ2IDMuMzZhMS4yNCAxLjI0IDAgMCAxLTEuMzgxLjMzNyAxLjE5NSAxLjE5NSAwIDAgMS0uNzYtMS4yNDRjLjY3My02Ljg5MyA2LjEzLTkuNTI2IDkuOTIyLTkuODIzWm0tOC4zMSA5LjA4OGMxLjI4MS0xLjM1NiAyLjQ4OC0yLjM1MyAzLjc2My0zLjAzOCAxLjQ4MS0uNzk2IDMuMDEtMS4xNDggNC43OC0xLjIwMmExLjI0MSAxLjI0MSAwIDAgMSAxLjI3NSAxLjI0MmwuMDA0IDIuNzk0IDYuMjA4LTUuNTI2YS4yNS4yNSAwIDAgMCAwLS4zNzNMMTMuOTEgNS43MDZsLjAwNSAyLjc5MWExLjI2NiAxLjI2NiAwIDAgMS0xLjIwMSAxLjI2Yy0zLjE1OS4xOC03LjY1OCAyLjIyLTguNjA4IDcuNjA3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ShareForward = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share-forward',
        'staticon-ShareForward',
        className
      ),
      ...props,
    })
);
ShareForward.displayName = 'ShareForward'

export default ShareForward;
