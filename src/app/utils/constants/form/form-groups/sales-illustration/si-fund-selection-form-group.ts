import { FormGroup, FormBuilder, Validators } from '@angular/forms';
const SIFundSelectionFormBuilder = new FormBuilder();

export const HighFundSelectionFormGroup: FormGroup = SIFundSelectionFormBuilder.group({
  PEF: [0],
  PDEF: [0],
  PMSEF: [0],
  PODEF: [0],
  PHGSEF: [0],
  PHAMIPDPF: [0],
  PHGRADPF: [0],
  PHIAGDPF: [0],
  PHSGEDPF: [0],
  DGEF: [0],
  DAMIPDPF: [0],
  DIGDPF: [0],
  DGRADPF: [0],
  DIGF: [0],
  DGEPF: [0],
  DSGEDPF: [0],
  PEPGF: [0],
  DEPGF: [0],
})

export const MediumFundSelectionFormGroup: FormGroup = SIFundSelectionFormBuilder.group({
  PBF: [0],
  PBDPF: [0],
  PHDIDPF: [0],
  DFADPBF: [0],
  DFABF: [0],
  DGLIDPF: [0],
  PSPDPF: [0],
  DSPDPF: [0]
});

export const LowFundSelectionFormGroup: FormGroup = SIFundSelectionFormBuilder.group({
  PFIF: [0],
  PMMF: [0],
  DFIF: [0],
  DGODPBF: [0]
});

export const FundRiskTypeFormGroup: FormGroup = SIFundSelectionFormBuilder.group({
  risk: ['H']
});

export const HistoricalNavpuFundFormGroup: FormGroup = SIFundSelectionFormBuilder.group({
  navpuYear: [3]
});