import { Component, OnInit, Inject, OpaqueToken, Optional } from '@angular/core';

import { Sequences, CreateSequence, StudentInterface, data, LocalStorageService  } from '../../services';

const STUDENT = new OpaqueToken('student');

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  providers: [
    { provide: Sequences, useFactory: CreateSequence(20) },
    { provide: STUDENT, useValue: data },
    LocalStorageService
  ]
})
export class ServiceDemoComponent implements OnInit {
  stringWithsequences: string;
  studentData: StudentInterface;

  constructor(
    @Inject(Sequences) @Optional() private sequencesService: string,
    @Inject(STUDENT) @Optional() private student: StudentInterface,
    @Optional() localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.stringWithsequences = `Demo with use factory in service ${this.sequencesService}`;
    this.studentData = this.student;
  }

}
