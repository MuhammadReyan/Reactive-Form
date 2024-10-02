import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';




@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resource-form.component.html',
  styleUrl: './resource-form.component.css'
})
export class ResourceFormComponent {

   resourceForm: FormGroup;

   submittedData: any[] = []; 

   constructor(private fb: FormBuilder) {
     this.resourceForm = this.fb.group({
       name: ['', Validators.required],
       description: ['', Validators.required],
       type: ['', Validators.required],
       tags: this.fb.array([]) 
     });
   }
 
   
   get tags() {
     return this.resourceForm.get('tags') as FormArray;
   }
 
   
   addTag() {
     const tagForm = this.fb.group({
       key: ['', Validators.required],
       value: ['', Validators.required]
     });
     this.tags.push(tagForm); 
   }
 
   
   removeTag(index: number) {
     this.tags.removeAt(index);
   }
 
   
   onSubmit() {
     if (this.resourceForm.valid) {
   
       this.submittedData.push(this.resourceForm.value);
      
       this.resourceForm.reset();
    
       this.tags.clear();
     }
   }
}
