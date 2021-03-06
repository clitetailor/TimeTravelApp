import { Component, OnInit } from '@angular/core';
import { ReducerService } from './reducer.service';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos = [];
  step = 0;
  count = 1;

  line = { x1: 10, y1: 10, x2: 590, y2: 10 }
  points = [{
        x: this.line.x1,
        y: this.line.y1
      }];

  constructor(private reducer: ReducerService,
              private localStorage: LocalstorageService) {

    this.reducer.store.subscribe(() => {
      console.log(this.reducer.state);
      this.localStorage.set("todoApp", JSON.stringify(this.reducer.state));

      this.todos = this.reducer.state.current;
      this.step = this.reducer.state.currentId;
      this.count = this.reducer.state.count;

      let begin = {
        x: this.line.x1,
        y: this.line.y1
      }

      this.points = [begin];

      if (this.count > 1) {
        let vector = {
          x: (this.line.x2 - this.line.x1) / (this.count - 1),
          y: (this.line.y2 - this.line.y1) / (this.count - 1)
        }

        for (let i = 1; i < this.count; ++i) {
          this.points = this.points.concat([{
            x: begin.x + vector.x * i,
            y: begin.y + vector.y * i
          }])
        }
      }
    })

  }

  ngOnInit() {
    let data = this.localStorage.get("todoApp");
    let lastState = undefined;

    if (data !== null) {
      lastState = JSON.parse(data);
      console.log(lastState);
      this.reducer.initState(lastState);
    }
  }
}
