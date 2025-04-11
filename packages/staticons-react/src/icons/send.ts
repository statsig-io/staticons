
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M17.716 3.709c1.608-.586 3.168.973 2.582 2.581l-4.73 12.97c-.613 1.68-2.95 1.786-3.713.167l-2.021-4.29c-.2-.424-.54-.764-.964-.964l-4.29-2.022c-1.62-.762-1.514-3.1.168-3.713l12.968-4.73Zm.92 2.729L14.15 18.742a.503.503 0 0 1-.929.042L11.2 14.493a3.52 3.52 0 0 0-.22-.398l7.657-7.657ZM17.57 5.37l-7.657 7.657a3.517 3.517 0 0 0-.398-.22l-4.291-2.022a.503.503 0 0 1 .042-.928L17.568 5.37Z","clip-rule":"evenodd"}]]

/**
 * @component @name Send
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzE2IDMuNzA5YzEuNjA4LS41ODYgMy4xNjguOTczIDIuNTgyIDIuNTgxbC00LjczIDEyLjk3Yy0uNjEzIDEuNjgtMi45NSAxLjc4Ni0zLjcxMy4xNjdsLTIuMDIxLTQuMjljLS4yLS40MjQtLjU0LS43NjQtLjk2NC0uOTY0bC00LjI5LTIuMDIyYy0xLjYyLS43NjItMS41MTQtMy4xLjE2OC0zLjcxM2wxMi45NjgtNC43M1ptLjkyIDIuNzI5TDE0LjE1IDE4Ljc0MmEuNTAzLjUwMyAwIDAgMS0uOTI5LjA0MkwxMS4yIDE0LjQ5M2EzLjUyIDMuNTIgMCAwIDAtLjIyLS4zOThsNy42NTctNy42NTdaTTE3LjU3IDUuMzdsLTcuNjU3IDcuNjU3YTMuNTE3IDMuNTE3IDAgMCAwLS4zOTgtLjIybC00LjI5MS0yLjAyMmEuNTAzLjUwMyAwIDAgMSAuMDQyLS45MjhMMTcuNTY4IDUuMzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Send = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-send',
        'staticon-Send',
        className
      ),
      ...props,
    })
);
Send.displayName = 'Send'

export default Send;
