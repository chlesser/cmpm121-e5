import type { Controller } from "./controllers.ts";
import { Direction } from "../core/mod.ts";
import type { Position } from "../core/mod.ts";

function positionToDirection(
  playerPos: Position,
  clickedPos: Position,
): Direction | undefined {
  const dx = clickedPos.x - playerPos.x;
  const dy = clickedPos.y - playerPos.y;
  if (dx == 1 && dy == 0) return "right" as Direction;
  else if (dx == -1 && dy == 0) return "left" as Direction;
  else if (dx == 0 && dy == 1) return "down" as Direction;
  else if (dx == 0 && dy == -1) return "up" as Direction;
  else return undefined;
}
export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const stop = board.onTileClick((clicked) => {
      const player = session.getState().puzzle.player;
      const direction = positionToDirection(player, clicked);
      if (direction != undefined) session.dispatch({ kind: "move", direction });
    });
    return stop;
  },
};
