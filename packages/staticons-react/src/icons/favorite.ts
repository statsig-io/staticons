
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.416 3.578c.646-1.273 2.463-1.273 3.11 0l2.017 3.97a.25.25 0 0 0 .183.134l4.395.693c1.41.223 1.97 1.953.961 2.962l-3.148 3.147a.25.25 0 0 0-.07.216l.699 4.399c.224 1.41-1.246 2.48-2.516 1.83l-3.963-2.025a.249.249 0 0 0-.227 0l-3.962 2.025c-1.271.65-2.74-.42-2.517-1.83l.7-4.4a.25.25 0 0 0-.07-.215l-3.149-3.147c-1.01-1.01-.448-2.74.962-2.962l4.394-.693a.25.25 0 0 0 .184-.134l2.017-3.97Zm1.777.68a.25.25 0 0 0-.444 0l-2.017 3.97a1.75 1.75 0 0 1-1.284.933l-4.395.693a.25.25 0 0 0-.137.423l3.148 3.148c.396.395.578.957.49 1.51l-.699 4.399a.25.25 0 0 0 .36.261l3.963-2.025a1.743 1.743 0 0 1 1.586 0l3.963 2.025a.25.25 0 0 0 .359-.261l-.7-4.399a1.748 1.748 0 0 1 .491-1.51l3.148-3.148a.25.25 0 0 0-.137-.423l-4.395-.693a1.745 1.745 0 0 1-1.283-.934l-2.017-3.97Z","clip-rule":"evenodd"}]]

/**
 * @component @name Favorite
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDE2IDMuNTc4Yy42NDYtMS4yNzMgMi40NjMtMS4yNzMgMy4xMSAwbDIuMDE3IDMuOTdhLjI1LjI1IDAgMCAwIC4xODMuMTM0bDQuMzk1LjY5M2MxLjQxLjIyMyAxLjk3IDEuOTUzLjk2MSAyLjk2MmwtMy4xNDggMy4xNDdhLjI1LjI1IDAgMCAwLS4wNy4yMTZsLjY5OSA0LjM5OWMuMjI0IDEuNDEtMS4yNDYgMi40OC0yLjUxNiAxLjgzbC0zLjk2My0yLjAyNWEuMjQ5LjI0OSAwIDAgMC0uMjI3IDBsLTMuOTYyIDIuMDI1Yy0xLjI3MS42NS0yLjc0LS40Mi0yLjUxNy0xLjgzbC43LTQuNGEuMjUuMjUgMCAwIDAtLjA3LS4yMTVsLTMuMTQ5LTMuMTQ3Yy0xLjAxLTEuMDEtLjQ0OC0yLjc0Ljk2Mi0yLjk2Mmw0LjM5NC0uNjkzYS4yNS4yNSAwIDAgMCAuMTg0LS4xMzRsMi4wMTctMy45N1ptMS43NzcuNjhhLjI1LjI1IDAgMCAwLS40NDQgMGwtMi4wMTcgMy45N2ExLjc1IDEuNzUgMCAwIDEtMS4yODQuOTMzbC00LjM5NS42OTNhLjI1LjI1IDAgMCAwLS4xMzcuNDIzbDMuMTQ4IDMuMTQ4Yy4zOTYuMzk1LjU3OC45NTcuNDkgMS41MWwtLjY5OSA0LjM5OWEuMjUuMjUgMCAwIDAgLjM2LjI2MWwzLjk2My0yLjAyNWExLjc0MyAxLjc0MyAwIDAgMSAxLjU4NiAwbDMuOTYzIDIuMDI1YS4yNS4yNSAwIDAgMCAuMzU5LS4yNjFsLS43LTQuMzk5YTEuNzQ4IDEuNzQ4IDAgMCAxIC40OTEtMS41MWwzLjE0OC0zLjE0OGEuMjUuMjUgMCAwIDAtLjEzNy0uNDIzbC00LjM5NS0uNjkzYTEuNzQ1IDEuNzQ1IDAgMCAxLTEuMjgzLS45MzRsLTIuMDE3LTMuOTdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
