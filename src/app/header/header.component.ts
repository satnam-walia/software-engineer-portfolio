import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public typedText: string = '';
  private firstHeading: string = 'Hey there! I’m a Software Engineering student at the ETS, Montreal.';
  private secondHeading: string = 'Currently : Looking for Summer 2024 Internship';
  private isTyping: boolean = true; // A flag to track the typing state

  constructor() {
    this.typeWriterEffect(this.firstHeading, () => {
      // Wait some time before rewriting the text
      setTimeout(() => {
        this.typeWriterEffect(this.secondHeading);
      }, 2000); // Wait for 2 seconds before starting to type the second heading
    });
  }

  typeWriterEffect(text: string, callback?: Function) {
    let i = 0;
    let backspaceDelay = 100; // Delay for backspacing
    let typingDelay = 150; // Delay for typing

    // Typing function
    const type = () => {
      if (i < text.length) {
        this.typedText += text[i++];
        setTimeout(type, typingDelay);
      } else {
        this.isTyping = false; // Finished typing the current text
        if (callback) callback(); // Call the callback if provided
      }
    };

    // Backspacing function
    const backspace = () => {
      if (this.typedText.length > 0) {
        this.typedText = this.typedText.substring(0, this.typedText.length - 1);
        setTimeout(backspace, backspaceDelay);
      } else {
        this.isTyping = true;
        type(); // Start typing the new text
      }
    };

    // If it's currently typing, we wait for it to finish then start backspacing
    if (this.isTyping) {
      setTimeout(() => {
        backspace(); // Start backspacing
      }, typingDelay * text.length + 1000); // Wait for the text to be typed out, then an additional second
    } else {
      backspace(); // Start backspacing immediately
    }
  }
}
