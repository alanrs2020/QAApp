import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qaui',
  templateUrl: './qaui.component.html',
  styleUrls: ['./qaui.component.scss']
})
export class QauiComponent {
  qaForm!:FormGroup
  @Input() data:any;
  @Output() nextQEvent = new EventEmitter();
  showRequired=false;
  score = 0;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.qaForm = this.formBuilder.group({
      question:['',Validators.required],
      selectedOption:[null,Validators.required]
    })
    this.showRequired = false;
    this.score=0
  }

  nextQuestion(){
    this.showRequired =false
    if(this.qaForm.controls?.['selectedOption'].value != null){
      if(this.qaForm.controls?.['selectedOption'].value == this.data.answer){
        this.score+=10
        this.nextQEvent.emit(this.score)
        this.qaForm.reset()
      }else{
        this.qaForm.reset()
        this.nextQEvent.emit(this.score)
      }
    }else{
     this.showRequired =true
    }

  }
}
