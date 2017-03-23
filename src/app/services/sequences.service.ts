import { OpaqueToken } from '@angular/core';

export const Sequences = new OpaqueToken('equence');

const allLetter = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

export function CreateSequence(length: number) {
  return function(): string {
    let seq = '';

    for (let i = 1; i <= length; i++) {
      const codeChar = Math.floor(Math.random() * allLetter.length);
      seq += allLetter[codeChar];
    }

    return seq;
  };
}

