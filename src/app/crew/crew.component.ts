import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }
  add(memberName: string, isFirst: boolean) {
    // let arr: string[] = [];
    // this.crew.forEach( member => {
    //   arr.push(member["name"])
    // })
    if (!(this.crew.findIndex((m)=>m["name"]===memberName)>=0)){
      this.crew.push({ name: memberName, firstMission: isFirst })
    }
    // if (!arr.includes(memberName)) {
    //   this.crew.push({ name: memberName, firstMission: isFirst });
    // }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  edit(member: object) {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }




}
