import { Component } from '@angular/core';
import { QuestionService } from './service/question.service';
import { of } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QAApp';
  questions:any;
  currentQ:any;
  totalScore = 0
  currentQNum=0
  constructor(private questionService: QuestionService,private dialog:MatDialog){}
  ngOnInit(){
    this.questionService.getAllQuestions().subscribe(value=>{
      this.questions = value;
      console.log(value)
      this.currentQNum = 0;
      this.totalScore =0
      this.currentQ = this.questions[this.currentQNum]
    })
   // this.openDialog("gdfgdfg","gdfgd","Try Again")
  }

  newQuestion(value:any){
    this.totalScore = value;
    if(this.currentQNum != 9){
      this.currentQNum++
      this.currentQ = this.questions[this.currentQNum]
    }else{
      if(this.totalScore > 60){
        this.openDialog("Congratulations!","You have passed the test by a score of "+this.totalScore+".","Close")
      }else{
      //  this.ngOnInit()
        this.openDialog("Sorry!","You have failed the test by a score of "+this.totalScore+".","Try Again")
      }
    }
  }
  openDialog(title:string,content:string,action:string) {
   const dialogRef =  this.dialog.open(DialogComponent, {
      data: {
        title: title,
        content: content,
        action: action,
        score: this.totalScore,
      },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(()=>{
      this.ngOnInit()
    })
  }
}
