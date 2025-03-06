import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public copy_email:string = "Copy";
  public copy_tlf:string = "Copy";

  copyMessage(val: number){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val == 0? "pardodevelop@gmail.com" : "+34 625 897 260";
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    if(val == 0)  this.copy_email = "✓ Copied";
    else this.copy_tlf = "✓ Copied";

    // Hide the tooltip after 1.5 seconds
    setTimeout(() => {
      if(val == 0)  this.copy_email = "Copy";
      else this.copy_tlf = "Copy";
    }, 1500);
  }
}
