
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-3.803 4.898A6.11 6.11 0 0 1 8 14.136a6.11 6.11 0 0 1-3.634-1.191c.504-1.61 1.821-3.062 3.684-3.062 1.842 0 3.138 1.423 3.647 3.015Zm.984-.93c-.49-1.15-1.35-2.251-2.562-2.856a3.303 3.303 0 1 0-4.203.03c-1.205.623-2.062 1.735-2.544 2.888a6.136 6.136 0 1 1 9.31-.062ZM8 4.525a2.053 2.053 0 1 0 0 4.106 2.053 2.053 0 0 0 0-4.106Z","clip-rule":"evenodd"}]]

/**
 * @component @name Account
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNSA4YTcuNSA3LjUgMCAxIDEtMTUgMCA3LjUgNy41IDAgMCAxIDE1IDBabS0zLjgwMyA0Ljg5OEE2LjExIDYuMTEgMCAwIDEgOCAxNC4xMzZhNi4xMSA2LjExIDAgMCAxLTMuNjM0LTEuMTkxYy41MDQtMS42MSAxLjgyMS0zLjA2MiAzLjY4NC0zLjA2MiAxLjg0MiAwIDMuMTM4IDEuNDIzIDMuNjQ3IDMuMDE1Wm0uOTg0LS45M2MtLjQ5LTEuMTUtMS4zNS0yLjI1MS0yLjU2Mi0yLjg1NmEzLjMwMyAzLjMwMyAwIDEgMC00LjIwMy4wM2MtMS4yMDUuNjIzLTIuMDYyIDEuNzM1LTIuNTQ0IDIuODg4YTYuMTM2IDYuMTM2IDAgMSAxIDkuMzEtLjA2MlpNOCA0LjUyNWEyLjA1MyAyLjA1MyAwIDEgMCAwIDQuMTA2IDIuMDUzIDIuMDUzIDAgMCAwIDAtNC4xMDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Account = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-account',
        'staticon-Account',
        className
      ),
      ...props,
    })
);
Account.displayName = 'Account'

export default Account;
