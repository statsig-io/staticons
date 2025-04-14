
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.184 9.252a.63.63 0 0 1-.891 0L8.266 6.225a.63.63 0 0 1 0-.891l3.027-3.027a.63.63 0 0 1 .891.89L10.233 5.15h6.51a.63.63 0 1 1 0 1.26h-6.51l1.951 1.951a.63.63 0 0 1 0 .892ZM7.816 10.74a.63.63 0 0 1 .892 0l3.027 3.027a.63.63 0 0 1 0 .89l-3.027 3.028a.63.63 0 0 1-.892-.892l1.952-1.95h-6.51a.63.63 0 1 1 0-1.261h6.51l-1.952-1.951a.63.63 0 0 1 0-.891Z","clip-rule":"evenodd"}]]

/**
 * @component @name Compare
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMTg0IDkuMjUyYS42My42MyAwIDAgMS0uODkxIDBMOC4yNjYgNi4yMjVhLjYzLjYzIDAgMCAxIDAtLjg5MWwzLjAyNy0zLjAyN2EuNjMuNjMgMCAwIDEgLjg5MS44OUwxMC4yMzMgNS4xNWg2LjUxYS42My42MyAwIDEgMSAwIDEuMjZoLTYuNTFsMS45NTEgMS45NTFhLjYzLjYzIDAgMCAxIDAgLjg5MlpNNy44MTYgMTAuNzRhLjYzLjYzIDAgMCAxIC44OTIgMGwzLjAyNyAzLjAyN2EuNjMuNjMgMCAwIDEgMCAuODlsLTMuMDI3IDMuMDI4YS42My42MyAwIDAgMS0uODkyLS44OTJsMS45NTItMS45NWgtNi41MWEuNjMuNjMgMCAxIDEgMC0xLjI2MWg2LjUxbC0xLjk1Mi0xLjk1MWEuNjMuNjMgMCAwIDEgMC0uODkxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
