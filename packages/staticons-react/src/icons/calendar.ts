
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.258 12.045a.75.75 0 0 0 0 1.502h.747v3.006a.75.75 0 1 0 1.5 0v-3.256c0-.691-.56-1.252-1.25-1.252h-.997Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.362 5.078V3.766a.75.75 0 1 0-1.501 0v1.312H5.754a2.753 2.753 0 0 0-2.752 2.754v9.929a2.753 2.753 0 0 0 2.752 2.754H18.25a2.753 2.753 0 0 0 2.752-2.754V7.83a2.753 2.753 0 0 0-2.752-2.753h-1.13V3.766a.75.75 0 1 0-1.5 0v1.312H8.361ZM5.754 6.58c-.691 0-1.251.56-1.251 1.252v1.213h14.998V7.832a1.25 1.25 0 0 0-1.25-1.252H5.753ZM4.503 17.76v-7.213h14.998v7.214c0 .691-.56 1.252-1.25 1.252H5.753c-.691 0-1.251-.56-1.251-1.252Z","clip-rule":"evenodd"}]]

/**
 * @component @name Calendar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjI1OCAxMi4wNDVhLjc1Ljc1IDAgMCAwIDAgMS41MDJoLjc0N3YzLjAwNmEuNzUuNzUgMCAxIDAgMS41IDB2LTMuMjU2YzAtLjY5MS0uNTYtMS4yNTItMS4yNS0xLjI1MmgtLjk5N1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjM2MiA1LjA3OFYzLjc2NmEuNzUuNzUgMCAxIDAtMS41MDEgMHYxLjMxMkg1Ljc1NGEyLjc1MyAyLjc1MyAwIDAgMC0yLjc1MiAyLjc1NHY5LjkyOWEyLjc1MyAyLjc1MyAwIDAgMCAyLjc1MiAyLjc1NEgxOC4yNWEyLjc1MyAyLjc1MyAwIDAgMCAyLjc1Mi0yLjc1NFY3LjgzYTIuNzUzIDIuNzUzIDAgMCAwLTIuNzUyLTIuNzUzaC0xLjEzVjMuNzY2YS43NS43NSAwIDEgMC0xLjUgMHYxLjMxMkg4LjM2MVpNNS43NTQgNi41OGMtLjY5MSAwLTEuMjUxLjU2LTEuMjUxIDEuMjUydjEuMjEzaDE0Ljk5OFY3LjgzMmExLjI1IDEuMjUgMCAwIDAtMS4yNS0xLjI1Mkg1Ljc1M1pNNC41MDMgMTcuNzZ2LTcuMjEzaDE0Ljk5OHY3LjIxNGMwIC42OTEtLjU2IDEuMjUyLTEuMjUgMS4yNTJINS43NTNjLS42OTEgMC0xLjI1MS0uNTYtMS4yNTEtMS4yNTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Calendar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-calendar',
        'staticon-Calendar',
        className
      ),
      ...props,
    })
);
Calendar.displayName = 'Calendar'

export default Calendar;
