
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.544 4.537a2.25 2.25 0 0 1 2.912 0l5.768 4.896.007.006 1.754 1.49a.75.75 0 1 1-.97 1.143l-.523-.444v6.126a2.25 2.25 0 0 1-2.25 2.25H15.5a2.25 2.25 0 0 1-2.25-2.25V15.5a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25v2.254a2.25 2.25 0 0 1-2.25 2.25H6.757a2.25 2.25 0 0 1-2.25-2.25v-6.125l-.522.443a.75.75 0 0 1-.97-1.144L4.768 9.44a.729.729 0 0 1 .008-.006l5.768-4.896Zm-4.537 5.818v7.399c0 .414.336.75.75.75H8.5a.75.75 0 0 0 .75-.75V15.5c0-.967.784-1.75 1.75-1.75h2c.966 0 1.75.783 1.75 1.75v2.254c0 .414.336.75.75.75h1.742a.75.75 0 0 0 .75-.75v-7.399L12.486 5.68a.75.75 0 0 0-.97 0l-5.508 4.675Z","clip-rule":"evenodd"}]]

/**
 * @component @name Home
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTQ0IDQuNTM3YTIuMjUgMi4yNSAwIDAgMSAyLjkxMiAwbDUuNzY4IDQuODk2LjAwNy4wMDYgMS43NTQgMS40OWEuNzUuNzUgMCAxIDEtLjk3IDEuMTQzbC0uNTIzLS40NDR2Ni4xMjZhMi4yNSAyLjI1IDAgMCAxLTIuMjUgMi4yNUgxNS41YTIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjVWMTUuNWEuMjUuMjUgMCAwIDAtLjI1LS4yNWgtMmEuMjUuMjUgMCAwIDAtLjI1LjI1djIuMjU0YTIuMjUgMi4yNSAwIDAgMS0yLjI1IDIuMjVINi43NTdhMi4yNSAyLjI1IDAgMCAxLTIuMjUtMi4yNXYtNi4xMjVsLS41MjIuNDQzYS43NS43NSAwIDAgMS0uOTctMS4xNDRMNC43NjggOS40NGEuNzI5LjcyOSAwIDAgMSAuMDA4LS4wMDZsNS43NjgtNC44OTZabS00LjUzNyA1LjgxOHY3LjM5OWMwIC40MTQuMzM2Ljc1Ljc1Ljc1SDguNWEuNzUuNzUgMCAwIDAgLjc1LS43NVYxNS41YzAtLjk2Ny43ODQtMS43NSAxLjc1LTEuNzVoMmMuOTY2IDAgMS43NS43ODMgMS43NSAxLjc1djIuMjU0YzAgLjQxNC4zMzYuNzUuNzUuNzVoMS43NDJhLjc1Ljc1IDAgMCAwIC43NS0uNzV2LTcuMzk5TDEyLjQ4NiA1LjY4YS43NS43NSAwIDAgMC0uOTcgMGwtNS41MDggNC42NzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
