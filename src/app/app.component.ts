import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageModule, MessageComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('messageElement') messageInstance!: MessageComponent;
  public content: string = 'Enter a valid age between 18 and 60';
  public inputChange(event:any) {
    const age = parseInt(event.target.value);
    if(age < 18 || age > 60) {
      this.messageInstance.visible = true;
    } else {
      this.messageInstance.visible = false;
    }
  }
  public dismissClick() {
    this.messageInstance.visible = false;
  }
  title = 'myapp';
}
