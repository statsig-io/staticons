
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M13.294 7.174a.75.75 0 0 1 .53.919l-2.2 8.21a.75.75 0 0 1-1.449-.388l2.2-8.21a.75.75 0 0 1 .919-.53ZM9.162 9.348a.75.75 0 0 1 0 1.061L7.572 12l1.59 1.591a.75.75 0 0 1-1.06 1.06l-2.122-2.12a.75.75 0 0 1 0-1.061l2.122-2.122a.75.75 0 0 1 1.06 0Zm5.675 0a.75.75 0 0 1 1.06 0l2.122 2.122a.75.75 0 0 1 0 1.06l-2.121 2.122a.75.75 0 0 1-1.061-1.061L16.427 12l-1.59-1.591a.75.75 0 0 1 0-1.06Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.004 6.748a2.75 2.75 0 0 1 2.75-2.75h12.5a2.75 2.75 0 0 1 2.75 2.75v10.504a2.75 2.75 0 0 1-2.75 2.75h-12.5a2.75 2.75 0 0 1-2.75-2.75V6.748Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v10.504c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V6.748c0-.69-.56-1.25-1.25-1.25h-12.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name Developer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjI5NCA3LjE3NGEuNzUuNzUgMCAwIDEgLjUzLjkxOWwtMi4yIDguMjFhLjc1Ljc1IDAgMCAxLTEuNDQ5LS4zODhsMi4yLTguMjFhLjc1Ljc1IDAgMCAxIC45MTktLjUzWk05LjE2MiA5LjM0OGEuNzUuNzUgMCAwIDEgMCAxLjA2MUw3LjU3MiAxMmwxLjU5IDEuNTkxYS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTIuMTIyLTIuMTJhLjc1Ljc1IDAgMCAxIDAtMS4wNjFsMi4xMjItMi4xMjJhLjc1Ljc1IDAgMCAxIDEuMDYgMFptNS42NzUgMGEuNzUuNzUgMCAwIDEgMS4wNiAwbDIuMTIyIDIuMTIyYS43NS43NSAwIDAgMSAwIDEuMDZsLTIuMTIxIDIuMTIyYS43NS43NSAwIDAgMS0xLjA2MS0xLjA2MUwxNi40MjcgMTJsLTEuNTktMS41OTFhLjc1Ljc1IDAgMCAxIDAtMS4wNloiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjAwNCA2Ljc0OGEyLjc1IDIuNzUgMCAwIDEgMi43NS0yLjc1aDEyLjVhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NXYxMC41MDRhMi43NSAyLjc1IDAgMCAxLTIuNzUgMi43NWgtMTIuNWEyLjc1IDIuNzUgMCAwIDEtMi43NS0yLjc1VjYuNzQ4Wm0yLjc1LTEuMjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djEwLjUwNGMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgxMi41Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVY2Ljc0OGMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVoLTEyLjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Developer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-developer',
        'staticon-Developer',
        className
      ),
      ...props,
    })
);
Developer.displayName = 'Developer'

export default Developer;
