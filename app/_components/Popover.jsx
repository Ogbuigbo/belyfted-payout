import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Usage:
 * <Popover
 *   trigger={({ open, setOpen }) => <button onClick={() => setOpen(!open)}>Open</button>}
 * >
 *   <div>Popover content</div>
 * </Popover>
 */
function Popover({ trigger, children, className = "", panelStyle = {} }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const [panelPos, setPanelPos] = useState({
    top: 0,
    left: 0,
    width: undefined,
  });
  const [mounted, setMounted] = useState(false);

  // Mount portal only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on outside click, but ignore the first click after opening
  useEffect(() => {
    if (!open) return;
    let ignore = true;
    const timer = setTimeout(() => {
      ignore = false;
    }, 0);

    function handleClick(e) {
      if (ignore) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  // Positioning: fixed to viewport, using portal with smart positioning
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const panelWidth = 320; // Approximate width of your filter panel

      let left = rect.left;

      // If panel would overflow on the right, align it to the right edge of trigger
      if (left + panelWidth > viewportWidth) {
        left = rect.right - panelWidth;
      }

      // If panel would still overflow on the left, align it to viewport edge
      if (left < 10) {
        left = 10; // 10px margin from viewport edge
      }

      setPanelPos({
        top: rect.bottom + 4, // Add small gap below trigger
        left: left,
        width: rect.width,
      });
    }
  }, [open]);

  return (
    <>
      <span ref={triggerRef} style={{ display: "inline-block" }}>
        {trigger({ open, setOpen })}
      </span>
      {open &&
        mounted &&
        createPortal(
          <div
            ref={panelRef}
            className={`z-50 bg-white rounded-2xl shadow-xl ${className}`}
            style={{
              position: "fixed",
              top: panelPos.top,
              left: panelPos.left,
              minWidth: panelPos.width,
              maxWidth: "calc(100vw - 20px)", // Prevent horizontal overflow
              ...panelStyle,
            }}
          >
            {typeof children === "function"
              ? children({ open, setOpen })
              : children}
          </div>,
          document.body,
        )}
    </>
  );
}

export default Popover;
