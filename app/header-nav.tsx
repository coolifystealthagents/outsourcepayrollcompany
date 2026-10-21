'use client';

import { useEffect, useRef, useState } from 'react';

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector<HTMLElement>('a');
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && panelRef.current) {
        const items = [...panelRef.current.querySelectorAll<HTMLElement>('a')];
        const firstItem = items[0];
        const lastItem = items.at(-1);
        if (event.shiftKey && document.activeElement === firstItem) { event.preventDefault(); lastItem?.focus(); }
        if (!event.shiftKey && document.activeElement === lastItem) { event.preventDefault(); firstItem?.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const links = <><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></>;
  return <>
    <nav className="links fleet-links" aria-label="Main navigation">{links}</nav>
    <button ref={buttonRef} className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>Menu</button>
    {open && <nav ref={panelRef} id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links}</nav>}
  </>;
}
