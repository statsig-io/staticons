
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.07 2.182a.625.625 0 1 0-.884.884l3.693 3.693-2.457 3.125c-.71.902-.067 2.225 1.081 2.225H8.74l-.032 4.757c-.008 1.072 1.346 1.546 2.009.703l2.628-3.344 3.594 3.593a.625.625 0 1 0 .883-.884l-3.698-3.698 2.454-3.122c.71-.902.066-2.226-1.082-2.225l-4.233.003.03-4.759c.006-1.071-1.347-1.544-2.01-.702L6.658 5.77 3.07 2.182Zm3.7 5.467-2.365 3.007a.125.125 0 0 0 .098.203h4.363c.624 0 1.13.508 1.125 1.132L9.96 16.51l2.495-3.174L6.77 7.65Zm6.463 4.696L7.548 6.66l2.492-3.17-.027 4.52a1.125 1.125 0 0 0 1.125 1.132l4.359-.003c.104 0 .162.12.098.203l-2.362 3.003Z","clip-rule":"evenodd"}]]

/**
 * @component @name FlashDisabled
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wNyAyLjE4MmEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4NGwzLjY5MyAzLjY5My0yLjQ1NyAzLjEyNWMtLjcxLjkwMi0uMDY3IDIuMjI1IDEuMDgxIDIuMjI1SDguNzRsLS4wMzIgNC43NTdjLS4wMDggMS4wNzIgMS4zNDYgMS41NDYgMi4wMDkuNzAzbDIuNjI4LTMuMzQ0IDMuNTk0IDMuNTkzYS42MjUuNjI1IDAgMSAwIC44ODMtLjg4NGwtMy42OTgtMy42OTggMi40NTQtMy4xMjJjLjcxLS45MDIuMDY2LTIuMjI2LTEuMDgyLTIuMjI1bC00LjIzMy4wMDMuMDMtNC43NTljLjAwNi0xLjA3MS0xLjM0Ny0xLjU0NC0yLjAxLS43MDJMNi42NTggNS43NyAzLjA3IDIuMTgyWm0zLjcgNS40NjctMi4zNjUgMy4wMDdhLjEyNS4xMjUgMCAwIDAgLjA5OC4yMDNoNC4zNjNjLjYyNCAwIDEuMTMuNTA4IDEuMTI1IDEuMTMyTDkuOTYgMTYuNTFsMi40OTUtMy4xNzRMNi43NyA3LjY1Wm02LjQ2MyA0LjY5Nkw3LjU0OCA2LjY2bDIuNDkyLTMuMTctLjAyNyA0LjUyYTEuMTI1IDEuMTI1IDAgMCAwIDEuMTI1IDEuMTMybDQuMzU5LS4wMDNjLjEwNCAwIC4xNjIuMTIuMDk4LjIwM2wtMi4zNjIgMy4wMDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FlashDisabled = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash-disabled',
        'staticon-FlashDisabled',
        className
      ),
      ...props,
    })
);
FlashDisabled.displayName = 'FlashDisabled'

export default FlashDisabled;
