import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent{

  currentEndeavors: string[] = [
    'Daily Java problem-solving on LeetCode',
    'Engagement with the GDG Cloud community in Montreal, focusing on GenAI'
  ];

  dreams: string[] = ['Landing an internship in the United States'];

  personalInsights: string[] = ['Practicing Mixed Martial Arts (MMA) as a hobby'];

  valuesDrive: string[] = [
    'Upholding consistency in all endeavors',
    'Finding joy in every moment'
  ];

  uniqueStrengths: string[] = [
    'Constant drive to learn new technologies',
    'Ever-growing knowledge base in the tech field'
  ];

  futureVisions: string[] = [
    'Aiming to work with a big tech company on real-world problems',
    'Continuously improving skills to prepare for advanced opportunities'
  ];


}
