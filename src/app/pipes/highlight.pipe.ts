import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, keyword: string): SafeHtml {
    if (!text || !keyword) return text;

    const words = keyword.split(/\s+/).filter(w => w.length > 0)
      .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); 

    const pattern = new RegExp(`(${words.join('|')})`, 'gi');
    const highlighted = text.replace(pattern, `<mark>$1</mark>`);

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
