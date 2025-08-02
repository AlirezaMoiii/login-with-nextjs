"use client";

import { useState, useEffect, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ToggleTheme() {
  const [theme, setTheme] = useState("fusion-pulse");

  function handleChange(value: SetStateAction<string>) {
    setTheme(value);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light-breeze">Light Breeze</SelectItem>
        <SelectItem value="dark-nova">Dark Nova</SelectItem>
        <SelectItem value="fusion-pulse">Fusion Pulse</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ToggleTheme;
