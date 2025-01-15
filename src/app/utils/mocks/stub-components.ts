import { Component, Input } from "@angular/core";
import { DynamicTableSpecs } from "@models/specs/dynamic-table-specs";
import { FieldSpecs } from "@models/specs/field-specs";
import { FormGeneratorSpecs } from "@models/specs/form-generator-specs";
import { GenericDiseaseFurtherInfoSpecs } from "@models/specs/generic-disease-further-info-specs";
import { RowGeneratorSpecs } from "@models/specs/row-generator-specs";

@Component({
    selector: 'owner-insured',
    template: ''
}) export class OwnerInsuredStubComponent {
    @Input() siInfo;
    @Input() eappId;
    @Input() passedAction;
    @Input() isEazyHealth;
}

@Component({
    selector: 'policy-info',
    template: ''
}) export class PolicyInfoStubComponent {
    @Input() siInfo;
    @Input() eappId;
    @Input() passedAction;
    @Input() isEazyHealth;
}

@Component({
    selector: 'insurance-declaration',
    template: ''
}) export class InsuranceDeclarationStubComponent {
    @Input() eappId: string;
    @Input() isGAE: boolean;
    @Input() siId: string;
    @Input() isAllTabsValid: boolean;
    @Input() passedAction: string;
    @Input() isFullView: boolean
    @Input() siInfo;
}

@Component({
    selector: 'non-med',
    template: ''
}) export class NonMedStubComponent {
    @Input() eappId: string;
    @Input() siInfo;
    @Input() isPBR: boolean;
    @Input() hasPBR: boolean;
    @Input() nonMedData;
    @Input() isAllTabsValid: boolean;
    @Input() passedAction: string;
    @Input() isFullView: boolean
}

@Component({
    selector: 'row-generator',
    template: ''
}) export class RowGeneratorStubComponent {
    @Input() rowSpecs: RowGeneratorSpecs;
}

@Component({
    selector: 'form-generator',
    template: ''
}) export class FormGeneratorStubComponent {
    @Input() formSpecs: FormGeneratorSpecs;
}

@Component({
    selector: 'table-generator',
    template: ''
}) export class TableGeneratorStubComponent {
    @Input() tableSpecs: DynamicTableSpecs;
}

@Component({
    selector: 'disease-further-info',
    template: ''
}) export class DiseaseFurtherInfoStubComponent {
    @Input() specs: GenericDiseaseFurtherInfoSpecs
    @Input() formSpecs: FormGeneratorSpecs
    @Input() defaultFieldSpecs: FieldSpecs
    @Input() sectionTitle: string
}

@Component({
    selector: 'disease-section-gen',
    template: ''
}) export class DiseaseSectionGenStubComponent {
    @Input() iterate: string[]
    @Input() isPBR: boolean
}