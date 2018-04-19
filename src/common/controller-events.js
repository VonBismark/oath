import KeyCodes from './windows-keycodes';

export function isAButton(keypressEvent) {
  return keypressEvent.keyCode === KeyCodes.gamepadA || keypressEvent.keyCode === KeyCodes.a;
}

export function isBButton(keypressEvent) {
  return keypressEvent.keyCode === KeyCodes.gamepadB || keypressEvent.keyCode === KeyCodes.b;
}

export function isXButton(keypressEvent) {
  return keypressEvent.keyCode === KeyCodes.gamepadX || keypressEvent.keyCode === KeyCodes.x;
}

export function isYButton(keypressEvent) {
  return keypressEvent.keyCode === KeyCodes.gamepadY || keypressEvent.keyCode === KeyCodes.y;
}
