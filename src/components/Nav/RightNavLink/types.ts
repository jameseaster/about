export interface RightNavLinkProps {
  pdf?: string; // Works because of global.d.ts file?
  title: string;
  close?: () => void;
}