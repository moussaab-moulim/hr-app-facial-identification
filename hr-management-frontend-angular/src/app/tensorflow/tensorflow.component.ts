import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-tensorflow',
  templateUrl: './tensorflow.component.html',
  styleUrls: ['./tensorflow.component.css']
})
export class TensorflowComponent implements OnInit {

  public x:tf.Tensor2D;
  constructor() { }

  ngOnInit() {

  }

}
