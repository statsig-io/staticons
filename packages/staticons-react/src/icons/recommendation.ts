
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.401 4.136a.626.626 0 1 1-1.085.626l-.692-1.196a.626.626 0 1 1 1.086-.627l.691 1.197ZM5.657 5.447a.626.626 0 1 1-.627 1.086l-1.197-.69a.626.626 0 1 1 .627-1.086l1.197.69Zm5.832 9.806a.777.777 0 0 1-1.443 0l-1.189-2.97-4.913 4.907a.627.627 0 0 1-.887-.886l4.957-4.951-3.117-1.246a.777.777 0 0 1 0-1.443l3.33-1.332a.873.873 0 0 0 .487-.486l1.332-3.329a.777.777 0 0 1 1.443 0l1.332 3.33a.873.873 0 0 0 .487.485l3.33 1.332a.777.777 0 0 1 0 1.443l-3.33 1.331a.873.873 0 0 0-.487.486l-1.332 3.33Zm-.721-1.572.89-2.222c.216-.54.644-.969 1.184-1.185l2.224-.889-2.224-.889a2.126 2.126 0 0 1-1.185-1.184l-.89-2.223-.889 2.223c-.216.54-.645.968-1.185 1.184l-2.223.89 2.223.888c.54.216.969.644 1.185 1.185l.89 2.222Z","clip-rule":"evenodd"}]]

/**
 * @component @name Recommendation
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40MDEgNC4xMzZhLjYyNi42MjYgMCAxIDEtMS4wODUuNjI2bC0uNjkyLTEuMTk2YS42MjYuNjI2IDAgMSAxIDEuMDg2LS42MjdsLjY5MSAxLjE5N1pNNS42NTcgNS40NDdhLjYyNi42MjYgMCAxIDEtLjYyNyAxLjA4NmwtMS4xOTctLjY5YS42MjYuNjI2IDAgMSAxIC42MjctMS4wODZsMS4xOTcuNjlabTUuODMyIDkuODA2YS43NzcuNzc3IDAgMCAxLTEuNDQzIDBsLTEuMTg5LTIuOTctNC45MTMgNC45MDdhLjYyNy42MjcgMCAwIDEtLjg4Ny0uODg2bDQuOTU3LTQuOTUxLTMuMTE3LTEuMjQ2YS43NzcuNzc3IDAgMCAxIDAtMS40NDNsMy4zMy0xLjMzMmEuODczLjg3MyAwIDAgMCAuNDg3LS40ODZsMS4zMzItMy4zMjlhLjc3Ny43NzcgMCAwIDEgMS40NDMgMGwxLjMzMiAzLjMzYS44NzMuODczIDAgMCAwIC40ODcuNDg1bDMuMzMgMS4zMzJhLjc3Ny43NzcgMCAwIDEgMCAxLjQ0M2wtMy4zMyAxLjMzMWEuODczLjg3MyAwIDAgMC0uNDg3LjQ4NmwtMS4zMzIgMy4zM1ptLS43MjEtMS41NzIuODktMi4yMjJjLjIxNi0uNTQuNjQ0LS45NjkgMS4xODQtMS4xODVsMi4yMjQtLjg4OS0yLjIyNC0uODg5YTIuMTI2IDIuMTI2IDAgMCAxLTEuMTg1LTEuMTg0bC0uODktMi4yMjMtLjg4OSAyLjIyM2MtLjIxNi41NC0uNjQ1Ljk2OC0xLjE4NSAxLjE4NGwtMi4yMjMuODkgMi4yMjMuODg4Yy41NC4yMTYuOTY5LjY0NCAxLjE4NSAxLjE4NWwuODkgMi4yMjJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Recommendation = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-recommendation',
        'staticon-Recommendation',
        className
      ),
      ...props,
    })
);
Recommendation.displayName = 'Recommendation'

export default Recommendation;
