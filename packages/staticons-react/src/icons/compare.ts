
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M9.846 7.33a.625.625 0 0 1-.884 0L5.956 4.324a.625.625 0 0 1 0-.884L8.962.434a.625.625 0 0 1 .884.884L7.907 3.257h6.467a.625.625 0 1 1 0 1.25H7.906l1.94 1.94a.625.625 0 0 1 0 .883ZM6.152 8.67a.625.625 0 0 1 .884 0l3.006 3.007a.625.625 0 0 1 0 .883l-3.006 3.006a.625.625 0 0 1-.884-.884l1.94-1.939H1.624a.625.625 0 1 1 0-1.25H8.09L6.152 9.555a.625.625 0 0 1 0-.884Z"}]]

/**
 * @component @name Compare
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTkuODQ2IDcuMzNhLjYyNS42MjUgMCAwIDEtLjg4NCAwTDUuOTU2IDQuMzI0YS42MjUuNjI1IDAgMCAxIDAtLjg4NEw4Ljk2Mi40MzRhLjYyNS42MjUgMCAwIDEgLjg4NC44ODRMNy45MDcgMy4yNTdoNi40NjdhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDcuOTA2bDEuOTQgMS45NGEuNjI1LjYyNSAwIDAgMSAwIC44ODNaTTYuMTUyIDguNjdhLjYyNS42MjUgMCAwIDEgLjg4NCAwbDMuMDA2IDMuMDA3YS42MjUuNjI1IDAgMCAxIDAgLjg4M2wtMy4wMDYgMy4wMDZhLjYyNS42MjUgMCAwIDEtLjg4NC0uODg0bDEuOTQtMS45MzlIMS42MjRhLjYyNS42MjUgMCAxIDEgMC0xLjI1SDguMDlMNi4xNTIgOS41NTVhLjYyNS42MjUgMCAwIDEgMC0uODg0WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Compare = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-compare',
        'staticon-Compare',
        className
      ),
      ...props,
    })
);
Compare.displayName = 'Compare'

export default Compare;
