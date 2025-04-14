
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.993 2.798a1.13 1.13 0 0 1 2.015 0l1.899 3.734 4.138.653a1.13 1.13 0 0 1 .623 1.916l-2.965 2.96.659 4.137a1.13 1.13 0 0 1-1.63 1.184L10 15.478l-3.732 1.904a1.13 1.13 0 0 1-1.63-1.184l.659-4.137-2.965-2.96a1.13 1.13 0 0 1 .623-1.916l4.138-.653 1.9-3.734Zm1.008.786L8.183 7.157a1.13 1.13 0 0 1-.831.604l-3.96.625 2.836 2.832c.257.256.375.62.318.978l-.63 3.959 3.57-1.823a1.13 1.13 0 0 1 1.028 0l3.571 1.823-.63-3.96a1.13 1.13 0 0 1 .318-.977l2.837-2.832-3.96-.625a1.13 1.13 0 0 1-.832-.604l-1.817-3.573Z","clip-rule":"evenodd"}]]

/**
 * @component @name Favorite
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45OTMgMi43OThhMS4xMyAxLjEzIDAgMCAxIDIuMDE1IDBsMS44OTkgMy43MzQgNC4xMzguNjUzYTEuMTMgMS4xMyAwIDAgMSAuNjIzIDEuOTE2bC0yLjk2NSAyLjk2LjY1OSA0LjEzN2ExLjEzIDEuMTMgMCAwIDEtMS42MyAxLjE4NEwxMCAxNS40NzhsLTMuNzMyIDEuOTA0YTEuMTMgMS4xMyAwIDAgMS0xLjYzLTEuMTg0bC42NTktNC4xMzctMi45NjUtMi45NmExLjEzIDEuMTMgMCAwIDEgLjYyMy0xLjkxNmw0LjEzOC0uNjUzIDEuOS0zLjczNFptMS4wMDguNzg2TDguMTgzIDcuMTU3YTEuMTMgMS4xMyAwIDAgMS0uODMxLjYwNGwtMy45Ni42MjUgMi44MzYgMi44MzJjLjI1Ny4yNTYuMzc1LjYyLjMxOC45NzhsLS42MyAzLjk1OSAzLjU3LTEuODIzYTEuMTMgMS4xMyAwIDAgMSAxLjAyOCAwbDMuNTcxIDEuODIzLS42My0zLjk2YTEuMTMgMS4xMyAwIDAgMSAuMzE4LS45NzdsMi44MzctMi44MzItMy45Ni0uNjI1YTEuMTMgMS4xMyAwIDAgMS0uODMyLS42MDRsLTEuODE3LTMuNTczWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Favorite = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-favorite',
        'staticon-Favorite',
        className
      ),
      ...props,
    })
);
Favorite.displayName = 'Favorite'

export default Favorite;
