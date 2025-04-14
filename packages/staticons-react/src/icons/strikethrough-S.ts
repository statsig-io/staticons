
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.672 7.058c-.052-.737.233-1.386.79-1.865.564-.486 1.433-.816 2.546-.816 2.148 0 3.326 1.592 3.326 2.725a.625.625 0 1 0 1.25 0c0-1.877-1.791-3.975-4.576-3.975-1.353 0-2.53.402-3.363 1.12-.84.724-1.301 1.75-1.22 2.899.073 1.047.6 1.745 1.297 2.23H2.75a.625.625 0 1 0 0 1.25h7.159l.293.087c.816.244 1.54.46 2.112.784.619.35.967.773 1.015 1.446.052.737-.234 1.386-.79 1.865-.564.486-1.434.816-2.547.816-2.148 0-3.325-1.592-3.325-2.725a.625.625 0 1 0-1.25 0c0 1.876 1.79 3.975 4.575 3.975 1.354 0 2.53-.402 3.363-1.12.84-.724 1.302-1.75 1.22-2.899-.073-1.046-.603-1.744-1.3-2.23h3.977a.625.625 0 1 0 0-1.25h-7.158l-.312-.093c-.814-.243-1.534-.458-2.102-.78-.613-.348-.96-.77-1.007-1.444Z","clip-rule":"evenodd"}]]

/**
 * @component @name StrikethroughS
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi42NzIgNy4wNThjLS4wNTItLjczNy4yMzMtMS4zODYuNzktMS44NjUuNTY0LS40ODYgMS40MzMtLjgxNiAyLjU0Ni0uODE2IDIuMTQ4IDAgMy4zMjYgMS41OTIgMy4zMjYgMi43MjVhLjYyNS42MjUgMCAxIDAgMS4yNSAwYzAtMS44NzctMS43OTEtMy45NzUtNC41NzYtMy45NzUtMS4zNTMgMC0yLjUzLjQwMi0zLjM2MyAxLjEyLS44NC43MjQtMS4zMDEgMS43NS0xLjIyIDIuODk5LjA3MyAxLjA0Ny42IDEuNzQ1IDEuMjk3IDIuMjNIMi43NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNy4xNTlsLjI5My4wODdjLjgxNi4yNDQgMS41NC40NiAyLjExMi43ODQuNjE5LjM1Ljk2Ny43NzMgMS4wMTUgMS40NDYuMDUyLjczNy0uMjM0IDEuMzg2LS43OSAxLjg2NS0uNTY0LjQ4Ni0xLjQzNC44MTYtMi41NDcuODE2LTIuMTQ4IDAtMy4zMjUtMS41OTItMy4zMjUtMi43MjVhLjYyNS42MjUgMCAxIDAtMS4yNSAwYzAgMS44NzYgMS43OSAzLjk3NSA0LjU3NSAzLjk3NSAxLjM1NCAwIDIuNTMtLjQwMiAzLjM2My0xLjEyLjg0LS43MjQgMS4zMDItMS43NSAxLjIyLTIuODk5LS4wNzMtMS4wNDYtLjYwMy0xLjc0NC0xLjMtMi4yM2gzLjk3N2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTcuMTU4bC0uMzEyLS4wOTNjLS44MTQtLjI0My0xLjUzNC0uNDU4LTIuMTAyLS43OC0uNjEzLS4zNDgtLjk2LS43Ny0xLjAwNy0xLjQ0NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StrikethroughS = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-strikethrough-s',
        'staticon-StrikethroughS',
        className
      ),
      ...props,
    })
);
StrikethroughS.displayName = 'StrikethroughS'

export default StrikethroughS;
