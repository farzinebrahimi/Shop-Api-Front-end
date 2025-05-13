import {Component, inject, OnInit} from '@angular/core';
import {MemberService} from '../../../../../_services/member.service';
import {Member} from '../../../../../_models/user/member.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-member-list',
  imports: [
    NgForOf
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  private memberService: MemberService = inject(MemberService)
  members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe({
      next: members => this.members = members,
    })
  }
}
