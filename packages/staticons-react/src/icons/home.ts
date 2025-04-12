
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.948 2.01a1.627 1.627 0 0 1 2.104 0l4.604 3.903.006.006 1.367 1.158a.626.626 0 1 1-.81.955l-.339-.288v5.001c0 .899-.728 1.627-1.626 1.627H10.56a1.627 1.627 0 0 1-1.627-1.627v-2.073H7.067v2.073c0 .899-.728 1.627-1.627 1.627H3.746a1.627 1.627 0 0 1-1.627-1.627v-5l-.339.287a.626.626 0 1 1-.809-.955L2.338 5.92a.526.526 0 0 1 .006-.005L6.948 2.01ZM3.371 6.683v6.062c0 .208.168.376.375.376H5.44a.375.375 0 0 0 .376-.376V10.3c0-.485.393-.878.879-.878h2.61c.486 0 .88.393.88.878v2.446c0 .208.167.376.375.376h1.694a.375.375 0 0 0 .375-.376V6.683L8.243 2.964a.375.375 0 0 0-.486 0l-4.386 3.72Z","clip-rule":"evenodd"}]]

/**
 * @component @name Home
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi45NDggMi4wMWExLjYyNyAxLjYyNyAwIDAgMSAyLjEwNCAwbDQuNjA0IDMuOTAzLjAwNi4wMDYgMS4zNjcgMS4xNThhLjYyNi42MjYgMCAxIDEtLjgxLjk1NWwtLjMzOS0uMjg4djUuMDAxYzAgLjg5OS0uNzI4IDEuNjI3LTEuNjI2IDEuNjI3SDEwLjU2YTEuNjI3IDEuNjI3IDAgMCAxLTEuNjI3LTEuNjI3di0yLjA3M0g3LjA2N3YyLjA3M2MwIC44OTktLjcyOCAxLjYyNy0xLjYyNyAxLjYyN0gzLjc0NmExLjYyNyAxLjYyNyAwIDAgMS0xLjYyNy0xLjYyN3YtNWwtLjMzOS4yODdhLjYyNi42MjYgMCAxIDEtLjgwOS0uOTU1TDIuMzM4IDUuOTJhLjUyNi41MjYgMCAwIDEgLjAwNi0uMDA1TDYuOTQ4IDIuMDFaTTMuMzcxIDYuNjgzdjYuMDYyYzAgLjIwOC4xNjguMzc2LjM3NS4zNzZINS40NGEuMzc1LjM3NSAwIDAgMCAuMzc2LS4zNzZWMTAuM2MwLS40ODUuMzkzLS44NzguODc5LS44NzhoMi42MWMuNDg2IDAgLjg4LjM5My44OC44Nzh2Mi40NDZjMCAuMjA4LjE2Ny4zNzYuMzc1LjM3NmgxLjY5NGEuMzc1LjM3NSAwIDAgMCAuMzc1LS4zNzZWNi42ODNMOC4yNDMgMi45NjRhLjM3NS4zNzUgMCAwIDAtLjQ4NiAwbC00LjM4NiAzLjcyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Home = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-home',
        'staticon-Home',
        className
      ),
      ...props,
    })
);
Home.displayName = 'Home'

export default Home;
