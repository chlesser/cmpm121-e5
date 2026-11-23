import { hasCrate, Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  let goals = 0;
  for (const goal of puzzle.layout.goals) {
    if (hasCrate(puzzle, goal)) goals++;
  }
  return (
    <dl className="goals">
      <p>Goals Filled: {goals}/{puzzle.layout.goals.length}</p>
    </dl>
  );
}
