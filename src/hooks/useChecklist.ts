import { useEffect, useState } from "react";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

const STORAGE = "daily-checklist-v1";

export function useChecklist() {
  const [day, setDay] = useState(todayKey());
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.day === todayKey()) {
          setChecked(parsed.checked || {});
        } else {
          localStorage.setItem(STORAGE, JSON.stringify({ day: todayKey(), checked: {} }));
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify({ day, checked }));
  }, [day, checked]);

  function toggle(key: string) {
    setChecked((c) => ({ ...c, [key]: !c[key] }));
  }

  return { checked, toggle };
}
