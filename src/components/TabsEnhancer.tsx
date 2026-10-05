"use client";

import { useEffect } from "react";

/** Adds a tab bar to .gb-tabs blocks on the page. */
export function TabsEnhancer() {
  useEffect(() => {
    for (const group of document.querySelectorAll<HTMLElement>(".gb-tabs:not(.is-enhanced)")) {
      const tabs = [...group.querySelectorAll<HTMLElement>(":scope > .gb-tab")];
      if (!tabs.length) continue;
      const bar = document.createElement("div");
      bar.className = "gb-tablist";
      bar.setAttribute("role", "tablist");
      const buttons = tabs.map((tab, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("role", "tab");
        button.textContent = tab.dataset.title || `Tab ${i + 1}`;
        button.addEventListener("click", () => select(i));
        bar.append(button);
        return button;
      });
      const select = (active: number) => {
        tabs.forEach((tab, i) => tab.classList.toggle("is-active", i === active));
        buttons.forEach((b, i) => b.setAttribute("aria-selected", String(i === active)));
      };
      group.prepend(bar);
      group.classList.add("is-enhanced");
      select(0);
    }
  }, []);
  return null;
}
