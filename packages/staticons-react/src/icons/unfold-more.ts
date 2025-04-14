
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.182 8.337a.625.625 0 0 0 .884-.884l-3.447-3.447a.875.875 0 0 0-1.237 0L5.935 7.453a.625.625 0 0 0 .883.884L10 5.155l3.182 3.182Zm-6.364 3.326a.625.625 0 1 0-.883.884l3.447 3.447a.875.875 0 0 0 1.237 0l3.447-3.447a.625.625 0 1 0-.884-.884L10 14.845l-3.182-3.182Z","clip-rule":"evenodd"}]]

/**
 * @component @name UnfoldMore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTgyIDguMzM3YS42MjUuNjI1IDAgMCAwIC44ODQtLjg4NGwtMy40NDctMy40NDdhLjg3NS44NzUgMCAwIDAtMS4yMzcgMEw1LjkzNSA3LjQ1M2EuNjI1LjYyNSAwIDAgMCAuODgzLjg4NEwxMCA1LjE1NWwzLjE4MiAzLjE4MlptLTYuMzY0IDMuMzI2YS42MjUuNjI1IDAgMSAwLS44ODMuODg0bDMuNDQ3IDMuNDQ3YS44NzUuODc1IDAgMCAwIDEuMjM3IDBsMy40NDctMy40NDdhLjYyNS42MjUgMCAxIDAtLjg4NC0uODg0TDEwIDE0Ljg0NWwtMy4xODItMy4xODJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UnfoldMore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-unfold-more',
        'staticon-UnfoldMore',
        className
      ),
      ...props,
    })
);
UnfoldMore.displayName = 'UnfoldMore'

export default UnfoldMore;
