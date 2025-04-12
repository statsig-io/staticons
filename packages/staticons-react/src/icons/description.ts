
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.375 3.002c0-.898.728-1.625 1.625-1.625h10c.897 0 1.625.727 1.625 1.625v6.917c0 .432-.172.847-.479 1.152l-3.095 3.08a1.625 1.625 0 0 1-1.146.472H3a1.625 1.625 0 0 1-1.625-1.625V3.002ZM3 2.627a.375.375 0 0 0-.375.375v9.996c0 .207.168.375.375.375h6.115v-2.631c0-.898.728-1.625 1.625-1.625h2.634V3.002a.375.375 0 0 0-.375-.375H3Zm10.08 7.74-2.715 2.701v-2.326c0-.207.168-.375.375-.375h2.34ZM10.514 7.66a.625.625 0 1 0 0-1.25H4.706a.625.625 0 0 0 0 1.25h5.808Zm.625-2.95c0 .346-.28.625-.625.625H4.706a.625.625 0 0 1 0-1.25h5.808c.345 0 .625.28.625.625ZM7.406 9.978a.625.625 0 1 0 0-1.25h-2.7a.625.625 0 0 0 0 1.25h2.7Z","clip-rule":"evenodd"}]]

/**
 * @component @name Description
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNzUgMy4wMDJjMC0uODk4LjcyOC0xLjYyNSAxLjYyNS0xLjYyNWgxMGMuODk3IDAgMS42MjUuNzI3IDEuNjI1IDEuNjI1djYuOTE3YzAgLjQzMi0uMTcyLjg0Ny0uNDc5IDEuMTUybC0zLjA5NSAzLjA4YTEuNjI1IDEuNjI1IDAgMCAxLTEuMTQ2LjQ3MkgzYTEuNjI1IDEuNjI1IDAgMCAxLTEuNjI1LTEuNjI1VjMuMDAyWk0zIDIuNjI3YS4zNzUuMzc1IDAgMCAwLS4zNzUuMzc1djkuOTk2YzAgLjIwNy4xNjguMzc1LjM3NS4zNzVoNi4xMTV2LTIuNjMxYzAtLjg5OC43MjgtMS42MjUgMS42MjUtMS42MjVoMi42MzRWMy4wMDJhLjM3NS4zNzUgMCAwIDAtLjM3NS0uMzc1SDNabTEwLjA4IDcuNzQtMi43MTUgMi43MDF2LTIuMzI2YzAtLjIwNy4xNjgtLjM3NS4zNzUtLjM3NWgyLjM0Wk0xMC41MTQgNy42NmEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINC43MDZhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDUuODA4Wm0uNjI1LTIuOTVjMCAuMzQ2LS4yOC42MjUtLjYyNS42MjVINC43MDZhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDUuODA4Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVaTTcuNDA2IDkuOTc4YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtMi43YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgyLjdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Description = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-description',
        'staticon-Description',
        className
      ),
      ...props,
    })
);
Description.displayName = 'Description'

export default Description;
