import { FormGroup, FormBuilder } from '@angular/forms';

const PriorityFormBuilder = new FormBuilder();

export const PriorityFormGroup: FormGroup = PriorityFormBuilder.group({
  savingsPriority: [''],
  protectionPriority: [''],
  healthPriority: [''],
  educationPriority: [''],
  retirementPriority: [''],
  estatePlanningPriority: ['']
});
