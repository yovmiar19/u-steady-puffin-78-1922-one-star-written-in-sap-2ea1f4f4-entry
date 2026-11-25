// One Star, Written in Sap — make.fun entry
// A houseplant leaves a 1-star review of its human owner.
// The program writes the single review line to /output/entry.txt.
//
// Gate (from the kit RULES.txt): /output/entry.txt must be UTF-8 text of
// 1-280 characters. The line below is 136 characters, well inside the gate.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Talks to me every morning about her ex. I photosynthesize, I don't do therapy. One star because her coffee breath counts as a CO2 bonus.";

// Sanity-check the gate before writing so a bad line can never ship.
if (ENTRY.length < 1 || ENTRY.length >= 280) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
