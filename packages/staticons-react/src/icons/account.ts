
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm5.653-4.07a7.5 7.5 0 1 0-11.3.006c.624-1.354 1.66-2.627 3.085-3.346a4.109 4.109 0 1 1 5.134-.008c1.427.716 2.46 1.991 3.08 3.347Zm-1.171 1.084c-.692-1.891-2.264-3.523-4.456-3.528h-.036c-2.187.013-3.769 1.645-4.467 3.532A7.467 7.467 0 0 0 12 19.5c1.68 0 3.231-.552 4.482-1.486Zm-4.46-5.028a2.609 2.609 0 1 0-.034 0h.034Z","clip-rule":"evenodd"}]]

/**
 * @component @name Account
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjFhOSA5IDAgMSAwIDAtMTggOSA5IDAgMCAwIDAgMThabTUuNjUzLTQuMDdhNy41IDcuNSAwIDEgMC0xMS4zLjAwNmMuNjI0LTEuMzU0IDEuNjYtMi42MjcgMy4wODUtMy4zNDZhNC4xMDkgNC4xMDkgMCAxIDEgNS4xMzQtLjAwOGMxLjQyNy43MTYgMi40NiAxLjk5MSAzLjA4IDMuMzQ3Wm0tMS4xNzEgMS4wODRjLS42OTItMS44OTEtMi4yNjQtMy41MjMtNC40NTYtMy41MjhoLS4wMzZjLTIuMTg3LjAxMy0zLjc2OSAxLjY0NS00LjQ2NyAzLjUzMkE3LjQ2NyA3LjQ2NyAwIDAgMCAxMiAxOS41YzEuNjggMCAzLjIzMS0uNTUyIDQuNDgyLTEuNDg2Wm0tNC40Ni01LjAyOGEyLjYwOSAyLjYwOSAwIDEgMC0uMDM0IDBoLjAzNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
